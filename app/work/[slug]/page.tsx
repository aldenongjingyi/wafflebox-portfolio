import { getAllProjects, getProjectBySlug, categories } from "@/lib/projects";
import ProjectPage from "./ProjectPage";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — WaffleBox Productions` };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cat = categories.find((c) =>
    c.projects.some((p) => p.slug === slug)
  );

  return <ProjectPage project={project} categoryLabel={cat?.label ?? ""} />;
}

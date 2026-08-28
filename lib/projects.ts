export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
};

export type Category = {
  slug: string;
  label: string;
  projects: Project[];
};

export const categories: Category[] = [
  {
    slug: "product",
    label: "Product",
    projects: [
      {
        slug: "jomivegan",
        title: "JomiVegan",
        category: "Product",
        description: "JomiVegan is a homegrown Malaysian plant-based brand making vegan comfort food actually taste good. We shot their Hari-Hara sambal and Vegan Pesto range — the brief was clean and appetising, and the team made the whole session easy with clear vision and great energy.",
        coverImage: "/images/work/product-hari-hara.jpg",
        images: [
          "/images/work/product-hari-hara.jpg",
          "/images/work/product-vegan-pesto.jpg",
        ],
      },
      {
        slug: "the-elixir",
        title: "The Elixir",
        category: "Product",
        description: "The Elixir is a Malaysian kombucha brand started by two brothers who genuinely care about what goes into the bottle. The shoot had a moody, editorial feel — dark tones, minimal props, letting the product speak. Low-key one of our favourite sessions.",
        coverImage: "/images/work/product-drinks.jpg",
        images: ["/images/work/product-drinks.jpg"],
      },
      {
        slug: "scoban",
        title: "Scoban",
        category: "Product",
        description: "Scoban is an oral care brand with a sharp identity — their Charcoal Deep Clean and Color Repair Whitening lines under the Saludent range needed imagery that matched. Clean whites, precise styling. The client knew what they wanted and we delivered exactly that.",
        coverImage: "/images/work/product-scoban.jpg",
        images: [
          "/images/work/product-scoban.jpg",
          "/images/work/product-saludent.jpg",
        ],
      },
      {
        slug: "honeyg",
        title: "HoneyG",
        category: "Product",
        description: "HoneyG is a local food and drinks spot with a lot of personality. The brief was warm, inviting, and scroll-stopping — the kind of content that makes people hungry just looking at it. Great vibes on set, and the food was genuinely good.",
        coverImage: "/images/work/product-food.jpg",
        images: ["/images/work/product-food.jpg"],
      },
    ],
  },
  {
    slug: "graduation",
    label: "Graduation",
    projects: [
      {
        slug: "xin-en-graduation",
        title: "Xin En",
        category: "Graduation",
        description: "Xin En's graduation shoot at Sunway University. She came in with a clear vision of how she wanted to look and feel — relaxed, intentional, and genuinely celebratory. We just made sure the camera kept up.",
        coverImage: "/images/work/event-graduation-2.jpg",
        images: ["/images/work/event-graduation-2.jpg"],
      },
      {
        slug: "luo-tong-graduation",
        title: "Luo Tong",
        category: "Graduation",
        description: "Luo Tong's graduation session at Sunway University. Candid, warm, and real — the kind of shoot where everything just flows. We focused on capturing the moment rather than staging it, and the results showed.",
        coverImage: "/images/work/event-graduation-1.jpg",
        images: [
          "/images/work/event-graduation-1.jpg",
          "/images/work/event-graduation-3.jpg",
        ],
      },
    ],
  },
  {
    slug: "portraits",
    label: "Portraits",
    projects: [
      {
        slug: "portrait-session-1",
        title: "Portrait Session",
        category: "Portraits",
        description: "A personal portrait session — no specific brief, just good light and a subject comfortable in front of the camera. Sessions like this are where we get to slow down and focus purely on craft.",
        coverImage: "/images/work/portrait-1.jpg",
        images: [
          "/images/work/portrait-1.jpg",
          "/images/work/portrait-2.jpg",
        ],
      },
    ],
  },
  {
    slug: "commercial",
    label: "Commercial",
    projects: [
      {
        slug: "klinik-anda",
        title: "Klinik Anda",
        category: "Commercial",
        description: "Klinik Anda 24 Jam is a round-the-clock community clinic that needed imagery to match their professional image online. We handled the exterior and signage photography — straightforward brief, executed cleanly. The kind of job that looks simple but matters a lot to the client.",
        coverImage: "/images/work/event-klinik.jpg",
        images: ["/images/work/event-klinik.jpg"],
      },
    ],
  },
];

export function getAllProjects(): Project[] {
  return categories.flatMap((c) => c.projects);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

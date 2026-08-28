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
        description: "Product photography for JomiVegan — Hari-Hara sambal and Vegan Pesto.",
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
        description: "Moody beverage photography for The Elixir.",
        coverImage: "/images/work/product-drinks.jpg",
        images: ["/images/work/product-drinks.jpg"],
      },
      {
        slug: "scoban",
        title: "Scoban",
        category: "Product",
        description: "Clean product photography for Scoban — Charcoal Deep Clean and Color Repair Whitening.",
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
        description: "Food and drinks photography for HoneyG.",
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
        description: "Graduation photography at Sunway University.",
        coverImage: "/images/work/event-graduation-2.jpg",
        images: ["/images/work/event-graduation-2.jpg"],
      },
      {
        slug: "luo-tong-graduation",
        title: "Luo Tong",
        category: "Graduation",
        description: "Graduation photography at Sunway University.",
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
        description: "Studio portrait session.",
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
        description: "Exterior and signage photography for Klinik Anda 24 Jam.",
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

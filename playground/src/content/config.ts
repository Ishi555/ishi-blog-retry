import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.string(),
    tags: z.array(z.string())
  })
});

const specials = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.object({
      default: z.string(),
      hover: z.string(),
      active: z.string()
    }),
    published: z.string(),
    updated: z.string(),
    index: z.number()
  })
});

export const collections = {
  posts,
  specials
}; 
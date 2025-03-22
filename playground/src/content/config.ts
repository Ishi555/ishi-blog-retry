import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    published: z.boolean().default(true),
    category: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = {
  posts
}; 
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    published: z.boolean(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
    author: z.string().optional(),
    readingTime: z.string().optional()
  })
});

export const collections = {
  posts
}; 
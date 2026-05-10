import { defineCollection, z } from 'astro:content';

const renungan = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      author: z.string().default('Tim Redaksi GPIB Benowo'),
      ayat: z.string(),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const berita = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      pubDate: z.coerce.date(),
      author: z.string().default('Panitia Gereja'),
      category: z.enum(['warta', 'kegiatan', 'pengumuman', 'jemaat']),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const khotbah = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    preacher: z.string(),
    ayat: z.string(),
    youtubeId: z.string(),
    duration: z.string().optional(),
    ibadah: z.enum([
      'minggu-pagi',
      'minggu-sore',
      'rabu',
      'jumat-agung',
      'natal',
      'paskah',
      'lainnya',
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { renungan, berita, khotbah };

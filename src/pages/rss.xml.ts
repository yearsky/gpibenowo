import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/data/site';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const renungan = await getCollection('renungan', ({ data }) => !data.draft);
  renungan.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `Renungan Harian – ${SITE.name}`,
    description: 'Renungan harian dari GPIB Benowo Surabaya',
    site: context.site!,
    items: renungan.slice(0, 20).map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/renungan/${post.id}/`,
    })),
    customData: '<language>id</language>',
  });
}

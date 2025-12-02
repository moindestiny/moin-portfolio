import { getArticles } from '@/lib/db';
import ArticlesClient from './ArticlesClient';

export default async function Articles() {
  const posts = await getArticles();
  return <ArticlesClient posts={posts} />;
}
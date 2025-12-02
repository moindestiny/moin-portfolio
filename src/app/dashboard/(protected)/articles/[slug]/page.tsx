import { getArticle } from '@/lib/db';
import { updateArticleAction } from '@/app/actions';
import { notFound } from 'next/navigation';

export default async function EditArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Edit Article</h1>
      <form action={updateArticleAction} className="space-y-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
        <input type="hidden" name="slug" value={article.slug} />
        <input type="hidden" name="views" value={article.views} />
        
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Slug (Read-only)</label>
          <input 
            type="text" 
            name="slug_display" 
            defaultValue={article.slug} 
            disabled 
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500 cursor-not-allowed" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
          <input type="text" name="title" defaultValue={article.title} required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Date</label>
          <input type="text" name="date" defaultValue={article.date} required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category</label>
          <input type="text" name="category" defaultValue={article.category} required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Excerpt</label>
          <textarea name="excerpt" defaultValue={article.excerpt} required rows={3} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Content (HTML)</label>
          <textarea name="content" defaultValue={article.content} rows={10} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100 font-mono text-sm" />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors">
          Update Article
        </button>
      </form>
    </div>
  );
}

import { createArticleAction } from '@/app/actions';

export default function NewArticlePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">New Article</h1>
      <form action={createArticleAction} className="space-y-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Slug</label>
          <input type="text" name="slug" required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
          <input type="text" name="title" required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Date</label>
          <input type="text" name="date" placeholder="September 5, 2024" required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category</label>
          <input type="text" name="category" required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Excerpt</label>
          <textarea name="excerpt" required rows={3} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Content (HTML)</label>
          <textarea name="content" rows={10} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100 font-mono text-sm" />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors">
          Create Article
        </button>
      </form>
    </div>
  );
}

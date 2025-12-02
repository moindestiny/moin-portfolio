import Link from 'next/link';
import { getArticles } from '@/lib/db';
import { deleteArticleAction } from '@/app/actions';

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Articles</h1>
        <Link
          href="/dashboard/articles/new"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
        >
          Add New Article
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-700">
            {articles.map((article) => (
              <tr key={article.slug}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {article.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
                  {article.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/dashboard/articles/${article.slug}`}
                    className="text-teal-600 hover:text-teal-900 dark:hover:text-teal-400 mr-4"
                  >
                    Edit
                  </Link>
                  <form action={deleteArticleAction.bind(null, article.slug)} className="inline-block">
                    <button type="submit" className="text-red-600 hover:text-red-900 dark:hover:text-red-400">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

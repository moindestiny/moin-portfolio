import Link from 'next/link';
import { getProjects } from '@/lib/db';
import { deleteProjectAction } from '@/app/actions';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Projects</h1>
        <Link
          href="/dashboard/projects/new"
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
        >
          Add New Project
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Slug</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-zinc-800 divide-y divide-zinc-200 dark:divide-zinc-700">
            {projects.map((project) => (
              <tr key={project.slug}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
                  {project.slug}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link
                    href={`/dashboard/projects/${project.slug}`}
                    className="text-teal-600 hover:text-teal-900 dark:hover:text-teal-400 mr-4"
                  >
                    Edit
                  </Link>
                  <form action={deleteProjectAction.bind(null, project.slug)} className="inline-block">
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

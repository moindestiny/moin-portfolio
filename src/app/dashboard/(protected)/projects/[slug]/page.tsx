import { getProject } from '@/lib/db';
import { updateProjectAction } from '@/app/actions';
import { notFound } from 'next/navigation';

export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Edit Project</h1>
      <form action={updateProjectAction} className="space-y-6 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
        {/* Hidden input for slug to identify the project being updated, 
            although slug is usually immutable, we are using it as ID here. 
            If we want to allow changing slug, we'd need the old slug. 
            For now, let's assume slug is the ID and immutable or we just update the record with this slug.
        */}
        <input type="hidden" name="slug" value={project.slug} />
        
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Slug (Read-only)</label>
          <input 
            type="text" 
            name="slug_display" 
            defaultValue={project.slug} 
            disabled 
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500 cursor-not-allowed" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
          <input type="text" name="title" defaultValue={project.title} required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Description</label>
          <textarea name="description" defaultValue={project.description} required rows={3} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Long Description</label>
          <textarea name="longDescription" defaultValue={project.longDescription} rows={5} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Icon URL</label>
          <input type="text" name="icon" defaultValue={project.icon} required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Link URL</label>
          <input type="text" name="link" defaultValue={project.link} required className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tech Stack (comma separated)</label>
          <input type="text" name="tech" defaultValue={project.tech.join(', ')} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Screenshots URLs (comma separated)</label>
          <input type="text" name="screenshots" defaultValue={project.screenshots?.join(', ')} className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100" />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors">
          Update Project
        </button>
      </form>
    </div>
  );
}

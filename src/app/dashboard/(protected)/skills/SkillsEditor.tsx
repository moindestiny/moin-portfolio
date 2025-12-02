'use client';

import { useActionState, useState, useEffect } from 'react';
import { updateSkillsAction } from '@/app/actions';

// We need to fetch initial data. Since this is a client component (for state), 
// we can pass data from a server component wrapper or fetch it.
// Let's make this a client component that accepts initial data.

export default function SkillsEditor({ initialSkills }: { initialSkills: any[] }) {
  const [jsonValue, setJsonValue] = useState(JSON.stringify(initialSkills, null, 2));
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      // Validate JSON before sending
      JSON.parse(jsonValue);
      setError(null);
      await updateSkillsAction(jsonValue);
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Manage Skills</h1>
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">
          Edit your skills directly as JSON. This allows full flexibility to add categories and skills.
        </p>
        
        <form action={handleSubmit}>
          <div className="mb-4">
            <textarea
              value={jsonValue}
              onChange={(e) => setJsonValue(e.target.value)}
              rows={20}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono text-sm"
            />
          </div>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors"
          >
            Save Skills
          </button>
        </form>
      </div>
    </div>
  );
}

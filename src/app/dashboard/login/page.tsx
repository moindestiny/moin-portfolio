'use client';

import { useActionState } from 'react';
import { login } from '@/app/actions';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
      const result = await login(formData);
      if (result?.error) {
        return { error: result.error };
      }
      return null;
  }, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-zinc-900 dark:text-zinc-100">Dashboard Login</h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm">{state.error}</p>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition-colors disabled:opacity-50"
          >
            {isPending ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

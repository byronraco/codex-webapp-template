export default function Page() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        To get started, edit the page.tsx file.
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        This template uses Next.js App Router + TypeScript + Tailwind + Vitest.
      </p>

      <div className="mt-6 flex gap-3">
        <a
          className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          Next.js Docs
        </a>
        <a
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          href="/api/health"
        >
          Health API
        </a>
      </div>
    </main>
  );
}

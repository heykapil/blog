import SnippetCard from '@/components/SnippetCard'
export default function SnippetsLayout({ title, snippets }) {
  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            {title}
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Reuseable code snippets collected by me
          </p>
        </div>
        <div className="container py-12">
          <div className="lg:grid grid-cols-2 gap-6">
            {snippets.map((snippet) => (
              <SnippetCard key={snippet.title} snippet={snippet} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

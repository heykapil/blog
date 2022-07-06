import Link from '@/components/Link'
import Pagination from '@/components/Pagination'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import { useState } from 'react'
import Image from 'next/image'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Tag: {title}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are the posts for the tag {title} throughout the blog. Search to filter out using name of the article.
        </p>
          <div className="relative input-group flex w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block flex w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
          <svg className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a"><stop offset="0%" stopColor="#000092"/><stop offset="100%" stopColor="#ff00f3"/></linearGradient><linearGradient id="b" x1="3" x2="11" y1="8" y2="8" gradientUnits="userSpaceOnUse" xlinkXhref="#a"/></defs><path fill="url(#b)" d="m 4.597,14.712958 2.92,-2.345896 c 0.253,-0.202374 0.713,-0.202374 0.965,0 l 2.922,2.345896 C 11.639,14.902943 11.888,15 12.124,15 c 0.127,0 0.249,-0.02891 0.363,-0.0857 C 12.813,14.749097 13,14.381518 13,13.906557 L 13,2.5487868 C 13,1.694889 12.327,1 11.5,1 l -7,0 C 3.673,1 3,1.694889 3,2.5487868 L 3,13.906557 c 0,0.474961 0.187,0.841507 0.512,1.006711 0.324,0.164171 0.72,0.09086 1.085,-0.20031 z M 4,2.5487868 C 4,2.26381 4.224,2.0325245 4.5,2.0325245 l 7,0 c 0.275,0 0.5,0.2312855 0.5,0.5162623 L 12,13.883841 9.096,11.551368 c -0.613,-0.492514 -1.577,-0.492514 -2.192,0 L 4,13.883841 4,2.5487868 Z"/></svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-10 flex group hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent bg-opacity-20 px-10 hover:rounded-xl transition duration-200">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline gap-4">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

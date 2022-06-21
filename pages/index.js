import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'
import Hero from "@/components/Hero"
import Tag from '@/components/Tag'
import Twemoji from '@/components/Twemoji.js'
import TypedBios from '@/components/TypedBios'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import CardNoBG from '@/components/CardNoBG'
import Card from '@/components/Card'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600'
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className=" divide-gray-200 dark:divide-gray-700 mt-8 md:mt-16">
        <div className="my-4 pt-6 pb-8 space-y-2 md:space-y-5 xl:grid xl:grid-cols-3 gap-12">
        <div className="xl:col-span-1 col-auto">
         <Hero />
        </div>
          <div className="xl:col-span-2 col-auto">
            <p
              className={`mb-8 text-4xl leading-[60px] font-extrabold tracking-tight text-transparent bg-clip-text ${headingColorClass} md:text-7xl md:leading-[86px]`}
            >
              Hello, there! <i className="twa twa-waving-hand"></i>
            </p>
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <h1 className="text-neutral-900 dark:text-neutral-200">
                <span className="font-medium background-author-animate bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">I'm Kapil Chaudhary</span> - a research scholar in
                mathematical modelling. <br />
                <span className="font-medium">Junior Research Fellow, CSIR India.</span>
                <span className="align-middle">
                <i className="twa twa-india-flag"></i>
                </span>
              </h1>
              <TypedBios />
            </div>
          </div>
        </div>
    {/*<div className="pb-2 w-full flex flex-wrap mx-auto">
            <CardNoBG
              title='Research'
              description='Know more about my interests and published papers.'
              href={'/projects'}
              className="py-4 md:px-4"
            />
            <CardNoBG
              title='Teaching'
              description='Know more about the courses that i have taught.'
              href={'/teaching'}
              className="py-4 md:px-4"
            />
            <CardNoBG
              title='Snippets'
              description='Some useful snippets collected by me.'
              href={'/snippets'}
              className="py-4 md:px-4"
            />
            <CardNoBG
              title='About Me'
              description='Want to know more about me?'
              href={'/about'}
              className="py-4 md:px-4"
            />
            </div>
  */}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
          <h2 className="font-bold font-cansu text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Latest Posts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You can find the latest blog articles written by me arranged date wise.
        </p>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12 flex group hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent bg-opacity-20 px-8 hover:rounded-xl transition duration-200">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-1 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
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
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

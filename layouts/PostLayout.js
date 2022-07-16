import Comments from '@/components/comments'
import Image from '@/components/Image'
import Link from '@/components/Link'
import ViewCounter from '@/components/ViewCounter'
import PageTitle from '@/components/PageTitle'
import ScrollTop from '@/components/ScrollTop'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import Twemoji from '@/components/Twemoji.js'
import siteMetadata from '@/data/siteMetadata'
import SocialButtons from '@/components/SocialButtons'

const headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600'
const postDateTemplate = { year: 'numeric', month: 'short', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, page, children }) {
  const {
    slug,
    fileName,
    date,
    title,
    tags,
    readingTime: { text: readingTimeText },
  } = frontMatter
  const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`
  return (
    <SectionContainer>
      <BlogSeo url={postUrl} authorDetails={authorDetails} {...frontMatter} />
      <ScrollTop />
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h2 className="font-cansu font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white md:text-5xl">
          {title}
        </h2>
        <div className="font-cansu flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
           <Image
              alt="Kapil Chaudhary"
              height={22}
              width={22}
              src="/static/images/logo.jpg"
              className="rounded-full"
            /><p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Kapil Chaudhary / '}
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </p> </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          {readingTimeText.replace('min', 'mins')}
            {` • `}
            <ViewCounter className="text-sm" slug={slug} />
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <canvas></canvas>
        {/* <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div> */}
        <SocialButtons postUrl={postUrl} title={title} fileName={fileName} />
        <div className="prose prose-lg dark:prose-dark w-full place-items-center h-fit">
        <Comments frontMatter={frontMatter} />
        </div>
        <footer>
              <div className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
                {/* <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/blog/page/${page}`}
                    className="flex text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <svg viewBox="0 -9 3 24" class="overflow-visible mr-3 w-auto h-6"><path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    Back to the blog
                  </Link>
                </div> */}
                {tags && (
                  <div className="py-4">
                    {/* <h2 className="text-sm tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                      Tags
                    </h2> */}
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                 {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-sm mb-1 tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Post
                        </h2>
                        <div className="text-primary-500 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                          <Link href={`/blog/${prev.slug}`} className="text-base">
                            {prev.title}
                          </Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
                          Next Post
                        </h2>
                        <div className="text-primary-500 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                          <Link href={`/blog/${next.slug}`} className="text-base">
                            {next.title}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </footer>
      </article>
    </SectionContainer>
  )
}

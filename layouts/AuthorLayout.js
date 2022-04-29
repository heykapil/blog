import ProfileCard from '@/components/ProfileCard'
import { PageSeo } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar } = frontMatter

  return (
    <>
      <PageSeo title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            About
          </h2>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 pt-8">
        {/*  <ProfileCard avatar={avatar} /> */}
          <div className="pb-8 xl:pl-8 prose prose-lg dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

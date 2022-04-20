import siteMetadata from '@/data/siteMetadata'
import teachingsData from '@/data/teachingsData'
import TeachingCard from '@/components/TeachingCard'
import { PageSeo } from '@/components/SEO'

export default function Teachings() {
  const currentteachings = teachingsData.filter(({ type }) => type === 'current')
  const pastteachings = teachingsData.filter(({ type }) => type === 'past')

  return (
    <>
      <PageSeo
        title={`Teachings - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Teachings
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My open source side projects and stuff that I built with my colleagues at work
          </p>
        </div>
        <div className="container py-12">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Work
          </h3>
          <div className="flex flex-wrap -m-4">
            {currentteachings.map((teachings) => (
              <TeachingCard
                key={teachings.title}
                title={teachings.title}
                description={teachings.description}
                href={teachings.href}
              />
            ))}
          </div>
        </div>
        <div className="container py-12">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Past Teachings
          </h3>
          <div className="flex flex-wrap -m-4">
            {pastteachings.map((teachings) => (
              <TeachingCard
                key={teachings.title}
                title={teachings.title}
                description={teachings.description}
                href={teachings.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

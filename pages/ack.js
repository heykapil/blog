import PageTitle from '@/components/PageTitle'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

export default function Acknowledgements() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <PageTitle>Acknowledgements</PageTitle>
      <h3 className="my-4 text-2xl font-bold">Attribution & Acknowledgements</h3>
      <ul className="ml-4 sm:ml-8 list-disc">
        <li className="p-4">
          React components created by <Link href="https://ant.design/">Ant Design</Link>
        </li>
        <li className="p-4">
          Theme & styling with <Link href="https://tailwindcss.com/">tailwindcss</Link>
        </li>
        <li className="p-4">
          Static Site Generation (SSG), Server Side Rendering (SSR) powered by{' '}
          <Link href="https://vercel.com/">Next.js</Link>
        </li>
        <li className="p-4">
          Deployment with <Link href="https://vercel.com/">Vercel</Link>
        </li>
        <li className="p-4">
          Wallpaper <i>Ash Rain</i> created by{' '}
          <Link href="https://www.deviantart.com/ellysiumn">Ellysiumn</Link>
        </li>
        <li className="p-4">
          Font <Link href="https://www.lexend.com/">Lexend</Link>
        </li>
        <li className="p-4">
          Metasearch logo made by{' '}
          <Link href="https://www.freepik.com" title="Freepik">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </Link>
        </li>
        <li className="p-4">
          Brand icons provided by{' '}
          <Link href="https://simpleicons.org/" title="Simple Icons">
            Simple Icons
          </Link>
        </li>
        <li className="p-4">
          Site bootstrapped with{' '}
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </li>
      </ul>
      <p>
        In order to resolve a complaint regarding the Site or to receive further information
        regarding use of the Site, please contact us at:
      </p>
      <p>me@jerrykjia.com</p>
    </>
  )
}

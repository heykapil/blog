import { currentDayName } from "@/lib/utils/dateUtils";
import NowPlaying from '@/components/NowPlaying';
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
var year = new Date().getFullYear();
export default function Footer() {

  return (

    <footer className="text-gray-600 dark:text-gray-300">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div className="sm:col-span-2">

          <a

            href="/"

            aria-label="Go home"

            title="Kapil Chaudhary"

            className="inline-flex items-center"

          >
            <span className="text-xl font-bold tracking-wide uppercase background-author-animate bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">

              Kapil Chaudhary

            </span>

          </a>

          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-gray-300">
              Thanks for visiting my personal website. The code is <a href='//github.com/heykapil/blog' class='text-primary-500 dark:text-primary-500 link-underline link-underline-black' target='_blank'>open source</a> on github. It is hosted on <a href='//vercel.com' class='text-primary-500 dark:text-primary-500 link-underline link-underline-black' target='_blank'>Vercel</a> and built using <a href='//nextjs.com' class='text-primary-500 dark:text-primary-500 link-underline link-underline-black' target='_blank'>Nextjs</a>. Feel free to open any <a href='https://github.com/heykapil/blog/issues' class='text-primary-500 dark:text-primary-500 link-underline link-underline-black' target='_blank'>issue</a> or <a href='https://github.com/heykapil/blog/pulls' class='text-primary-500 dark:text-primary-500 link-underline link-underline-black' target='_blank'>PR</a>.           
            </p>
          </div>

        </div>

        <div className="space-y-2 text-sm dark:text-gray-300">

          <p className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-100">

            Contacts

          </p>

          <div className="flex">

            <p className="mr-1 dark:text-gray-200 text-gray-800">Phone:</p>

            <a

              href="tel:+918178217233"

              aria-label="phone"

              title="phone"

              className="transition-colors duration-300 text-gray-600 dark:text-gray-400 text-deep-purple-accent-400 hover:text-deep-purple-800 link-underline link-underline-black"

            >

            817-821-7233

            </a>

          </div>

          <div className="flex">

            <p className="mr-1 text-gray-800 dark:text-gray-200">Email:</p>

            <a

              href="mailto:contact@heykapil.in"

              aria-label="email"

              title="email"

              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 text-gray-600 dark:text-gray-400 link-underline link-underline-black"

            >

              contact@heykapil.in

            </a>

          </div>

          <div className="flex">

            <p className="mr-1 text-gray-800 dark:text-gray-200">Address:</p>

            <a

              href="#"

              target="_blank"

              rel="noopener noreferrer"

              aria-label="address"

              title="address"

              className="transition-colors duration-300 text-gray-600 dark:text-gray-400 hover:text-deep-purple-800"

            >

              Ahmedabad, India

            </a>

          </div>

        </div>

        <div>

          <span className="text-base font-bold tracking-wide text-gray-900 dark:text-gray-100">

            Social

          </span>

          <div className="flex items-center mt-1 space-x-3">
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          </div>

          <p className="mt-4 text-sm text-gray-500">

          <div className="mb-3 flex">
          <NowPlaying />
          </div>
          </p>

        </div>

      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">

        <p className="text-sm text-gray-600 dark:text-gray-400">

        &copy;{year} Kapil Chaudhary. Have a good {currentDayName()}!

        </p>

        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">

          <li>

            <a

              href="/acks"

              className="text-sm rounded py-1 px-2 text-gray-900 sm:py-2 sm:px-3 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 link-underline link-underline-black"

            >

              Credits

            </a>

          </li>

          <li>

            <a

              href="/privacy-policy"

              className="text-sm rounded py-1 px-2 text-gray-900 sm:py-2 sm:px-3 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 link-underline link-underline-black"

            >

              Privacy Policy

            </a>

          </li>

          <li>

            <a

              href="/terms"

              className="text-sm rounded py-1 px-2 text-gray-900 sm:py-2 sm:px-3 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 link-underline link-underline-black"

            >

              Terms &amp; Conditions

            </a>

          </li>

        </ul>

      </div>

    </div>
    </footer>

  );

}; 

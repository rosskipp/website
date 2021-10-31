import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Engineer, maker of stuff, outdoor enthusiast
            </div>
            <div className="text-gray-500 dark:text-gray-400"></div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>I'm currently a principal software engineer at Civitas Learning.</p>
            <p>
              I spent the last 4 years at Alteryx building new machine learning and analytics tools
              and worked my way up to being a Director. In a past life I worked in NASCAR for Joe
              Gibbs Racing and Roush-Fenway Racing as a race engineer, simulation engineer and
              software engineer. I got my degree in Mechanical Engineering in 2011 from Rose-Hulman
              Institute of Technology.
            </p>
            <p>
              Outside of work I have a few too many hobbies. Currently, I'm into woodworking and
              mechatronics. I also fly fish and ride my gravel and mountain bikes a lot.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

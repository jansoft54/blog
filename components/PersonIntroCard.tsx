'use client'
import React from 'react'
import Image from '@/components/Image'
import Row from './Row'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import Col from './Col'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

function yearsSinceDate(pastDate: string): number {
  const past = new Date(pastDate)
  const now = new Date()
  const diffInMs = now.getTime() - past.getTime()
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(years)
}
const PersonIntroCard = ({ className, animProps }) => {
  return (
    <>
      <style>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(66, 153, 225, 0.5), 0 0 10px rgba(66, 153, 225, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(66, 153, 225, 0.8), 0 0 30px rgba(66, 153, 225, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(66, 153, 225, 0.5), 0 0 10px rgba(66, 153, 225, 0.5);
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <motion.div
        className={`  sticky top-0 flex h-auto items-start rounded-xl  dark:bg-black ${className}`}
        {...animProps}
      >
        <Col className="gap-y-5  pt-6">
          <Row className="justify-start">
            <Image
              unoptimized
              src={'/static/images/avatar.jpeg'}
              alt="avatar"
              width={128}
              height={128}
              className="aspect-square h-full w-full cursor-pointer	 rounded-md object-cover duration-500 hover:scale-[110%]"
            />
          </Row>
          <h2 className=" pl-3 text-3xl font-bold">Jan Hardtke</h2>

          <Row className="divide-y divide-gray-200 pl-3 pt-0 dark:divide-gray-700">
            <Col>
              {yearsSinceDate('1999-10-27')} year old CS graduate student, trying to build stuff
              others might find useful. Here to write about things i like, mostly revolving around
              ML.
              <hr className="mt-3 h-px border-t-0 bg-gray-200 dark:bg-gray-700" />
            </Col>
          </Row>

          <Row className="justify-between">
            <Row className="items-center gap-2 pl-3">
              <GraduationCap strokeWidth={1.5} />
              <a
                className="text-sm text-primary-500"
                href="https://www.informatik.uni-bonn.de/de/studium/master/computer-science-msc/computer-science-master"
              >
                @UniBonn
              </a>
            </Row>
            <Row className="gap-3 pl-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={5} />
              <SocialIcon kind="x" href={siteMetadata.x} size={5} />
            </Row>
          </Row>
          <Row className="pl-3">
            <Row className="items-center gap-2">
              <BriefcaseBusiness strokeWidth={1.5} />
              <a href="https://www.bwi.de/" className="text-sm text-primary-500">
                @BWI
              </a>
            </Row>
          </Row>
        </Col>
      </motion.div>
    </>
  )
}

export default PersonIntroCard

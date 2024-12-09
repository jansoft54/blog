'use client'
import Col from '@/components/Col'
import Row from '@/components/Row'
import Link from 'next/link'
import React from 'react'
import StackIcon from 'tech-stack-icons'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/components/util/util'

export default function ProjectCard({ title, desc, img, stack, finished, link }) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <motion.div
      className={
        'col-span-1 row-span-1 h-full rounded-2xl shadow-lg duration-500 hover:scale-105 dark:bg-zinc-900'
      }
      initial={isMobile ? {} : { y: '30%', opacity: 0 }}
      whileInView={isMobile ? {} : { y: 0, opacity: 1 }}
      viewport={isMobile ? {} : { once: true, amount: 0.3 }}
      transition={isMobile ? {} : { duration: 0.4, ease: 'easeIn' }}
    >
      <Col className="h-full">
        <div className="overflow-clip rounded-tl-2xl" style={{ height: '300px' }}>
          <img
            className=" w-full rounded-tl-2xl rounded-tr-2xl object-cover"
            style={{ height: '300px', filter: finished ? '' : 'blur(16px)' }}
            src={img}
          />
        </div>

        <Col className=" h-full justify-between p-5">
          <Col>
            <Row className="flex-wrap gap-3">
              {stack.map((tech) => (
                <Row
                  key={tech.name}
                  className=" w-fit items-center justify-between gap-2 rounded-full border border-primary-300 bg-primary-400 bg-opacity-80 p-1 px-2 shadow-2xl"
                >
                  <StackIcon name={tech.icon} className="h-5 w-5 " />
                  <div className="text-sm  dark:text-white">{tech.name}</div>
                </Row>
              ))}
            </Row>
            <h3 className="mt-3 text-xl font-bold text-primary-500">
              <Row className="items-center gap-2">
                {title}
                {!finished && <div className="text-sm">(In Progress...)</div>}
              </Row>
            </h3>
            <p className="mb-3 text-base dark:text-gray-400">{desc}</p>
          </Col>
          <Link
            href={link}
            aria-label="Github"
            className="relative bottom-0 flex w-min justify-center rounded-full bg-primary-500 p-3 text-base font-medium leading-6 shadow-md"
            style={{ cursor: finished ? 'pointer' : 'default' }}
          >
            <Row
              className="relative  bottom-0 items-center justify-between gap-3 "
              style={{ opacity: finished ? '1' : '.5' }}
            >
              <StackIcon name={'github'} className="h-5 w-5 " />
              <div className=" whitespace-nowrap text-sm	 leading-none text-white duration-200">
                GitHub
              </div>
            </Row>
          </Link>
        </Col>
      </Col>
    </motion.div>
  )
}

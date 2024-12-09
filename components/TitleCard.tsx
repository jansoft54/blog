'use client'

import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'
import { MotionProps } from 'framer-motion'

const TitleCard = ({
  title,
  children,
  className,
  animProps,
}: {
  title: string
  children: React.ReactNode
  className: string
  animProps?: MotionProps
}) => {
  return (
    <motion.div
      className={clsx(
        ' mb-6  cursor-pointer rounded-2xl p-6 shadow-lg duration-500 hover:scale-105 dark:bg-zinc-900',
        className
      )}
      {...{ animProps }}
    >
      <h2 className="mb-2 border-b-[1px] border-gray-200 pb-2 text-xl font-bold text-primary-500 dark:border-gray-700">
        {title}
      </h2>
      <div className="mt-2">{children}</div>
    </motion.div>
  )
}

export default TitleCard

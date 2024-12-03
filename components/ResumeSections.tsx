import clsx from 'clsx'
import React from 'react'
const ResumeSection = ({ title, children, className }) => (
  <div
    className={clsx(
      ' mb-6  cursor-pointer rounded-2xl p-6 shadow-lg duration-500 hover:scale-105 dark:bg-zinc-900',
      className
    )}
  >
    <h2 className="mb-2 border-b-[1px] border-gray-200 pb-2 text-xl font-bold text-primary-500 dark:border-gray-700">
      {title}
    </h2>
    <div className="mt-2">{children}</div>
  </div>
)
export default ResumeSection

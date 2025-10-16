import clsx from 'clsx'
import React from 'react'

interface TitleCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

const TitleCard = React.forwardRef<HTMLDivElement, TitleCardProps>(
  ({ title, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'cursor-pointer rounded-2xl p-6 shadow-lg duration-500 hover:scale-105 dark:bg-zinc-900 ',
          className
        )}
      >
        <h2 className="mb-2 border-b-[1px] border-gray-200 pb-2 text-xl font-bold text-primary-500 dark:border-gray-700">
          {title}
        </h2>
        <div className="mt-2">{children}</div>
      </div>
    )
  }
)

TitleCard.displayName = 'TitleCard'

export default TitleCard

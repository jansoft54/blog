import React from 'react'
type RowProps = {
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function Row({ className, children, ...args }: RowProps) {
  return (
    <div className={`flex flex-row ${className}`} {...args}>
      {children}
    </div>
  )
}

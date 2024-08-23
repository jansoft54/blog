import React from 'react'

export default function Col({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`flex flex-col ${className}`}>{children}</div>
}

'use client'
import React from 'react'
import TitleCard from '../../TitleCard'

import Col from '../../Col'
import TechIcon from './TechIcon'
import { useMediaQuery } from '@/components/util/util'

export default function Frontend() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <TitleCard title="Frontend" className={' z-0 col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon
          icon={'reactjs'}
          headline={'React'}
          desc={'A JavaScript library for building interactive user interfaces.'}
        />
        <TechIcon
          icon={'nextjs2'}
          headline={'NextJs'}
          desc={'A React framework for server-side rendering and generating static websites.'}
        />
        <TechIcon
          icon={'typescript'}
          headline={'Typescript'}
          desc={'A statically typed superset of JavaScript.'}
        />
        <TechIcon
          icon={'tailwindcss'}
          headline={'TailwindCSS'}
          desc={'A CSS framework for rapidly designing custom user interfaces.'}
        />
        <TechIcon
          icon={'shadcnui'}
          headline={'Shadcn-ui'}
          desc={'A collection of customizable React components.'}
        />
      </Col>
    </TitleCard>
  )
}

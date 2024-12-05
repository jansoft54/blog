import React from 'react'
import TitleCard from '../../TitleCard'
import StackIcon from 'tech-stack-icons'
import Row from '../../Row'
import Col from '../../Col'
import TechIcon from './TechIcon'

export default function Frontend() {
  return (
    <TitleCard
      title="Frontend"
      className={' z-0 col-span-1 row-span-1 h-full'}
      animProps={{
        initial: { x: '100%', opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' },
      }}
    >
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

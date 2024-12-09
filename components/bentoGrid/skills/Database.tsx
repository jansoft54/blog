import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'
import { isMobile } from 'util/util'

export default function Database() {
  return (
    <TitleCard
      title="DB"
      className={' z-0 col-span-1 row-span-1 h-full'}
      animProps={
        !isMobile
          ? {
              initial: { x: '100%', opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              viewport: { once: true, amount: 0.3 },
              transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeIn',
              },
            }
          : {}
      }
    >
      <Col className="flex-wrap gap-3">
        <TechIcon
          icon={'mongodb'}
          headline={'MongoDB'}
          desc={'NoSQL database for flexible and scalable data storage.'}
        />
        <TechIcon
          icon={'postgresql'}
          headline={'PostgreSQL'}
          desc={'Open-source relational database with robust features.'}
        />
        <TechIcon
          icon={'redis'}
          headline={'Redis'}
          desc={'In-memory data store used for caching and real-time applications.'}
        />
      </Col>
    </TitleCard>
  )
}

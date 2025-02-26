'use client'

import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'
import { useMediaQuery } from '@/components/util/util'

export default function Database() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <TitleCard title="DB" className={' z-0 col-span-1 row-span-1 h-full'}>
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

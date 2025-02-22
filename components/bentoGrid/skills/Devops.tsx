'use client'

import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'
import { useMediaQuery } from '@/components/util/util'

export default function Devops() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <TitleCard title="CI/CD" className={' col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon
          icon={'git'}
          headline={'Git'}
          desc={'Version control system for tracking code changes.'}
        />
        <TechIcon
          icon={'gitlab'}
          headline={'GitLab'}
          desc={'Git repository manager with built-in CI/CD and DevOps tools.'}
        />
        <TechIcon
          icon={'github'}
          headline={'GitHub'}
          desc={'Platform for hosting and collaborating on Git repositories.'}
        />
      </Col>
    </TitleCard>
  )
}

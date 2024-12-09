import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'
import { useMediaQuery } from 'util/util'

export default function Devops() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <TitleCard
      title="CI/CD"
      className={' col-span-1 row-span-1 h-full'}
      animProps={
        !isMobile
          ? {
              initial: { x: '-100%', opacity: 0 },
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

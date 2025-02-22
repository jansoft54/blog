'use client'
import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'
import { useMediaQuery } from '@/components/util/util'

export default function Backend() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  console.log(isMobile)

  return (
    <TitleCard title="Backend" className={' z-30 col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon
          icon={'supabase'}
          headline={'Supabase'}
          desc={'Open-source Firebase alternative offering backend services.'}
        />
        <TechIcon
          icon={'kubernetes'}
          headline={'Kubernetes'}
          desc={'Container orchestration platform for managing deployments.'}
        />
        <TechIcon
          icon={'docker'}
          headline={'Docker'}
          desc={'Tool for containerizing applications for consistent environments.'}
        />
        <TechIcon
          icon={'graphql'}
          headline={'GraphQL'}
          desc={'API query language allowing precise data fetching.'}
        />
        <TechIcon
          icon={'ec2'}
          headline={'EC2'}
          desc={'AWS service providing scalable virtual servers.'}
        />
      </Col>
    </TitleCard>
  )
}

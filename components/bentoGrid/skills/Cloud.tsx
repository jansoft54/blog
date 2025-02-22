'use client'

import React from 'react'
import Col from '../../Col'
import TechIcon from './TechIcon'
import TitleCard from '../../TitleCard'
import { useMediaQuery } from '@/components/util/util'

export default function Cloud() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <TitleCard title="Cloud" className={' z-0 col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'aws'} headline={'AWS'} desc={'Amazon Web Services'} />
        <TechIcon icon={'gcloud'} headline={'GCP'} desc={'Google Cloud Platform'} />
        <TechIcon icon={'cloudflare'} headline={'Cloudflare'} desc={'Cloudflare'} />
      </Col>
    </TitleCard>
  )
}

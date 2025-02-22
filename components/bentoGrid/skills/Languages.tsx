'use client'

import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'
import { useMediaQuery } from '@/components/util/util'

export default function Database() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <TitleCard title="Languages" className={' z-20 col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3 font-bold">
        <TechIcon icon={'typescript'} headline={'TypeScript'} desc={''} />
        <TechIcon icon={'python'} headline={'Python'} desc={''} />
        <TechIcon icon={'java'} headline={'Java'} desc={''} />
        <TechIcon icon={'go'} headline={'Go'} desc={''} />
        <TechIcon icon={'c++'} headline={'C/C++'} desc={''} />
      </Col>
    </TitleCard>
  )
}

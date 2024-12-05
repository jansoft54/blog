import React from 'react'
import TitleCard from '../../TitleCard'
import Col from '../../Col'
import TechIcon from './TechIcon'

export default function Database() {
  return (
    <TitleCard
      title="Languages"
      className={' z-20 col-span-1 row-span-1 h-full'}
      animProps={{
        initial: { y: '10%', opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.3, delay: 0, ease: 'easeIn' },
      }}
    >
      <Col className="flex-wrap gap-3 font-bold">
        <TechIcon icon={'typescript'} headline={'TypeScript'} desc={''} />
        <TechIcon icon={'python'} headline={'Python'} desc={''} />
        <TechIcon icon={'java'} headline={'Java'} desc={''} />
        <TechIcon icon={'go'} headline={'Go'} desc={''} />
        <TechIcon icon={'c++'} headline={'C++'} desc={''} />
      </Col>
    </TitleCard>
  )
}

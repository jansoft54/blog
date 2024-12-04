import React from 'react'
import Col from '../../Col'
import TechIcon from './TechIcon'
import TitleCard from '../../TitleCard'

export default function Cloud() {
  return (
    <TitleCard
      title="Cloud"
      className={' z-0 col-span-1 row-span-1 h-full'}
      animProps={{
        initial: { x: '-100%', opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true, amount: 0 },
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: 'easeIn',
        },
      }}
    >
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'aws'} headline={'AWS'} desc={'Amazon Web Services'} />
        <TechIcon icon={'gcloud'} headline={'GCP'} desc={'Google Cloud Platform'} />
        <TechIcon icon={'cloudflare'} headline={'Cloudflare'} desc={'Cloudflare'} />
      </Col>
    </TitleCard>
  )
}

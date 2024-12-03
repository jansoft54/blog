import React from 'react'
import ResumeSection from '../ResumeSections'
import Col from '../Col'
import TechIcon from './TechIcon'

export default function Cloud() {
  return (
    <ResumeSection title="Cloud" className={' col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'aws'} headline={'AWS'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'gcloud'} headline={'GCP'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'cloudflare'} headline={'Cloudflare'} desc={'Nextsjnkfksjdf'} />
      </Col>
    </ResumeSection>
  )
}

import React from 'react'
import ResumeSection from '../ResumeSections'
import Col from '../Col'
import TechIcon from './TechIcon'

export default function Database() {
  return (
    <ResumeSection title="DB" className={' col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'mongodb'} headline={'MongoDB'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'postgresql'} headline={'PostgreSQL'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'redis'} headline={'Redis'} desc={'Nextsjnkfksjdf'} />
      </Col>
    </ResumeSection>
  )
}

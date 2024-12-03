import React from 'react'
import ResumeSection from '../ResumeSections'
import Col from '../Col'
import TechIcon from './TechIcon'

export default function Database() {
  return (
    <ResumeSection title="Languages" className={' col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'typescript'} headline={'TypeScript'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'python'} headline={'Python'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'java'} headline={'Java'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'go'} headline={'Go'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'c++'} headline={'C++'} desc={'Nextsjnkfksjdf'} />
      </Col>
    </ResumeSection>
  )
}

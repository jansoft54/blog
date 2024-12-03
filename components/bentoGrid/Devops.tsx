import React from 'react'
import ResumeSection from '../ResumeSections'
import Col from '../Col'
import TechIcon from './TechIcon'

export default function Devops() {
  return (
    <ResumeSection title="CI/CD" className={' col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'git'} headline={'Git'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'gitlab'} headline={'GitLab'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'github'} headline={'GitHub'} desc={'Nextsjnkfksjdf'} />
      </Col>
    </ResumeSection>
  )
}

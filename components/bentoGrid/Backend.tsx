import React from 'react'
import ResumeSection from '../ResumeSections'
import Col from '../Col'
import TechIcon from './TechIcon'

export default function Backend() {
  return (
    <ResumeSection title="Backend" className={' col-span-1 row-span-1 h-full'}>
      <Col className="flex-wrap gap-3">
        <TechIcon icon={'supabase'} headline={'Supabase'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'kubernetes'} headline={'Kubernetes'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'docker'} headline={'Docker'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'graphql'} headline={'GraphQL'} desc={'Nextsjnkfksjdf'} />
        <TechIcon icon={'ec2'} headline={'EC2'} desc={'Nextsjnkfksjdf'} />
      </Col>
    </ResumeSection>
  )
}

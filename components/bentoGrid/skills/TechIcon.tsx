import React from 'react'
import Row from '../../Row'
import StackIcon from 'tech-stack-icons'
import Col from '../../Col'

export default function TechIcon({ icon, headline, desc }) {
  return (
    <Row className="gap-4">
      <StackIcon name={icon} className="h-8 w-8 shrink-0" />
      <Col>
        <div className="text-base  text-white">{headline}</div>
        <div className="dark:text-gray-400">{desc}</div>
      </Col>
    </Row>
  )
}

import Col from '@/components/Col'
import Row from '@/components/Row'
import React from 'react'
import StackIcon from 'tech-stack-icons'

export default function ProjectCard({ title, desc, img, stack }) {
  return (
    <div
      className={
        'col-span-1 row-span-1 mb-6 h-full cursor-pointer rounded-2xl shadow-lg duration-500 hover:scale-105 dark:bg-zinc-900'
      }
    >
      <Col className="h-full">
        <img className="h-2/3 w-full rounded-tl-2xl rounded-tr-2xl object-cover" src={img} />

        <Col className="p-5">
          <Row className="flex-wrap gap-3">
            {stack.map((tech) => (
              <Row className=" w-fit items-center justify-between gap-2 rounded-full border border-primary-300 bg-primary-400 bg-opacity-80 p-1 px-2 shadow-2xl">
                <StackIcon name={tech.icon} className="h-5 w-5 " />
                <div className="text-sm  dark:text-white">{tech.name}</div>
              </Row>
            ))}
          </Row>
          <h3 className="mt-3 text-xl font-bold text-primary-500">{title}</h3>
          <p className="text-base dark:text-gray-400">{desc}</p>
        </Col>
      </Col>
    </div>
  )
}

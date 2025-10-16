'use client'
import React, { useRef, useEffect, useState } from 'react'
import TitleCard from '../TitleCard'
import Row from '../Row'
import Col from '../Col'

export default function Experience() {
  const cardRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observerInstance.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    )
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])
  const fadeInClass = (delay) => (inView ? `animate-fadeIn delay-[${delay}ms]` : 'opacity-0')

  return (
    <TitleCard
      ref={cardRef}
      title="Experience doing stuff"
      className="col-span-2 row-span-1 h-full"
    >
      <Col className={`relative gap-6 dark:text-gray-400 xl:w-8/12`}>
        <Col className={`${fadeInClass(1450)}`}>
          <Row className="items-start justify-start gap-4">
            <div className="flex w-16 shrink-0 justify-center rounded">
              <img className="rounded-md p-3" src="/static/images/comma.jpeg" alt="bwi" />
            </div>
            <Col>
              <strong className="dark:text-white">
                ML-Engineer, Working Student, CommaSoft AG
              </strong>
              <div className="">
                Responsible for fine-tuning, benchmarking, and deploying open-source models to
                develop a custom, private LLM solution —{'  '}
                <a href="https://alan.de/" className=" whitespace-nowrap text-primary-500">
                  Alan LLM
                </a>
                .
              </div>
            </Col>
          </Row>
        </Col>
        <Col className={`${fadeInClass(1250)}`}>
          <Row className="items-start justify-start gap-4">
            <div className="flex w-16 shrink-0 justify-center">
              <img className="rounded-md p-1" src="/static/images/bwi.png" alt="bwi" />
            </div>
            <Col>
              <strong className="dark:text-white">Software Dev, Working Student, BWI GmbH</strong>
              Focused on the development of a secure messenger based on the Matrix protocol
            </Col>
          </Row>
        </Col>

        {/* Second Experience Block */}
        <Col className={`${fadeInClass(1000)}`}>
          <Row className="items-start justify-start gap-4">
            <div className="flex w-16 shrink-0 justify-center">
              <div className="flex h-12 w-12 justify-center rounded-md bg-black">
                <img className="w-5" src="/static/images/logo_light_single.svg" alt="craftone" />
              </div>
            </div>
            <Col>
              <strong className="dark:text-white">
                Co-Founder and Developer, CraftOne / FH Applications UG
              </strong>
              <div>
                Developed an innovative website editor with manual and LLM-guided design
                capabilities
              </div>
            </Col>
          </Row>
        </Col>

        {/* Third Experience Block */}
        <Col className={`${fadeInClass(750)}`}>
          <Row className="items-start justify-start gap-4">
            <div className="flex w-16 shrink-0 justify-center">
              <img className="rounded-md p-3" src="/static/images/cebicon.jpeg" alt="craftone" />
            </div>
            <Col>
              <strong className="dark:text-white">Internship, CebiCon GmbH</strong>
              <ul className="list-circle">
                <li>Compiler extension development for a custom scripting language</li>
                <li>Development of driver monitoring tools in C++/CLI</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Col>
    </TitleCard>
  )
}

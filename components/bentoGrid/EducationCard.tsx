'use client'
import React, { useEffect, useRef, useState } from 'react'
import TitleCard from '../TitleCard'
import Row from '../Row'
import Col from '../Col'

export default function EducationCard() {
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
        threshold: 0.2, // Adjust threshold as needed
      }
    )
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])

  // Helper to conditionally add animation classes
  const fadeInClass = (delay) => (inView ? `animate-fadeIn delay-[${delay}ms]` : 'opacity-0')

  return (
    <TitleCard ref={cardRef} title="Education" className="col-span-2 row-span-1 h-full">
      <Col className="relative gap-6 pl-5 dark:text-gray-400">
        {/* Vertical timeline line */}
        <div
          className={`absolute bottom-0 left-[5.5px] mb-[-5px] w-px bg-primary-200 ${
            inView ? 'animate-expand' : ''
          }`}
        ></div>

        {/* First Education Row */}
        <Row className="relative">
          <div className={`relative mt-[5px] ${fadeInClass(1250)}`}>
            <div className="absolute left-[-20px] h-3 w-3 animate-ping rounded-full dark:bg-primary-300"></div>
            <div className="absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </div>
          <div className={`flex flex-col ${fadeInClass(1250)}`}>
            <strong className="dark:text-white">10.2024 - present</strong>
            M.Sc. in Computer Science, University of Bonn
            <ul className="list-circle italic">
              <li>Expected graduation: Autumn 2026</li>
            </ul>
          </div>
        </Row>

        {/* Second Education Row */}
        <Row className="relative">
          <div className={`relative mt-[5px] ${fadeInClass(1000)}`}>
            <div className="absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </div>
          <div className={`flex flex-col ${fadeInClass(1000)}`}>
            <strong className="dark:text-white">2020-2024</strong>
            <div>B.Sc. in Computer Science, University of Bonn</div>
            <Col className="list-circle">
              "Second Order Methods for Neural Network Optimization" (Grade: 1.3 [1.0-5.0])
            </Col>
          </div>
        </Row>

        {/* Third Education Row */}
        <Row className="relative">
          <div className={`relative mt-[5px] ${fadeInClass(750)}`}>
            <div className="absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </div>
          <div className={`flex flex-col ${fadeInClass(750)}`}>
            <strong className="dark:text-white">2018</strong>
            Abitur (German high school diploma)
            <ul className="list-circle">
              <li>Grade: 1.6 (German grading system, equivalent to approx. 3.4 GPA)</li>
            </ul>
          </div>
        </Row>
      </Col>
    </TitleCard>
  )
}

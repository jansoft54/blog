import React from 'react'
import TitleCard from '../TitleCard'
import Row from '../Row'
import Col from '../Col'

export default function EducationCard() {
  return (
    <TitleCard
      title="Education"
      className={' col-span-2 row-span-1 h-full'}
      animProps={{
        initial: { x: '-30%', opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true, amount: 0 },
        transition: { duration: 0.5, ease: 'easeIn' },
      }}
    >
      <Col className=" relative gap-6 pl-5 dark:text-gray-400">
        <div className=" animate-heightGrow absolute bottom-0   left-[5.5px] mb-[-5px] h-0 w-px bg-primary-200  [animation-delay:1000ms] [animation-duration:1200ms]"></div>

        <Row className="relative">
          <div className="animate-fade relative  mt-[5px] opacity-0 [animation-delay:1800ms] [animation-duration:400ms]">
            <div className=" absolute left-[-20px] h-3 w-3 animate-ping rounded-full dark:bg-primary-300"></div>
            <div className=" absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </div>
          <Col className=" animate-fade  opacity-0  [animation-delay:1800ms] [animation-duration:400ms]">
            <strong className="dark:text-white">10.2024 - present</strong>
            M.Sc. in Computer Science, University of Bonn
            <ul className="list-circle italic">
              <li>Expected graduation: Autumn 2026</li>
            </ul>
          </Col>
        </Row>
        <Row className="relative ">
          <div className="animate-fade relative  mt-[5px] opacity-0 [animation-delay:1400ms] [animation-duration:400ms]">
            <div className=" absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </div>
          <Col className=" animate-fade opacity-0  [animation-delay:1400ms] [animation-duration:400ms]">
            <strong className="dark:text-white">2020-2024</strong>
            <div> B.Sc. in Computer Science, University of Bonn</div>
            <Col className="list-circle ">
              <a
                className=" text-primary-500  hover:text-primary-300"
                href={
                  'https://www.dice.uni-bonn.de/hpca/documents/abschlussarbeiten/2024_bachelor_jan_niclas_hardtke.pdf'
                }
                target="_blank"
              >
                "Second Order Methods for Neural Network Optimization"
              </a>
              (Grade: 1.3 [1.0-5.0])
            </Col>
          </Col>
        </Row>
        <Row className="relative">
          <div className="animate-fade relative  mt-[5px] opacity-0  [animation-delay:1000ms] [animation-duration:400ms]">
            <div className=" absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </div>
          <Col className=" animate-fade  opacity-0  [animation-delay:1000ms]  [animation-duration:400ms]">
            <strong className="dark:text-white">2018</strong>
            Abitur (German high school diploma)
            <ul className="list-circle ">
              <li>Grade: 1.6 (German grading system, equivalent to approx. 3.4 GPA)</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </TitleCard>
  )
}

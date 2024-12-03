import React from 'react'
import ResumeSection from '../ResumeSections'
import Row from '../Row'
import Col from '../Col'
import Image from 'next/image'

export default function Experience() {
  return (
    <ResumeSection title="Experience doing stuff" className={' col-span-2 row-span-1 h-full'}>
      <Col className=" relative gap-2  dark:text-gray-400">
        <Row className="relative">
          <Col className=" animate-fade  opacity-0  [animation-delay:800ms] [animation-duration:400ms]">
            <Row className="items-start justify-start gap-4">
              <div className="flex w-16  shrink-0  justify-center">
                <img className="p-1" src={'/static/images/bwi.png'} alt="bwi" />
              </div>
              <Col>
                <strong className="dark:text-white">Working Student, BWI</strong>
                Focused on the development of a secure messenger based on the Matrix protocol
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="relative ">
          <Col className=" animate-fade opacity-0  [animation-delay:400ms] [animation-duration:400ms]">
            <Row className="items-start justify-start gap-4">
              <div className="flex w-16  shrink-0  justify-center">
                <div className="flex h-12 w-12  justify-center rounded-md bg-black">
                  <img
                    className="w-5"
                    src={'/static/images/logo_light_single.svg'}
                    alt="craftone"
                  />
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
        </Row>
        <Row className="relative">
          <Col className=" animate-fade  opacity-0  [animation-duration:400ms]">
            <Row className="items-start justify-start gap-4">
              <div className="flex w-16 shrink-0 justify-center">
                <img className="p-3" src={'/static/images/cebicon.jpeg'} alt="craftone" />
              </div>

              <Col>
                <strong className="dark:text-white">Internship, CebiCon GmbH</strong>

                <ul className="list-circle ">
                  <li>Compiler extension development for a custom scripting language</li>
                  <li>Development of driver monitoring tools in C++/CLI</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </ResumeSection>
  )
}

'use client'
import React from 'react'
import TitleCard from '../TitleCard'
import Row from '../Row'
import Col from '../Col'
import { motion } from 'framer-motion'

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
        <motion.div
          className="absolute bottom-0   left-[5.5px] mb-[-5px] h-0 w-px bg-primary-200 "
          initial={{ height: '0%' }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: 'linear', delay: 0.75 }}
        ></motion.div>

        <Row className="relative">
          <motion.div
            className="relative  mt-[5px] opacity-0 "
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: 1.25 }}
          >
            <div className=" absolute left-[-20px] h-3 w-3 animate-ping rounded-full dark:bg-primary-300"></div>
            <div className=" absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: 1.25 }}
          >
            <strong className="dark:text-white">10.2024 - present</strong>
            M.Sc. in Computer Science, University of Bonn
            <ul className="list-circle italic">
              <li>Expected graduation: Autumn 2026</li>
            </ul>
          </motion.div>
        </Row>
        <Row className="relative ">
          <motion.div
            className="relative  mt-[5px] "
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: 1 }}
          >
            <div className=" absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: 1 }}
          >
            <strong className="dark:text-white">2020-2024</strong>
            <div> B.Sc. in Computer Science, University of Bonn</div>
            <Col className="list-circle ">
              "Second Order Methods for Neural Network Optimization" (Grade: 1.3 [1.0-5.0])
            </Col>
          </motion.div>
        </Row>
        <Row className="relative">
          <motion.div
            className="relative  mt-[5px] "
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: 0.75 }}
          >
            <div className=" absolute left-[-20px] h-3 w-3 rounded-full dark:bg-primary-300"></div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, ease: 'easeIn', delay: 0.75 }}
          >
            <strong className="dark:text-white">2018</strong>
            Abitur (German high school diploma)
            <ul className="list-circle ">
              <li>Grade: 1.6 (German grading system, equivalent to approx. 3.4 GPA)</li>
            </ul>
          </motion.div>
        </Row>
      </Col>
    </TitleCard>
  )
}

'use client'

import SectionWrapper from '../ui/SectionWrapper'
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from '../cards/ExperienceCard'
import { FaBuilding, FaGraduationCap, FaReact, FaUnity, FaJava, FaDatabase } from 'react-icons/fa'
import { SiSupabase, SiJavascript, SiPodman } from 'react-icons/si'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 dark:text-white text-left">Experience & Education</h2>
        
        {/* Deloitte Experience */}
        <ExperienceCard
          title="Technology Analyst (Developer)"
          company="Deloitte Consulting Malaysia"
          companyColor="text-lime-500 dark:text-lime-400"
          period="March 2025 - Present (Full Time)"
          icon={FaBuilding}
          iconColor='text-lime-500'
          iconBgColor='bg-lime-100/50 dark:bg-lime-900/30'
          skills={[
            {
              name: 'React.js',
              icon: FaReact,
              bgColor: 'bg-blue-100/50 dark:bg-blue-900/30',
              iconColor: 'text-blue-500'
            },
            {
              name: 'JavaScript',
              icon: SiJavascript,
              bgColor: 'bg-yellow-100/50 dark:bg-yellow-900/30',
              iconColor: 'text-yellow-500'
            },
            {
              name: 'Supabase',
              icon: SiSupabase
            },
            {
              name: 'PostgreSQL',
              icon: FaDatabase,
              bgColor: 'bg-green-100/50 dark:bg-green-900/30',
              iconColor: 'text-green-500'
            },
            {
              name: 'Podman',
              icon: SiPodman
            }
          ]}
        >
          <li>Developed enterprise applications using React and modern web technologies</li>
          <li>Implemented containerized solutions with Podman for deployment</li>
          <li>Collaborated with cross-functional teams to deliver client solutions</li>

          <div className="flex items-start gap-4">
            <div className='max-w-xs max-h-20 bg-white'>
            </div>
          </div>
        </ExperienceCard>

        <ExperienceCard
        title="Technology Intern"
        company="Deloitte Consulting Malaysia"
        companyColor="text-blue-500 dark:text-blue-400"
        iconColor='text-blue-500'
        iconBgColor='bg-blue-100/50 dark:bg-blue-900/30'
        period="September 2024 - January 2025 (3 months)"
        icon={FaBuilding}
        skills={[
          {
            name: 'React.js',
            icon: FaReact,
            bgColor: 'bg-blue-100/50 dark:bg-blue-900/30',
            iconColor: 'text-blue-500'
          },
          {
            name: 'JavaScript',
            icon: SiJavascript,
            bgColor: 'bg-yellow-100/50 dark:bg-yellow-900/30',
            iconColor: 'text-yellow-500'
          },
          {
            name: 'Supabase',
            icon: SiSupabase
          },
          {
            name: 'PostgreSQL',
            icon: FaDatabase,
            bgColor: 'bg-green-100/50 dark:bg-green-900/30',
            iconColor: 'text-green-500'
          },
          {
            name: 'Podman',
            icon: SiPodman
          }
        ]}
        projects={[
          {
            title: "Support Ticketing System",
            imageUrl: "/images/dexter.png",
            altText: "Support ticket dashboard screenshot",
            description: "Full-stack ticketing system with real-time updates",
            tags: ["React", "Supabase", "Docker"],
            links: [
              {
                url: "https://github.com/AnastasiaAzlie/Dexter-Help",
                type: "github"
              }
              // {
              //   url: "https://tickets.yourdomain.com",
              //   type: "external",
              //   label: "Live Demo"
              // }
            ]
          }
        ]}
      >
      <li>Developed a full-stack support ticketing system using React.js and Supabase</li>
      <li>Implemented user authentication, ticket management, and real-time updates</li>
      <li>Explored modern application development through Spring Boot microservices and containerization technologies including Docker and Podman.</li>
      </ExperienceCard>

      <ExperienceCard
        title="Bachelor of Computing Science"
        company="(Hons.) Multimedia Computing"
        companyColor="text-purple-500 dark:text-purple-400"
        iconColor='text-pueple-500'
        iconBgColor='bg-purple-100/50 dark:bg-purple-900/30'
        period="2022 - 2025 (Graduated)"
        icon={FaGraduationCap}
        skills={[
          {
            name: 'Java',
            icon: FaJava,
            bgColor: 'bg-red-100/50 dark:bg-red-900/30',
            iconColor: 'text-red-500'
          },
          {
            name: 'JavaScript',
            icon: SiJavascript,
            bgColor: 'bg-yellow-100/50 dark:bg-yellow-900/30',
            iconColor: 'text-yellow-500'
          },
          {
            name: 'Unity',
            icon: FaUnity
          }
        ]}
        projects={[
          {
            title: "Parking Enforcement System",
            imageUrl: "/images/dexter.png",
            altText: "Support ticket dashboard screenshot",
            description: "Java Enteprtise application for parking enforcement",
            tags: ["Java", "JDBC", "Jquery"],
            links: [
              {
                url: "https://github.com/AnastasiaAzlie/Dexter-Help",
                type: "github"
              }
              // {
              //   url: "https://tickets.yourdomain.com",
              //   type: "external",
              //   label: "Live Demo"
              // }
            ]
          },
          {
            title: "Clinic Appoinment System",
            imageUrl: "/images/dexter.png",
            altText: "Support ticket dashboard screenshot",
            description: "Java Enteprtise application clinic appointment",
            tags: ["Java", "JDBC", "Jquery"],
            links: [
              {
                url: "https://github.com/AnastasiaAzlie/Dexter-Help",
                type: "github"
              }
            ]
          },
          {
            title: "Customer Service Chatbot",
            imageUrl: "/images/dexter.png",
            altText: "Support ticket dashboard screenshot",
            description: "AI-powered chatbot for customer service",
            tags: ["Python", "Flask", "OpenAi"],
            links: [
              {
                url: "https://github.com/AnastasiaAzlie/Dexter-Help",
                type: "github"
              }
            ]
          },
          {
            title: "Local Fruits Recognition with CNN",
            imageUrl: "/images/dexter.png",
            altText: "",
            description: "Image classification using Convolutional Neural Networks",
            tags: ["Python", "Tensorflow", "Keras"],
            links: [
              {
                url: "https://github.com/AnastasiaAzlie/Dexter-Help",
                type: "github"
              }
            ]
          }
        ]}
      >
      <li>Specialized in web development, UI/UX design, and multimedia systems</li>
      <li>Relevant coursework: Web Development, Artificial Intelligence, Human-Computer Interaction</li>
      <li>Final year project: Developed an enforcement system utilizing J2EE architecture and MVC</li>
      </ExperienceCard>
      </motion.div>
    </SectionWrapper>
  )
}
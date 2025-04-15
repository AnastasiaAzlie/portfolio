'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { navLinks } from '../constants/navLinks'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('Home')

  const [homeRef, homeInView] = useInView({ threshold: 0.5 })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (homeInView) setActiveSection('Home')
    else if (aboutInView) setActiveSection('About')
    else if (skillsInView) setActiveSection('Skills')
    else if (projectsInView) setActiveSection('Projects')
    else if (contactInView) setActiveSection('Contact')
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView])

  return {
    activeSection,
    setActiveSection,
    refs: {
      homeRef,
      aboutRef,
      skillsRef,
      projectsRef,
      contactRef,
    },
  }
}
// components/ExperienceCard.tsx
'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaBuilding, FaDatabase, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiSupabase, SiPodman, SiSpringboot } from 'react-icons/si';
import Image from 'next/image';

type ProjectLink = {
  url: string;
  type: 'github' | 'external';
  label?: string;
};

type Project = {
  imageUrl: string;
  title: string;
  altText: string;
  description?: string;
  links?: ProjectLink[];
  tags?: string[];
};

type SkillBadge = {
  name: string;
  icon: IconType;
  bgColor?: string;
  iconColor?: string;
};

type ExperienceCardProps = {
  title: string;
  company: string;
  companyColor: string;
  period: string;
  icon: IconType;
  iconBgColor?: string;
  iconColor?: string;
  skills: SkillBadge[];
  projects?: Project[];
  children?: React.ReactNode;
  variant?: 'work' | 'education';
};

export default function ExperienceCard({
  title,
  company,
  companyColor,
  period,
  icon: Icon,
  iconBgColor,
  iconColor,
  skills,
  projects,
  children,
}: ExperienceCardProps) {

  return (
    <motion.div 
      className="mb-12 p-6 bg-white/10 dark:bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 ${iconBgColor} rounded-lg`}>
          <Icon className={`${iconColor} text-xl`} />
        </div>
        <div className="flex-1 mr-14">
          <h3 className="text-xl font-bold dark:text-white">{title}</h3>
          <p className={`${companyColor} font-medium`}>{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{period}</p>
          
          {children && (
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              {children}
            </ul>
          )}
          
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className={`flex items-center gap-1 px-3 py-1 ${skill.bgColor || 'bg-gray-100/50 dark:bg-gray-700/50'} rounded-full text-sm`}
              >
                <skill.icon className={skill.iconColor || 'text-gray-500 dark:text-gray-300'} /> 
                {skill.name}
              </span>
            ))}
          </div>

          {/* Project Showcase Section */}
          {projects && projects.length > 0 && (
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3 dark:text-white/80">Project Highlights:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-zinc-700"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="relative h-40 w-full ">
                      <Image
                        src={project.imageUrl}
                        alt={project.altText}
                        fill
                        className="object-cover blur-[1px]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-blach/70 to-transparent flex flex-col justify-end p-4">
                      <h5 className="text-white font-medium">{project.title}</h5>
                      {project.description && (
                        <p className="text-white/80 text-sm mt-1 line-clamp-2">
                          {project.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags?.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-black/30 text-white text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3 mt-3">
                        {project.links?.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors"
                          >
                            {link.type === 'github' ? (
                              <FaGithub className="text-base" />
                            ) : (
                              <FaExternalLinkAlt className="text-sm" />
                            )}
                            {link.label || (link.type === 'github' ? 'GitHub' : 'Live Demo')}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
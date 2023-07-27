import { useState } from 'react'

import type { NextComponentType, NextPageContext } from 'next'
import {
  Grid,
  GridItem,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { FaHtml5, FaJs, FaPython, FaRust } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

import ProjectCard from './ProjectCard'
import SectionWrapper from '../SectionWrapper'

import { project_lists } from '../../utils'

interface ProjectContainerProps {}

const ProjectContainer: NextComponentType<
  NextPageContext,
  {},
  ProjectContainerProps
> = () => {
  const tabs = [
    {
      label: 'HTML/CSS',
      category: 'htm',
      icon: <FaHtml5 />,
    },
    {
      label: 'JS',
      category: 'js',
      icon: <FaJs />,
    },
    {
      label: 'TS',
      category: 'ts',
      icon: <SiTypescript />,
    },
    {
      label: 'Python',
      category: 'py',
      icon: <FaPython />,
    },
    {
      label: 'Rust',
      category: 'rs',
      icon: <FaRust />,
    },
  ]

  return (
    <SectionWrapper
      id="projects"
      title="My Projects"
      desc="Get more details by hovering over the image."
    >
      <Tabs variant={'enclosed'}>
        <TabList>
          {tabs.map(({ label, icon }, idx) => (
            <Tab key={label + idx}>
              <Stack spacing={2} direction="row" align="center">
                {icon} <span>{label}</span>
              </Stack>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map(({ label, category }, idx) => (
            <TabPanel key={label + idx}>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(1, 1fr)',
                  lg: 'repeat(2, 1fr)',
                }}
                gap={5}
                w={'full'}
              >
                {project_lists.map(
                  (project) =>
                    project.category.includes(category) && (
                      <GridItem key={`${project.title}`}>
                        <ProjectCard config={project} />
                      </GridItem>
                    )
                )}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </SectionWrapper>
  )
}

export default ProjectContainer

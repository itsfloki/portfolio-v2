import type { NextComponentType, NextPageContext } from 'next'
import { Grid, GridItem } from '@chakra-ui/react'

import ProjectCard from './ProjectCard'
import SectionWrapper from '../SectionWrapper'

import { project_lists } from '../../utils'

interface ProjectContainerProps {}

const ProjectContainer: NextComponentType<
  NextPageContext,
  {},
  ProjectContainerProps
> = () => {
  return (
    <SectionWrapper
      title="Projects"
      desc="Get to know about my work before you dive into my details 🚀"
    >
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={20}
      >
        {project_lists.map((project) => (
          <GridItem w="100%" key={`${project.title}`}>
            <ProjectCard config={project} />
          </GridItem>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

export default ProjectContainer

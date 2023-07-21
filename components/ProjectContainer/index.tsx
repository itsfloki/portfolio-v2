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
      id="projects"
      title="My Projects"
      desc="Get more details by hovering over the image."
    >
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={5}
        w={'full'}
      >
        {project_lists.map((project) => (
          <GridItem key={`${project.title}`}>
            <ProjectCard config={project} />
          </GridItem>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

export default ProjectContainer

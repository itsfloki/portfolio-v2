import type { NextComponentType, NextPageContext } from 'next'
import { Container, Grid, GridItem, Flex, Box, Text } from '@chakra-ui/react'

import ProjectCard from './ProjectCard'

import { project_lists } from '../../utils'

interface ProjectContainerProps {}

const ProjectContainer: NextComponentType<
  NextPageContext,
  {},
  ProjectContainerProps
> = () => {
  return (
    <Container
      maxW={'7xl'}
      borderRadius={'0.375rem'}
      bg={'transparent'}
      backdropFilter="blur(10px)"
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
    </Container>
  )
}

export default ProjectContainer

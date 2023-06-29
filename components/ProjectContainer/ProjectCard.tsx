import type { NextComponentType, NextPageContext } from 'next'
import {
  Box,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

interface ProjectCardProps {
  config: {
    title: string
    description: string
    github_link: string
    live_link: string
    image: string
    tags: Array<string>
  }
}

const ProjectCard: NextComponentType<NextPageContext, {}, ProjectCardProps> = ({
  config,
}) => {
  const { title, description, github_link, live_link, image, tags } = config

  return (
    <>
      <Image objectFit="cover" w="full" h="full" src={image} alt={title} />
    </>
  )
}

export default ProjectCard

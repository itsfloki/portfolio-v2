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
  useColorModeValue,
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
      <Image
        objectFit="cover"
        w="full"
        h="400px"
        src={image}
        alt={title}
        borderRadius="md"
        border="3px solid"
        borderColor={useColorModeValue('gray.100', 'gray.900')}
      />
    </>
  )
}

export default ProjectCard

import type { NextComponentType, NextPageContext } from 'next'
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
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
    <Center>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: 'column', md: 'row' }}
        bg={'white'}
        boxShadow={'2xl'}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" src={image} alt={title} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading
            px={3}
            fontSize={'2xl'}
            fontFamily={'body'}
            textAlign={'start'}
            w="100%"
          >
            {title}
          </Heading>
          <Text
            textAlign={'start'}
            color={'gray.700'}
            px={3}
          >
            {description}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {tags.map((tag, idx) => (
              <Badge
                key={`${title}-${tag}-${idx}`}
                px={2}
                py={1}
                bg={'gray.50'}
                fontWeight={'400'}
              >
                {tag}
              </Badge>
            ))}
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Button
              as={'a'}
              target="_blank"
              href={github_link}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
            >
              Github
            </Button>
            <Button
              as={'a'}
              target="_blank"
              href={live_link}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'#103691'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: '#1a45aa',
              }}
              _focus={{
                bg: '#1a45aa',
              }}
            >
              Live
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default ProjectCard

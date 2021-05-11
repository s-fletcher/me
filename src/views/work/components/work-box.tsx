import { Image } from '@chakra-ui/image';
import NextLink from 'next/link';
import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout';
import { FC } from 'react';
import { Button } from '@chakra-ui/button';

type WorkBoxProps = {
  title: string;
  href: string;
  image: string;
  bg: string;
  stack: string[];
};

export const WorkBox: FC<WorkBoxProps> = ({
  title,
  href,
  image,
  bg,
  stack,
}) => (
  <Box boxShadow="card" borderRadius="lg" mt={40} bg="white" py={[8, 6]} px={6}>
    <VStack spacing={8}>
      <Box
        h={48}
        w="100%"
        minW="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pos="relative"
        borderRadius="lg"
        bg={bg}
      >
        <Image p={4} maxH="100%" src={`/images/work/${image}`} />
      </Box>
      <Stack
        direction={['column', 'row']}
        w="100%"
        justifyContent="space-between"
        alignItems="left"
      >
        <VStack alignItems="left" spacing={3}>
          <Heading size="md">{title}</Heading>
          <Wrap spacing={3} fontFamily="mono" fontSize="sm" w="100%">
            {stack.map((val) => (
              <WrapItem marginY="0 !important" pb={1} key={`${title}${val}`}>
                <HStack>
                  <Box bg="blue.400" h={2} w={2} borderRadius="full" />
                  <Text>{val}</Text>
                </HStack>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
        <Box alignSelf={['flex-start', 'flex-end']}>
          <Button variant="unstyled" h="fit-content">
            <NextLink href={href}>
              <Heading textDecoration="underline" size="sm">
                Learn more
              </Heading>
            </NextLink>
          </Button>
        </Box>
      </Stack>
    </VStack>
  </Box>
);

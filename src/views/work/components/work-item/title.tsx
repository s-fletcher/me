import { Heading, Text, VStack } from '@chakra-ui/layout';
import { FC } from 'react';

type WorkItemTitleProps = {
  dates: string;
};

export const WorkItemTitle: FC<WorkItemTitleProps> = ({ children, dates }) => (
  <VStack alignItems="center">
    <Heading>{children}</Heading>
    <Text>{dates}</Text>
  </VStack>
);

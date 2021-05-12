import { Box, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/layout';
import {
  WorkItemImage,
  WorkItemImageStack,
} from '../components/work-item/images';
import { WorkItemTitle } from '../components/work-item/title';

export const Hacklahoma = () => (
  <Box my={32}>
    <WorkItemTitle dates="2019-2021">Hacklahoma</WorkItemTitle>
    <VStack spacing={8} mt={12}>
      <Text minW="100%">
        Hacklahoma is my baby. It started as an impulse decision during my
        freshman year of college that turned into my driving source of growth
        for both myself and the organization. This is an organization where I
        thrived.
      </Text>
      <WorkItemImage file="group.jpg" />
      <Text minW="100%">
        The first problem I tackled was the identity of Hacklahoma. We had many
        people ask what Hacklahoma was. We lacked a way to answer that without
        reaching out to them directly. To solve this, I created a website to
        answer this question. Internally we referred to it as the Hacklahoma
        Hub.
      </Text>
      <WorkItemImageStack
        href="https://hacklahoma.org"
        files={['hub.png', 'hub-team.png']}
      />
      <Text minW="100%">
        Apart from my continuous innovation at Hacklahoma, I also designed and
        built the event websites for both the 2020 and 2021 years.
      </Text>
      <WorkItemImageStack
        href={['https://2020.hacklahoma.org', 'https://2021.hacklahoma.org']}
        files={['2020.png', '2021.png']}
      />
      <Text minW="100%">
        In the past, we’ve had challenges when it came to getting hackers
        registered and checked in. During my years with Hacklahoma, I innovated
        this process and prevented bottlenecks which allow hackers to get
        hacking, faster.
      </Text>
      <Text minW="100%">
        This involved introducing an automated way of distributing QR codes to
        hackers which were used to check them in at the event.
      </Text>
      <Text minW="100%">
        Along with registration came collecting data and using it to benefit our
        marketing. The team and I took the time to make sure this process was
        easy and accessible for both ourselves and sponsors who wanted to view
        our demographics. We built a dashboard to allow sponsors to login with a
        unique password to view this data and for the team to import it.
      </Text>
      <WorkItemImage href="https://stats.hacklahoma.org" file="stats.png" />
      <Text minW="100%">
        Finally, I noticed we were having trouble recruiting new organizers. To
        solve this, I created an easily digestible website to give new recruits
        a good idea of what they’re applying for.
      </Text>
      <WorkItemImageStack
        href="https://join.hacklahoma.org"
        files={['join.png', 'join-listing.png']}
      />
      <Text minW="100%">
        Hopefully you can get a good idea of what I worked on during my two
        years with Hacklahoma. Of course there was plenty more that was done
        such as:
        <UnorderedList pl={8} minW="100%">
          <ListItem>Creating a stable documentation system</ListItem>
          <ListItem>Transferring domains to Cloudflare </ListItem>
          <ListItem>Leading a team of web developers</ListItem>
          <ListItem>Producing a livestream</ListItem>
          <ListItem>Developing discord bots for the virtual event</ListItem>
        </UnorderedList>
      </Text>
      <Text minW="100%">
        Nonetheless, please reach out if you have any questions about my
        contributions.
      </Text>
    </VStack>
  </Box>
);

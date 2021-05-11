import { Title } from '../../components/title';
import { BlogBox } from './components/blog-box';

export const Blog = () => (
  <>
    <Title lineOne="Welcome to my" lineTwo="Digital Garden" />
    <BlogBox
      title="Creating a React App for Beginners"
      href="https://github.com/Hacklahoma/guides/blob/react/README.md"
      image="react-cover.png"
      bg="linear-gradient(#62F9FF7F, #1697FF7F)"
    >
      This is a guide to creating your first app with React! In this walkthrough
      will have you building an application in React from scratch and learning
      some cool tools that come with it.
    </BlogBox>
  </>
);

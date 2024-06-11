import { Box, Container, VStack, Text, Heading, HStack, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Header = () => (
  <Box as="header" bg="brand.700" color="white" py={4}>
    <Container maxW="container.lg">
      <Heading as="h1" size="lg">Financial Times</Heading>
    </Container>
  </Box>
);

const ArticleSection = () => (
  <Box as="section" py={6}>
    <Container maxW="container.lg">
      <VStack spacing={4} align="start">
        <Heading as="h2" size="md">Latest Articles</Heading>
        <Box>
          <Heading as="h3" size="sm">Article Title 1</Heading>
          <Text>Summary of the article content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="sm">Article Title 2</Heading>
          <Text>Summary of the article content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="sm">Article Title 3</Heading>
          <Text>Summary of the article content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
      </VStack>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="brand.800" color="white" py={4}>
    <Container maxW="container.lg">
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Link href="#" isExternal>
            <FaTwitter />
          </Link>
          <Link href="#" isExternal>
            <FaFacebook />
          </Link>
          <Link href="#" isExternal>
            <FaLinkedin />
          </Link>
        </HStack>
        <Divider />
        <Text>&copy; {new Date().getFullYear()} Financial Times. All rights reserved.</Text>
      </VStack>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <>
      <Header />
      <ArticleSection />
      <Footer />
    </>
  );
};

export default Index;
import React from "react";
import { Container, VStack, HStack, Text, Box, IconButton, Heading, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { FaLightbulb, FaTasks, FaChartLine, FaUsers, FaComments, FaFileAlt } from "react-icons/fa";
import { features } from "../data.js";

const FeatureCard = ({ icon, title, description, image }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} textAlign="center">
    <Image src={image} alt={title} mb={4} />
    <HStack justifyContent="center" mb={4}>
      <IconButton aria-label={title} icon={React.createElement(icon)} size="lg" isRound />
    </HStack>
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Fonctionnalités de Idhall
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </SimpleGrid>
        <Button colorScheme="teal" size="lg">
          En savoir plus
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

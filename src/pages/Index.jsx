import React from "react";
import { Container, VStack, HStack, Text, Box, IconButton, Heading, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { FaLightbulb, FaTasks, FaChartLine, FaUsers, FaComments, FaFileAlt } from "react-icons/fa";

const features = [
  {
    icon: FaLightbulb,
    title: "Gestion des idées",
    description: "Collectez, organisez et évaluez les idées de vos collaborateurs.",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpZGVhJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3MTc4NzY3MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    icon: FaTasks,
    title: "Gestion de projet",
    description: "Planifiez, suivez et gérez vos projets de manière collaborative.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3MTc4NzY3MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    icon: FaChartLine,
    title: "Suivi de la performance",
    description: "Mesurez et analysez la performance de vos projets et idées.",
    image: "https://images.unsplash.com/photo-1526676537331-7747bf8278fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMHRyYWNraW5nfGVufDB8fHx8MTcxNzg3NjcxMnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "Facilitez la collaboration entre vos équipes.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTc4NzY3MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    icon: FaComments,
    title: "Feedback",
    description: "Collectez et gérez les feedbacks de vos collaborateurs.",
    image: "https://images.unsplash.com/photo-1589568365171-77cdf21d2ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWVkYmFjayUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzE3ODc2NzEzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    icon: FaFileAlt,
    title: "Documentation",
    description: "Centralisez et partagez la documentation de vos projets.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGF0aW9uJTIwbWFuYWdlbWVudHxlbnwwfHx8fDE3MTc4NzY3MTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

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

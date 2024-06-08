import React from "react";
import { Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

function StrategicAxes() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Strategic Axis Created:", { name, description });
    setName("");
    setDescription("");
  };

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Strategic Axes Management
      </Heading>
      <Text mb={4}>Here you can create and manage the strategic axes for your business units.</Text>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg">
              Create Strategic Axis
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default StrategicAxes;

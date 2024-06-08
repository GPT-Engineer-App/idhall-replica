import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/strategic-axes" colorScheme="teal" variant="ghost">
          Strategic Axes
        </Button>
      </Flex>
    </Box>
  );
}

export default NavBar;

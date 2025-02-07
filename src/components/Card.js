import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      spacing={4}
      p={4}
      maxW="sm"
      align="flex-start" 
      textAlign="left"
      minH="350px"
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="200px"
      />
      <Box flex="1" w="100%">
        <Heading color="gray.600" as="h3" size="md" mt={4}>
          {title}
        </Heading>
        <Text color="gray.600" mt={2}>
          {description}
        </Text>
      </Box>
      <Box mt="auto" width="100%">
        <HStack>
          <Text fontWeight="bold" color="blue.500">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#4299E1" />
        </HStack>
      </Box>

    </VStack>
  );
};

export default Card;
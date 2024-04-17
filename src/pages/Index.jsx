import { Box, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button, VStack, Text } from "@chakra-ui/react";
import { FaBars, FaTools, FaTimes, FaPlus } from "react-icons/fa";

const Index = () => {
  const { isOpen: isSidebarOpen, onOpen: onSidebarOpen, onClose: onSidebarClose } = useDisclosure();
  const { isOpen: isToolbarOpen, onToggle: onToolbarToggle } = useDisclosure();

  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="space-between" alignItems="center">
        <IconButton icon={<FaBars />} onClick={onSidebarOpen} variant="outline" aria-label="Open Menu" />
        <Text fontSize="lg" fontWeight="bold">
          My App
        </Text>
        <IconButton icon={<FaTools />} onClick={onToolbarToggle} variant="outline" aria-label="Toggle Toolbar" />
      </Flex>

      {/* Sidebar */}
      <Drawer isOpen={isSidebarOpen} placement="left" onClose={onSidebarClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4">
              <Button w="full">Home</Button>
              <Button w="full">Profile</Button>
              <Button w="full">Settings</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Box as="main" p="4">
        <Text fontSize="xl">Welcome to the main content area!</Text>
      </Box>

      {/* Bottom Toolbar */}
      {isToolbarOpen && (
        <Flex as="footer" position="sticky" bottom="0" bg="gray.700" color="white" p="2" justifyContent="space-around" alignItems="center">
          <Button leftIcon={<FaPlus />} colorScheme="pink">
            Add New
          </Button>
          <Button leftIcon={<FaTimes />} colorScheme="red" onClick={onToolbarToggle}>
            Close Toolbar
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Index;

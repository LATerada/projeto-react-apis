import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
} from "@chakra-ui/react";

const DeletAlert = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        w="28.188rem"
        h="13.875rem"
        pt="3.813rem"
        display="flex"
        alignItems="center"
        borderRadius="0.75rem"
        textAlign="center"
      >
        <Text textStyle={"modalTitle"} color="black">
          Oh, no!
        </Text>
        <ModalBody>
          <Text textStyle={"modalText"} color="black">
            O Pokémon foi removido da sua Pokebola
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DeletAlert;

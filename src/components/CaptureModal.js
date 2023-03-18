import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
} from "@chakra-ui/react";

const CaptureAlert = ({ isOpen, onClose }) => {
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
          Gotcha!
        </Text>
        <ModalBody>
          <Text textStyle={"modalText"} color="black">
            O Pokémon foi adicionado a sua Pokebola
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CaptureAlert;
// w={{
//   base: "21.141rem",
//   md: "21.141rem",
//   lg: "23.396rem",
//   xl: "28.188rem",
//   "2xl": "28.188rem",
// }}
// h={{
//   base: "10.406rem",
//   md: "10.406rem",
//   lg: "11.516rem",
//   xl: "11.516rem",
//   "2xl": "13.875rem",
// }}

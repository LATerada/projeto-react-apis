import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Text,
  } from '@chakra-ui/react'

const CaptureAlert = ({ isOpen, onOpen, onClose }) => {
    return(
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent w='28.188rem' h='13.875rem' pt='3.813rem' display='flex' alignItems='center' border-borderRadius='0.75rem'>
                <Text textStyle={'caption'} color='black'>Gotcha!</Text>
                <ModalBody>
                  <Text textStyle={'modalText'} color='black'>O Pokémon foi adicionado a sua Pokebola</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
    )
}

export default CaptureAlert
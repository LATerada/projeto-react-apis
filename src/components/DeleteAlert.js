import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
    Text,
  } from '@chakra-ui/react'

const DeletAlert = ({onOpen, isOpen, onClose} ) => {

    return(
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent w='28.188rem' h='13.875rem' pt='3.813rem' display='flex' alignItems='center' border-borderRadius='0.75rem'>
                <Text textStyle={'caption'} color='black'>Oh, no!</Text>
                <ModalBody>
                  <Text textStyle={'modalText'} color='black'>O Pokémon foi removido da sua Pokebola</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
        </>
       
    )
}
export default DeletAlert
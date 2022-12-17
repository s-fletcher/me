import {
  Button,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Title } from '../../components/title';

type ImageItem = { name: string; rotate?: boolean };

const images: ImageItem[] = [
  { name: 'DSCF0009-compressed.JPG' },
  { name: 'DSCF0054-compressed.JPG', rotate: true },
  { name: 'DSCF0059-compressed.JPG', rotate: true },
  { name: 'DSCF0060-compressed.JPG' },
  { name: 'DSCF0063-compressed.JPG' },
  { name: 'DSCF0083-compressed.JPG' },
  { name: 'DSCF0095-compressed.JPG', rotate: true },
  { name: 'DSCF0097-compressed.JPG', rotate: true },
  { name: 'DSCF0105-compressed.JPG' },
  { name: 'DSCF0109-compressed.JPG' },
  { name: 'DSCF0113-compressed.JPG' },
  { name: 'DSCF0122-compressed.JPG' },
  { name: 'DSCF0134-compressed.JPG' },
  { name: 'DSCF0138-compressed.JPG', rotate: true },
  { name: 'DSCF0150-compressed.JPG' },
  { name: 'DSCF0154-compressed.JPG' },
  { name: 'DSCF0156-compressed.JPG' },
  { name: 'DSCF0173-compressed.JPG' },
  { name: 'DSCF0178-compressed.JPG' },
  { name: 'DSCF0188-compressed.JPG' },
  { name: 'DSCF0201-compressed.JPG' },
  { name: 'DSCF0218-compressed.JPG' },
];

export const Photos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<ImageItem>();

  return (
    <>
      <Title lineOne="Welcome to my" lineTwo="Creative Detox" />
      <SimpleGrid mt={40} columns={2} spacing={2}>
        {images.map((image) => (
          <Button
            variant="unstyled"
            height="fit-content"
            width="fit-content"
            key={image.name}
            onClick={() => {
              setSelectedImage(image);
              onOpen();
            }}
          >
            <Image
              transform={
                image.rotate ? 'rotate(270deg) scale(calc(2/3))' : undefined
              }
              src={`https://cdn.samfletcher.me/photos/${image.name}`}
            />
          </Button>
        ))}
      </SimpleGrid>
      <Modal size="6xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Image
            transform={
              selectedImage?.rotate
                ? 'rotate(270deg) scale(calc(2/3))'
                : undefined
            }
            key={selectedImage?.name}
            src={`https://cdn.samfletcher.me/photos/${selectedImage?.name}`}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

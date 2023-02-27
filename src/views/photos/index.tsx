import {
  Button,
  HStack,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Title } from '../../components/title';

type ImageItem = { name: string; portrait?: boolean };

const images: ImageItem[] = [
  { name: 'DSCF0009.JPG' },
  { name: 'DSCF0054.JPG', portrait: true },
  { name: 'DSCF0059.JPG', portrait: true },
  { name: 'DSCF0060.JPG' },
  { name: 'DSCF0063.JPG' },
  { name: 'DSCF0083.JPG' },
  { name: 'DSCF0095.JPG', portrait: true },
  { name: 'DSCF0097.JPG', portrait: true },
  { name: 'DSCF0105.JPG' },
  { name: 'DSCF0109.JPG' },
  { name: 'DSCF0113.JPG' },
  { name: 'DSCF0122.JPG' },
  { name: 'DSCF0134.JPG' },
  { name: 'DSCF0138.JPG', portrait: true },
  { name: 'DSCF0150.JPG' },
  { name: 'DSCF0154.JPG' },
  { name: 'DSCF0156.JPG' },
  { name: 'DSCF0173.JPG' },
  { name: 'DSCF0178.JPG' },
  { name: 'DSCF0188.JPG' },
  { name: 'DSCF0201.JPG' },
  { name: 'DSCF0218.JPG' },
  { name: 'DSCF0245.JPG' },
  { name: 'DSCF0312.JPG' },
  { name: 'DSCF0330.JPG' },
  { name: 'DSCF0356.JPG' },
  { name: 'DSCF0358.JPG', portrait: true },
  { name: 'DSCF0406.JPG' },
  { name: 'DSCF0416.JPG', portrait: true },
  { name: 'DSCF0428.JPG', portrait: true },
  { name: 'DSCF0483.JPG' },
  { name: 'DSCF0547.JPG' },
  { name: 'DSCF0552.JPG', portrait: true },
  { name: 'DSCF0555.JPG' },
  { name: 'DSCF0564.JPG' },
  { name: 'DSCF0565.JPG' },
  { name: 'DSCF0575.JPG' },
  { name: 'DSCF0579.JPG', portrait: true },
  { name: 'DSCF0586.JPG' },
  { name: 'DSCF0587.JPG' },
  { name: 'DSCF0590.JPG' },
  { name: 'DSCF0597.JPG' },
  { name: 'DSCF0615.JPG' },
  { name: 'DSCF0664.JPG', portrait: true },
  { name: 'DSCF0719.JPG' },
  { name: 'DSCF0742.JPG' },
  { name: 'DSCF0799.JPG' },
  { name: 'DSCF0806.JPG' },
  { name: 'DSCF0841.JPG' },
  { name: 'DSCF0848.JPG' },
  { name: 'DSCF0855.JPG' },
  { name: 'DSCF0860.JPG' },
  { name: 'DSCF0866.JPG' },
];

export const Photos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<ImageItem>();
  const columnCount = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
  });

  const columns = useMemo(() => {
    let col = 0;
    const chunks: ImageItem[][] = [
      ...new Array(columnCount ?? 3),
    ].map(() => []);
    while (col < (columnCount ?? 3)) {
      for (let i = 0; i < images.length; i += columnCount ?? 3) {
        const image = images[i + col];
        if (image !== undefined) {
          chunks[col].push(image);
        }
      }
      col++;
    }

    return chunks;
  }, [images, columnCount]);

  if (!columnCount) {
    return <></>;
  }

  return (
    <>
      <Title lineOne="I took some" lineTwo="Photos" />
      <HStack mt={40} h="full" align="flex-start" w="full" spacing={4}>
        {columns.map((column, i) => (
          <VStack
            align="left"
            h="full"
            w={`calc(100% / ${columns.length})`}
            key={`column-${i}-${column.length}`}
            spacing={4}
          >
            {column.map((image) => (
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
                  src={`https://cdn.samfletcher.me/photos/${image.name}`}
                />
                {/* <>{image.name}</> */}
              </Button>
            ))}
          </VStack>
        ))}
      </HStack>
      <Modal
        allowPinchZoom
        size="7xl"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent onClick={onClose} w="fit-content" p={0} m={0}>
          <Image
            maxH="100vh"
            w="fit-content"
            key={selectedImage?.name}
            src={`https://cdn.samfletcher.me/photos/${selectedImage?.name}`}
          />
        </ModalContent>
      </Modal>
    </>
  );
};

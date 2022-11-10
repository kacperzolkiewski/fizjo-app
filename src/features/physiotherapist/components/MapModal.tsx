import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { isNil } from "lodash";
import { Map, Marker } from "pigeon-maps";
import React, { useEffect, useState } from "react";
import { formatAdress } from "@/features/physiotherapist/utilities/formatAdress";

export const MapModal = ({
  adress,
  isOpen,
  onClose,
}: {
  adress?: string | null;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  const provider = new OpenStreetMapProvider();
  const [location, setLocation] = useState<[number, number]>([50.07, 19.9]);
  const [userLocation, setUserLocation] = useState<null | [number, number]>(
    null
  );

  useEffect(() => {
    const searchLocation = async () => {
      const locationAdress =
        isNil(adress) || adress === "" ? "Kraków" : formatAdress(adress);
      const result = await provider.search({
        query: locationAdress,
      });
      setLocation([result[0].y, result[0].x]);
    };
    void searchLocation();
  }, [adress]);

  const updateUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent
        h="90vh"
        alignSelf="center"
        alignItems="center"
        m={0}
        overflow="hidden"
      >
        <ModalBody p={0}>
          <Button
            position="absolute"
            colorScheme="purple"
            left={2}
            top={2}
            zIndex={10}
            onClick={updateUserLocation}
          >
            Twoja lokalizacja
          </Button>
          <Button
            position="absolute"
            color="white"
            bg="black"
            left={180}
            _hover={{}}
            top={2}
            zIndex={10}
          >
            Fizjoterapeuta
          </Button>
          <Map width={1400} defaultCenter={location} defaultZoom={11}>
            <Marker color="black" width={50} anchor={location} />
            {userLocation != null && (
              <Marker color="#805AD5" width={50} anchor={userLocation} />
            )}
          </Map>
          <ModalCloseButton />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

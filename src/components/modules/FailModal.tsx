import { Heading, Image, Modal, Text } from "native-base";

import FailImage from "../../../assets/fail-image.png";
import { ILevelDescription } from "../../screens/RootStackParams";

export const FailModal = ({
  header,
  text,
  modalVisible,
  setModalVisible,
}: {
  header: string;
  text: string;
  modalVisible: boolean;
  setModalVisible: (params: Partial<ILevelDescription>) => void;
}) => {
  return (
    <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible({ modalVisible: false })}
      avoidKeyboard
      bottom="4"
      size="lg">
      <Modal.Content rounded="2xl">
        <Modal.CloseButton />
        <Modal.Header>
          <Heading style={{ fontFamily: "Montserrat_600SemiBold" }} size="md">
            {header}
          </Heading>
        </Modal.Header>
        <Modal.Body alignItems="center">
          <Image source={FailImage} alignSelf="center" alt="puzzle" />
          <Text style={{ fontFamily: "Montserrat_500Medium" }} fontSize="16px" textAlign="center">
            {text}
          </Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

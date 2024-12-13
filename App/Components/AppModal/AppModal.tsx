import Modal from 'react-native-modal';
import styles from './AppModal.style';
import {AppModalProps} from './AppModal.d';

const AppModal = ({isVisible, children}: AppModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropTransitionInTiming={650}
      backdropTransitionOutTiming={0}
      statusBarTranslucent
      style={styles.modalStyle}>
      {children}
    </Modal>
  );
};

export default AppModal;

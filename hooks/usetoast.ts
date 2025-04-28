import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';

const useToast = () => {
  const showSuccess = (message: string) => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
      
    });
  };

  const showError = (message: string) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
    });
  };

  const showWarning = (message: string) => {
    Toast.show({
      type: 'info',
      text1: 'Warning',
      text2: message,
    });
  };

  return { showSuccess, showError, showWarning };
};

export default useToast;

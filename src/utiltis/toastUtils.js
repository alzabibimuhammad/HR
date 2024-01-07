// toastUtils.js
import toast from 'react-hot-toast';

export const showErrorToast = (errorMessage) => {
  toast.error(`${errorMessage}  `, {
    position: "top-left",
    style: {
      backgroundColor: "#e20d29",
      width: "500px",
    },
  });
};

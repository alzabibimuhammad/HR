// toastUtils.js
import toast from 'react-hot-toast';

export const showErrorToast = (message,ErrorMessageApi) => {
  toast.error(`${message}    ${ErrorMessageApi}  `, {
    position: "top-left",
    style: {
      backgroundColor: "#DF2E38",
      width: "500px",
      fontWeight:"600",
      fontSize:"16px"
    },
  });
};

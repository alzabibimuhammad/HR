// toastUtils.js
import toast from 'react-hot-toast';

export const showSuccesToast = (errorMessage) => {
    toast.success(`${errorMessage} `, {
        position: "top-left",
        style: {
          backgroundColor: "green",
          width: "500px",
        }})
};

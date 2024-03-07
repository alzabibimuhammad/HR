// toastUtils.js
import toast from 'react-hot-toast';

export const showSuccesToast = (message,SuccessMessageApi) => {
    toast.success(`${message?message:""}    ${SuccessMessageApi?SuccessMessageApi:""} `, {
        position: "down",
        style: {
          backgroundColor: "#91C483",
          width: "100vh",
          color:"#fff",
          fontSize:"16px",
          fontWeight:"600",

        }})
};


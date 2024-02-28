// toastUtils.js
import toast from 'react-hot-toast';

export const showSuccesToast = (message,SuccessMessageApi) => {
    toast.success(`${message?message:""}    ${SuccessMessageApi?SuccessMessageApi:""} `, {
        position: "top-left",
        style: {
          backgroundColor: "#91C483",
          width: "500px",
          color:"#fff",
          fontSize:"16px",
          fontWeight:"600",

        }})
};


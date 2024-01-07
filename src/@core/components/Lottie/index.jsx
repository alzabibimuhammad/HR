import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../../public/logoo.json";
import { Box } from "@mui/system";
  function Lottel(){

    return(
      <Box sx={{ width:'100px' }}>
      <Lottie  animationData={groovyWalkAnimation} loop={true} />
      </Box>
    )
 }
 export default Lottel

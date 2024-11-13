import { Box } from '@mui/material';

import 'animate.css';



const Commision = () => {



  return (
    <>
    <Box className="flex flex-col justify-center space-x-8 items-center w-full">
      
      <Box
        className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px] absolute bottom-20 z-10 border-[rgba(255,255,255,0.3)] rounded-[1rem] w-[20vw] h-[10vh] flex items-center justify-center 
        custom-border-effect
        hover:before:animate-drawBorderSlow hover:after:animate-drawBorderLight hover:cursor-pointer">
        <Box className="absolute animate-glowing rounded-[1rem] w-[98%] h-[94%]"></Box>
        <h2 className="text-2xl">Buy your neon order here</h2>
        <Box className="absolute border border-[rgba(255,255,255,0.3)] rounded-[1rem] w-[98%] h-[94%]"></Box>
      </Box>
      

      
    </Box>
    </>
  );
};

export default Commision;

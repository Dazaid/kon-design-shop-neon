import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';


function Square({ IconPrueba, description }) {

  return (
    <Box className="shadow-[0_0px_12px_1px_rgba(185,39,372,0.7)] drop-shadow-[0_0px_14px_rgba(185,39,242,1)] rounded-xl w-[22vw] h-[48vh] bg-gray-800 border-2 border-violet-400 mx-16 flex justify-center items-center p-6 relative hover:cursor-pointer hover:animate__animated hover:animate__pulse hover:animate__slower hover:animate__infinite hover:bg-[rgba(255,255,255,0.1)] hover:backdrop-blur-[2px] hover:border-[rgba(255,255,255,0.3)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:border hover:before:border-double hover:before:border-[rgba(255,255,255,0.3)] hover:before:rounded-xl hover:after:absolute hover:after:w-full hover:after:h-full hover:after:border hover:after:border-[rgba(255,255,255,0.3)] hover:after:border-double hover:after:rounded-xl hover:before:animate-drawBorderSlow hover:after:animate-drawBorderLight">
      
      {/* Left box with centered Icon and description */}
      <Box className="flex flex-col items-center w-full h-full justify-center">
        <Box className="w-[90%] h-[90%] flex justify-center items-center border-4 border-violet-400 rounded-lg mb-12 bg-gray-600">
          <IconPrueba sx={{ fontSize: 150, color: '#b927f2' }} />
        </Box>
        <Typography variant="h4" className="text-center text-white">
          {description}
        </Typography>
      </Box>
      
    </Box>
  );
}


Square.propTypes = {
  IconPrueba: PropTypes.elementType,
  description: PropTypes.string,
};

export default Square;

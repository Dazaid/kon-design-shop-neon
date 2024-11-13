import { Box, FormControlLabel, Radio, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useRef } from 'react';
function FormItems({ labelText = null, valueData, bkgData = '' }) {
  const radioStyle = {
    color: 'transparent',
    border: '0px',
    height: labelText === null ? '13vh' : '17.5vh', // Ternario para cambiar la altura
    width: labelText === null ? '11vw' : '9vw',
    position: 'relative',
    top: '1vh',
    left: '-2vw',
    '&:before': {
      height: labelText === null ? '13vh' : '17.5vh', // Ternario para cambiar la altura
      width: labelText === null ? '11vw' : '7vw',
      border: '1px solid transparent',
      position: 'relative',
      left: labelText === null ? '2vw' : '0.5vw',
      top: '0vh',
      content: '""',
      backgroundColor: 'rgba(255, 255, 255, 0.05);',
      transition: '0.2s ease',
      zIndex: '-1',
      borderRadius: '8px',
    },
    '&:hover': {
      '&:before': {
        height: labelText === null ? '13vh' : '17.5vh', // Ternario para cambiar la altura
        width: labelText === null ? '11vw' : '7vw',
        border: '1px solid transparent',
        position: 'relative',
        left: labelText === null ? '2vw' : '0.5vw',
        top: '0vh',
        content: '""',
        backgroundColor: 'rgba(255, 255, 255, 0.1);',
        boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.25)',
        transition: '0.2s ease',
        zIndex: '-1',
        borderRadius: '8px',
      },
    },

    '&.Mui-checked': {
      '&:before': {
        height: labelText === null ? '13vh' : '17.5vh', // Ternario para cambiar la altura
        width: labelText === null ? '10vw' : '7vw',
        border: '1px solid rgba(255, 255, 255, 0.3);',
        position: 'relative',
        left: labelText === null ? '2vw' : '0.5vw',
        top: '0vh',
        transform: 'scale(1.1)',
        content: '""',
        boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.2);',
        transition: '0.2s ease',
        zIndex: '-1',
        borderRadius: '8px',
      },
      color: 'transparent',
      border: '0px',
    },
  };
  // Crear una referencia al elemento Box
  const boxRef = useRef(null);

  // Función para enfocar el Box
  const handleBoxFocus = () => {
    if (boxRef.current) {
      boxRef.current.focus(); // Focalizar el Box cuando se hace clic
    }
  };

  const bkgEffects = valueData[1]?.typographyEffects;

  return (
    <Box
      className={`pb-[4vh] mt-[-4vh] relative left-[1.6vw] transition-all duration-200 ${
        labelText === null ? 'w-[6vw] h-[11vh] scale-[0.6] ml-[0.6vw]' : 'scale-[0.7] ml-[-1.4vw]'
      }`}
      ref={boxRef} // Asignar la referencia al Box
      onClick={handleBoxFocus} // Manejar clic para enfocar
      tabIndex={0} // Necesario para que Box sea focusable
    >
      <FormControlLabel
        className={`m-[1vh] ${labelText === null ? 'w-[5.2vw] h-[7.6vh]' : 'w-[6.1vw] h-[10.7vh]'}`}
        value={JSON.stringify(valueData)}
        control={<Radio sx={radioStyle} />}
        label={
          <Box
            className={`h-[10vh] flex flex-col justify-center bg-contain bg-no-repeat items-center rounded bg-white ${
              labelText === null ? 'mt-[2vh] w-[7.8vw] ml-[-10vw]' : 'w-[5vw] ml-[-9.15vw]'
            } ${bkgData}`}>
            <label className={`absolute w-[120%] text-center mix-blend-difference text-[2.5rem] ${bkgEffects}`}>
              {bkgData.length > 6 ? null : bkgData}
            </label>
            <Typography
              variant="h6"
              className={`absolute mb-[-14.8vh!important] w-[100%] text-center mix-blend-difference ${
                labelText === null ? 'hidden' : ''
              }`}>
              {labelText}
            </Typography>
          </Box>
        }
      />
    </Box>
  );
}

FormItems.propTypes = {
  labelText: PropTypes.string,
  valueData: PropTypes.array,
  bkgData: PropTypes.string,
};

export default FormItems;

import { Box } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PropTypes from 'prop-types';

function PreviewNeon({ neonText = '', neonColor = '', typographyEffects, previewHeight, previewWidth, lightBoxColor = '', lightBoxText = '', lightBox = false, lightBoxShape = 'rounded-xl', lightBoxImage = null }) {
  return (
    <>
      {/*Neon preview Component */}
      <Box className={`text-wrap w-[40vw] text-center break-words whitespace-normal z-50`}>
        <Box className='absolute text-wrap w-[25vw] text-center break-words whitespace-normal z-50'>
        <label className={`relative bottom-[6.5vh] left-[7.8vw] text-[5rem] break-words whitespace-normal ${lightBoxColor} ${neonColor} ${typographyEffects}`}>
          {neonText} {lightBoxText}
        </label>
        </Box>
      </Box>

      {/*Lightbox draw */}
      {lightBox && (
        <>
          <Box //bkg img

            className={`bg-cover bg-center bg-no-repeat ${lightBoxImage == null ? "bg-[url('../src/assets/YourDesignHere.png')]" : ''} z-40 ${lightBoxColor}  ${lightBoxShape} aspect-square w-[25vw] absolute bottom-[27%] left-[12.5%] transition-all duration-300`}
          >
            <img
              className={`bg-cover bg-center opacity-[0.98] z-40 ${lightBoxColor}  ${lightBoxShape} aspect-square transition-all duration-300`}
              src={lightBoxImage}
            />

          </Box>
          <Box
            className={`${lightBoxColor} z-30 ${lightBoxShape} aspect-square w-[25vw] absolute bottom-[27%] left-[12.5%] transition-all duration-300`}>
          </Box>
          <Box
            className={`z-[22] ${lightBoxShape} bg-[url('https://www.backgroundsy.com/file/preview/metal-steel-texture.jpg')] bg-cover opacity-[0.5] bg-no-repeat scale-[1.09] border-2 border-transparent ${lightBoxShape} aspect-square w-[25vw] absolute bottom-[26.8%] left-[12.7%] transition-all duration-300`}>
          </Box>
          <Box
            className={`z-20 shadow-[0px_0px_0px_10px_#44464a] bg-[#2b2c2e] scale-[1.02] border-2 border-transparent ${lightBoxShape} aspect-square w-[25vw] absolute bottom-[27.2%] left-[12.4%] transition-all duration-300`}>
          </Box>-
          <Box
            className={`z-10 shadow-[11px_10px_9px_1px_#5d5f63] scale-[1.04] border-2 border-transparent ${lightBoxShape} aspect-square w-[25vw] absolute bottom-[27.6%] left-[12.3%] transition-all duration-300`}>
          </Box>
          <Box
            className={`z-1 shadow-[11px_11px_0px_10px_#8a9597] scale-[1.04] border-2 border-transparent ${lightBoxShape} aspect-square w-[25vw] absolute bottom-[27.6%] left-[12.3%] transition-all duration-300`}>
          </Box>
        </>
      )}

      {/*Lightbox draw end*/}
      <Box
        className={`${neonColor} text-[1.5rem] w-[20vw] text-center flex justify-around items-center absolute ${lightBox ? 'bottom-[10%]' : 'bottom-[30%]'}`}
      >
        <HorizontalRuleIcon className="scale-x-[8.5]" />
        <label> {previewWidth}</label>
        <HorizontalRuleIcon className="scale-x-[8.5]" />
      </Box>
      <Box
        className={`${neonColor} text-[1.5rem] h-[30vh] text-center flex flex-col justify-around items-center absolute bottom-[38%] ${lightBox ? 'left-[45%]' : 'left-[40%]'}`}
      >
        <HorizontalRuleIcon className="scale-x-[7] rotate-90" />
        <label> {previewHeight}</label>
        <HorizontalRuleIcon className="scale-x-[7] rotate-90" />
      </Box>
    </>
  );
}
PreviewNeon.propTypes = {
  neonText: PropTypes.string,
  neonColor: PropTypes.string,
  typographyEffects: PropTypes.string,
  previewHeight: PropTypes.string,
  previewWidth: PropTypes.string,
  lightBoxColor: PropTypes.string,
  lightBoxText: PropTypes.string,
  lightBox: PropTypes.bool,
};

export default PreviewNeon;

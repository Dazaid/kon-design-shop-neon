import { Box } from '@mui/material';
import CarouselForm from './CarouselForm';
import PropTypes from 'prop-types';
import PreviewNeon from './PreviewNeon';
import { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function BuyNeon() {
  const { formData, handleReset } = useContext(FormContext);

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // ↓↓↓   search fot a better way to do this  ↓↓↓
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  const [isBlocking, setIsBlocking] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [neonText, setNeonText] = useState('');
  const [selectedBkg, setSelectedBkg] = useState(
    'https://plus.unsplash.com/premium_photo-1683133752824-b9fd877805f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHxlbnwwfHwwfHx8MA%3D%3D'
  );

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isBlocking) {
        const message = 'Are you sure you want to leave without saving changes?';
        event.preventDefault();
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isBlocking]);

  useEffect(() => {
    const handleNavigation = (event) => {
      if (isBlocking && location.pathname !== event.pathname) {
        const confirmLeave = window.confirm('Are you sure you want to leave without saving changes?');
        if (!confirmLeave) {
          event.preventDefault();
        } else {
          handleReset();
          setIsBlocking(false);
        }
      }
    };

    window.addEventListener('popstate', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, [isBlocking, location]);

  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  // ↑↑↑  search fot a better way to do this   ↑↑↑
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  const images = [
    'https://media.istockphoto.com/id/1008108158/photo/retro-wooden-cabinet-and-a-painting-in-an-empty-living-room-interior-with-white-walls-and.jpg?s=612x612&w=0&k=20&c=vDG7xSaX62DfJ6khAulcHb657M-pA-tlzQcxmm3lpK0=',
    'https://plus.unsplash.com/premium_photo-1683133752824-b9fd877805f3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHxlbnwwfHwwfHx8MA%3D%3D',
    'https://m.media-amazon.com/images/I/71L1Xe8DO8L._AC_UF1000,1000_QL80_.jpg',
    'https://files.passeidireto.com/c7f21c5d-b761-4e36-9bb4-a11b8ebccca7/c7f21c5d-b761-4e36-9bb4-a11b8ebccca7.jpeg',
    'https://addlogo.imageonline.co/image.jpg',
  ];
  const productDataNeon = {};

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento de envío por defecto

    // Estructura del objeto que será enviado al backend
    const productDataNeon = {
      title: neonText,
      color: formData.colors,
      height: formData.sizeHeight,
      width: formData.sizeWidth,
      typography: formData.typography,
      image: formData.image,
      description: formData.description,
      type: 'Neon',
    };

    console.log(JSON.stringify(productDataNeon));
  };

  const handleNeonTextChange = (event) => {
    setNeonText(event.target.value);
  };

  const handleImageClick = (image) => {
    setSelectedBkg(image);
    console.log(selectedBkg);
  };

  const handleImage = (event) => {
    const fileImg = event.target.files[0];
    if (fileImg) {
      const imageUrl = URL.createObjectURL(fileImg);
      setSelectedBkg(imageUrl);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 0,
    centerMode: false,
    arrows: false,
  };
  return (
    <Box className="select-none flex justify-center items-center items-center w-full h-screen absolute">
      {/* Left Side */}

      <Box
        className={`bg-no-repeat bg-cover bg-center border mt-[12.5vh] pb-[12.5vh] h-[87.5vh] w-[50%] flex flex-col justify-center items-center`}>
        <Box className="absolute w-[50%] h-[100%] overflow-hidden">
          <img
            className="absolute h-[100%] w-[100%] object-cover"
            src={selectedBkg}
            alt=""
          />
        </Box>
        {/*Neon preview Component */}
        <PreviewNeon
          neonText={neonText}
          neonColor={formData.colorEffects}
          typographyEffects={formData.typographyEffects}
          previewHeight={formData.sizeHeight}
          previewWidth={formData.sizeWidth}
        />

        {/*Change text prop useContext*/}
        <Box className="absolute top-[75vh] w-[100%] flex justify-center items-center">
          <input
            type="text"
            maxLength={17}
            placeholder="Your Text Here"
            className="rounded-xl text-center text-black text-4xl drop-shadow-[0_0px_5px_rgba(225,225,225,0.9)]"
            onChange={handleNeonTextChange}
          />
        </Box>
        <Slider
          {...settings}
          className="w-[50vw] h-[2vh] absolute top-[40vh] flex justify-around items-center">
          {images.map((image, index) => (
            <Box
              className="scale-[0.8] cursor-pointer w-[5vw] h-[5vw] px-[1vw] hover:drop-shadow-[0_0px_5px_rgba(225,225,225,0.5)] hover:transition-all duration-200 hover:scale-[0.9] hover:cursor-pointer"
              key={index}
              onClick={() => handleImageClick(image)}>
              <img
                className="cursor-pointer w-[100%] h-[100%] rounded-[1rem]"
                src={image}
                alt={`slide-${index}`}
              />
            </Box>
          ))}
        </Slider>
        <Box className="scale-[0.9] cursor-pointer absolute top-[89vh] left-[40.9vw] rounded-[1rem] w-[8.2vw] h-[5vw] bg-cover bg-[rgba(10,10,10,1)] hover:drop-shadow-[0_0px_5px_rgba(225,225,225,0.5)] hover:transition-all duration-200 hover:scale-[1.1] hover:cursor-pointer">
          <input
            className="z-[99] w-full h-full absolute opacity-0 cursor-pointer"
            type="file"
            name="referenceImage"
            onChange={handleImage}
            accept="image/*"
          />
          <AddPhotoAlternateIcon className="z-[0] top-[4vh] left-[3.5vw] scale-[2] absolute" />
        </Box>
      </Box>

      {/* Rigth Side */}

      <Box className="bg-[url('./assets/homeBkg.webp')] mt-[12.5vh] h-[87.5vh] w-[50%] flex flex-col justify-center items-center">
        {/*  Form container */}

        <Box className="w-[99%] h-[87%] my-[2%] p-[1vh]">
          <CarouselForm />
        </Box>

        {/* Bottom Buttons Submit/Buy and Price Variable*/}

        <Box className="flex justify-center items-center space-x-40">
          <h2 className="text-2xl bg-[rgba(0,0,0,0.5)] px-[4vw] py-[1vh] border rounded-[1rem]">Price: $$$</h2>

          {/* To back-end FORM HERE -- BUT NOT VISIBLE -- BELOW */}

          <form onSubmit={handleSubmit}>
            <input
              hidden
              name="typography"
              value={productDataNeon}
            />
            <input
              className="hover:bg-[rgba(0,128,0,1)] hover:drop-shadow-[0_0px_5px_rgba(225,225,225,0.9)] cursor-pointer text-3xl bg-[rgba(0,128,0,0.5)] px-[4vw] py-[1vh] border rounded-[1rem]"
              type="submit"
              value="Buy"
            />
          </form>
        </Box>
      </Box>
    </Box>
  );
}

BuyNeon.propTypes = {
  neonText: PropTypes.string,
};

export default BuyNeon;

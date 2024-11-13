import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, FormControl, RadioGroup, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { FormContext } from '../../context/FormContext.jsx';
import FormItems from './FormItems.jsx';
import Slider from 'react-slick';
import colors from '../../utils/colors.json';
import typography from '../../utils/typography.json';
import { productHeight, productWidth } from '../../utils/size.jsx';
import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const CarouselForm = ({ lightBox = false }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { handleChange, handleCustomWidth, handleCustomHeight, formData, setFormData } = useContext(FormContext);

  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [isOpenHeight, setIsOpenHeight] = useState(false);
  const [isOpenWidth, setIsOpenWidth] = useState(false);
  const [isOpenCustom, setIsOpenCustom] = useState(false);
  const [isOpenShape, setIsOpenShape] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const validatedValueHeight = Math.min(Math.max(height, 10), 200);
    setHeight(validatedValueHeight);
    const validatedValueWidth = Math.min(Math.max(width, 10), 300);
    setWidth(validatedValueWidth);
  }, [height, width]);

  const toggleBox = (type) => {
    type == 'height'
      ? setIsOpenHeight(!isOpenHeight)
      : type == 'width'
      ? setIsOpenWidth(!isOpenWidth)
      : type == 'custom'
      ? setIsOpenCustom(!isOpenCustom)
      : type == 'shape'
      ? setIsOpenShape(!isOpenShape)
      : type == 'color'
      ? setIsOpenColor(!isOpenColor)
      : type == 'size'
      ? setIsOpenSize(!isOpenSize)
      : null;
  };
  const handleImage = (event) => {
    const fileImg = event.target.files[0];
    if (fileImg) {
      const imageUrl = URL.createObjectURL(fileImg);
      setSelectedImage(imageUrl);

      setFormData((prevData) => ({
        ...prevData,
        referenceImage: imageUrl,
        image: fileImg,
      }));
    }
  };
  const handleDescription = (event) => {
    let description = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      description: description,
    }));
  };
  return (
    <>
      {lightBox ? (
        <Box className="p-[2vw] mt-[-2vh]">
          <Slider {...settings}>
            {/* Shape Section */}

            <Box className="border border-[rgba(255,255,255,0.3)] h-[65vh] w-[100%] p-[1rem] rounded-xl">
              <FormControl
                className="w-[100%] h-[100%] flex flex-col items-start bg-[rgba(0,0,0,0.2)] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]"
                component="fieldset">

                <Box className={`w-[100%] transition-all duration-100 ${isOpenShape ? 'h-[40%]' : 'h-[9%]'}`}>
                  {/* Botón para mostrar/ocultar el contenido */}
                  <Box
                    onClick={() => toggleBox('shape')}
                    className="cursor-pointer w-[100%] py-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)] text-white font-semibold rounded text-center">
                    <span>{isOpenShape ? 'Shape' : 'Shape'}</span>
                    {isOpenShape ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Box>

                  {/* Box desplegable */}
                  <Box className={`w-[100%] transition-all duration-100 h-[40%]`}>
                  <RadioGroup
                  className=" w-[100%] h-[100%] flex flex-wrap justify-around items-start"
                  onChange={handleChange}>
                  <FormItems
                    bkgData={'bg-[url(./assets/Rectangle.png)!important]'}
                    labelText={'Rectangle'}
                    valueData={[{ shape: 'Rectangle' }, { shapeEffects: 'rounded-xl' }]}
                  />
                  <FormItems
                    bkgData={'bg-[url(./assets/Circle.png)!important]'}
                    labelText={'Circle'}
                    valueData={[{ shape: 'Circle' }, { shapeEffects: 'rounded-[50%]' }]}
                  />
                </RadioGroup>
                  </Box>
                </Box>

                {/* Color Selection */}

                <Box className={`w-[100%] transition-all duration-100 ${isOpenColor ? 'h-[40%]' : 'h-[9%]'}`}>
                  {/* Botón para mostrar/ocultar el contenido */}
                  <Box
                    onClick={() => toggleBox('color')}
                    className="cursor-pointer w-[100%] py-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)] text-white font-semibold rounded text-center">
                    <span>{isOpenColor ? 'Color' : 'Color'}</span>
                    {isOpenColor ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Box>

                  {/* Box desplegable */}
                  <Box className={`w-[100%] transition-all duration-100 h-[40%]`}>
                    <RadioGroup
                      className=" w-[100%] h-[100%] flex flex-wrap justify-around items-start"
                      onChange={handleChange}>
                      <FormItems
                        bkgData={'bg-[rgb(0,0,0)!important]'}
                        labelText={'Black'}
                        valueData={[
                          { colors: 'Black' }, // First value for colors
                          { colorEffects: 'bg-[rgb(0,0,0)!important] shadow-[0_0px_20px_2px_rgba(0,0,0,0.7)]' }, // Second value for effects
                        ]}
                      />
                      <FormItems
                        bkgData={'bg-[rgb(255,255,255)!important]'}
                        labelText={'White'}
                        valueData={[
                          { colors: 'White' }, // First value for colors
                          {
                            colorEffects:
                              'bg-[rgb(255,255,255)!important] shadow-[0_0px_20px_2px_rgba(255,255,255,0.7)]',
                          }, // Second value for effects
                        ]}
                      />
                    </RadioGroup>
                  </Box>
                </Box>

                {/* Size Selection */}

                <Box className={`w-[100%] transition-all duration-100 ${isOpenSize ? 'h-[40%]' : 'h-[9%]'}`}>
                  {/* Botón para mostrar/ocultar el contenido */}
                  <Box
                    onClick={() => toggleBox('size')}
                    className="cursor-pointer w-[100%] py-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)] text-white font-semibold rounded text-center">
                    <span>{isOpenSize ? 'Size' : 'Size'}</span>
                    {isOpenSize ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Box>

                  {/* Box desplegable */}
                  <Box className={`w-[100%] transition-all duration-100 h-[40%]`}>
                    <RadioGroup
                      className={`w-[100%] overflow-hidden mt-[1vh] ml-[-1.8vw] flex flex-wrap justify-around transition-all duration-100 h-[80%] pt-[2vh]
                      }`}
                      name="size"
                      onChange={handleChange}>
                      <FormItems
                        bkgData={'50x50'}
                        valueData={[{ width: '50cm' }, { height: '50cm' }]}
                      />
                      <FormItems
                        bkgData={'60x60'}
                        valueData={[{ width: '60cm' }, { height: '60cm' }]}
                      />
                      <FormItems
                        bkgData={'70x70'}
                        valueData={[{ width: '70cm' }, { height: '70cm' }]}
                      />
                    </RadioGroup>
                  </Box>
                </Box>
              </FormControl>
            </Box>

            {/* Image Selection and Description*/}

            <Box sx={{ height: '65vh', padding: '1rem' }}>
              <FormControl
                className="w-[100%] h-[100%]"
                component="fieldset">
                <Box className="w-[100%] h-[100%] flex flex-wrap justify-around">
                  <Box className="w-[50%] h-[50%]">
                    <Typography
                      variant="h5"
                      className="text-center">
                      Reference Image
                    </Typography>
                    <input
                      className="my-[1.5vh]"
                      type="file"
                      name="referenceImage"
                      onChange={handleImage}
                      accept="image/*"
                    />
                    <Box className="h-[70%] w-[90%] rounded bg-[rgba(0,0,0,0.5)] shadow-[0_0px_10px_2px_rgba(255,255,255,0.2)] flex justify-center items-center">
                      <img
                        className="h-[60%]"
                        src={selectedImage}
                      />
                    </Box>
                  </Box>
                  <Box className="w-[50%] h-[51%] flex flex-col">
                    <Typography
                      variant="h5"
                      className="text-center">
                      Description
                    </Typography>
                    <label className="text-center my-[0.5vh]">
                      "Explain what you need, complete the order, and we'll design it for you for free."
                    </label>
                    <textarea
                      rows={8}
                      cols={50}
                      placeholder="Indicate how you want your design: typography, logos, images. You can upload a file if you wish."
                      className="bg-[rgba(255,255,255,0.1)] p-2 rounded resize-none shadow-[0_0px_10px_2px_rgba(255,255,255,0.2)]"
                      name="description"
                      onChange={handleDescription}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      className="text-center">
                      Example:
                    </Typography>
                    <Box className="relative top-[2vh] bg-[rgba(255,255,255,0.1)] p-2 rounded shadow-[0_0px_10px_2px_rgba(255,255,255,0.2)]">
                      <Typography variant="p">
                        Typography: An elegant font, something like modern serif or thin sans serif in uppercase.
                        <br />
                        Colors: Mainly neon blue with white or light gray details.
                        <br />
                        Logos/Images: I’d like a small star icon in one corner.
                        <br />
                        Size: 1 meter long by 40 cm tall.
                        <br />
                        Attachment: I don’t have one, but I’m open to suggestions.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Slider>
        </Box>
      ) : (
        <Box className="p-[2vw] mt-[-2vh]">
          <Slider {...settings}>
            {/* Color Selection */}
            <Box className="bg-[rgba(255,255,255,0.06)] h-[65vh] w-[100%] p-[1rem] rounded-xl shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)]">
              <FormControl
                className="w-[100%] h-[100%]"
                component="fieldset">
                <Typography
                  variant="h5"
                  className="text-center pb-[1rem] w-[96%]"></Typography>
                <RadioGroup
                  className=" w-[100%] h-[100%] flex flex-wrap justify-around items-start"
                  onChange={handleChange}>
                  {Object.entries(colors).map(([key, color]) => (
                    <FormItems
                      key={key}
                      bkgData={color.bkgData}
                      labelText={color.labelText}
                      valueData={[
                        { colors: color.valueData }, // First value for colors
                        { colorEffects: color.effectData }, // Second value for effects
                      ]}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>

            {/* Typography Selection */}
            <Box className="bg-[rgba(255,255,255,0.06)] h-[65vh] w-[100%] p-[1rem] rounded-xl shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)]">
              <FormControl
                className="w-[100%] h-[100%]"
                component="fieldset">
                <Typography
                  variant="h5"
                  className="text-center pb-[1rem] w-[96%]">
                  Typography
                </Typography>
                <RadioGroup
                  className="w-[100%] h-[100%] flex flex-wrap justify-around items-start"
                  name="typography"
                  onChange={handleChange}>
                  {Object.entries(typography).map(([key, typograph]) => (
                    <FormItems
                      key={key}
                      bkgData={typograph.bkgData}
                      labelText={typograph.labelText}
                      valueData={[
                        { typography: typograph.valueData }, // First value for colors
                        { typographyEffects: typograph.effectData }, // Second value for effects
                      ]}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>

            {/* Size Selection */}

            <Box className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] h-[65vh] w-[100%] p-[1rem] rounded-xl shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)]">
              <FormControl
                className="w-[100%] h-[100%] flex flex-col items-start overflow-y-scroll"
                component="fieldset">
                <Typography
                  variant="h5"
                  className="text-center pb-[1rem] w-[96%]">
                  Size
                </Typography>

                <Box className={`w-[100%] transition-all duration-100 ${isOpenHeight ? 'h-[40%]' : 'h-[9%]'}`}>
                  {/* Botón para mostrar/ocultar el contenido */}
                  <Box
                    onClick={() => toggleBox('height')}
                    className="cursor-pointer w-[100%] py-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)] text-white font-semibold rounded text-center">
                    <span>{isOpenHeight ? 'Height' : 'Height'}</span>
                    {isOpenHeight ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Box>

                  {/* Box desplegable */}
                  <RadioGroup
                    className={`w-[100%] overflow-hidden mt-[1vh] ml-[-1.8vw] flex flex-wrap justify-around transition-all duration-100 ${
                      isOpenHeight ? 'h-[80%] pt-[2vh]' : 'h-[0%]'
                    }`}
                    name="height"
                    onChange={handleChange}>
                    {productHeight.map((sizeH, index) => (
                      <FormItems
                        key={index}
                        bkgData={sizeH}
                        valueData={[{ sizeHeight: sizeH }]}
                      />
                    ))}
                  </RadioGroup>
                </Box>

                <Box className={`w-[100%] transition-all duration-100 ${isOpenWidth ? 'h-[60%] mb-[4vh]' : 'h-[9%]'}`}>
                  {/* Botón para mostrar/ocultar el contenido */}
                  <Box
                    onClick={() => toggleBox('width')}
                    className="cursor-pointer w-[100%] py-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)] text-white font-semibold rounded text-center">
                    <span>{isOpenWidth ? 'Width' : 'Width'}</span>
                    {isOpenWidth ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Box>

                  {/* Box desplegable */}
                  <RadioGroup
                    className={`w-[100%] overflow-hidden mt-[1vh] ml-[-1.8vw] flex flex-wrap justify-around transition-all duration-300 ${
                      isOpenWidth ? 'h-[95%] pt-[2vh] ' : 'h-[0%]'
                    }`}
                    name="width"
                    onChange={handleChange}>
                    {productWidth.map((sizeW, index) => (
                      <FormItems
                        key={index}
                        bkgData={sizeW}
                        valueData={[{ sizeWidth: sizeW }]}
                      />
                    ))}
                  </RadioGroup>
                </Box>

                <Box className={`w-[100%] transition-all duration-100 ${isOpenHeight ? 'h-[40%]' : 'h-[9%]'}`}>
                  {/* Botón para mostrar/ocultar el contenido */}
                  <Box
                    onClick={() => toggleBox('custom')}
                    className="cursor-pointer w-[100%] py-2 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.3)] shadow-[0px_0px_20px_0px_rgba(225,225,225,0.1)] text-white font-semibold rounded text-center">
                    <span>{isOpenHeight ? 'Custom' : 'Custom'}</span>
                    {isOpenHeight ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Box>

                  {/* Box desplegable */}
                  <Box
                    className={`w-[100%] overflow-hidden mt-[1vh] ml-[-1.8vw] flex flex-wrap justify-around transition-all duration-100 ${
                      isOpenCustom ? 'h-[80%]' : 'h-[0%]'
                    }`}>
                    <Box className="w-[100%] flex justify-around">
                      <Box className="flex justify-center items-center space-x-2">
                        <label>Width:</label>
                        <input
                          type="number"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          onMouseLeave={handleCustomWidth}
                          maxLength={3}
                          placeholder="cm"
                          className="bg-[rgba(255,255,255,0.2)] text-[white] pl-3 block h-[4vh] w-[5vw] border-gray-300 rounded-md"
                          name="width"
                        />
                      </Box>

                      <Box className="flex justify-center items-center space-x-2">
                        <label>Height:</label>
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          onMouseLeave={handleCustomHeight}
                          maxLength={3}
                          placeholder="cm"
                          className="bg-[rgba(255,255,255,0.2)] text-[white] pl-3 block h-[4vh] w-[5vw] border-gray-300 rounded-md"
                          name="height"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </FormControl>
            </Box>

            {/* Reference Image and Description */}
            <Box sx={{ height: '65vh', padding: '1rem' }}>
              <FormControl
                className="w-[100%] h-[100%]"
                component="fieldset">
                <Box className="w-[100%] h-[100%] flex">
                  <Box className="w-[50%] h-[50%]">
                    <Typography
                      variant="h5"
                      className="text-center">
                      Reference Image
                    </Typography>
                    <input
                      className="my-[1.5vh]"
                      type="file"
                      name="referenceImage"
                      onChange={handleImage}
                      accept="image/*"
                    />
                    <Box className="h-[70%] w-[90%] rounded bg-[rgba(0,0,0,0.5)] shadow-[0_0px_10px_2px_rgba(255,255,255,0.2)] flex justify-center items-center">
                      <img
                        className="h-[60%]"
                        src={selectedImage}
                      />
                    </Box>
                  </Box>
                  <Box className="w-[50%] h-[51%] flex flex-col">
                    <Typography
                      variant="h5"
                      className="text-center">
                      Description
                    </Typography>
                    <label className="text-center my-[0.5vh]">
                      "Explain what you need, complete the order, and we'll design it for you for free."
                    </label>
                    <textarea
                      rows={8}
                      cols={50}
                      placeholder="Indicate how you want your design: typography, logos, images. You can upload a file if you wish."
                      className="bg-[rgba(255,255,255,0.1)] p-2 rounded resize-none shadow-[0_0px_10px_2px_rgba(255,255,255,0.2)]"
                      name="description"
                      onChange={handleDescription}
                    />
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Slider>
        </Box>
      )}
    </>
  );
};

CarouselForm.propTypes = {
  lightBox: PropTypes.bool,
};

export default CarouselForm;

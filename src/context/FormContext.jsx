import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    colors: '', 
    colorEffects: '', 
    shape: '',
    shapeEffects: '',
    typography: '',
    typographyEffects: '',
    sizeHeight: '',
    sizeWidth: '',
    referenceImage: null,
    image: null,
    description: '',
  });

  const handleReset = () => {
    setFormData({
      colors: '', 
      colorEffects: '', 
      shape: '',
      shapeEffects: '',
      typography: '',
      typographyEffects: '',
      sizeHeight: '',
      sizeWidth: '',
      image: null,
      referenceImage: null,
      description: '',
    })
  }

  const handleChange = (e) => {
    const { value } = e.target;

    // Check if the value is a JSON string and parse it
    try {
      const parsedValue = JSON.parse(value); // Parse it back to an object

      // Check if the parsedValue is an array
      if (Array.isArray(parsedValue)) {
        const updatedData = parsedValue.reduce((acc, item) => {
          const key = Object.keys(item)[0]; // Extract the key (e.g., 'colors', 'effects')
          const val = item[key]; // Extract the value (e.g., 'purple', 'text-[...]')

          acc[key] = val; // Set the key and value dynamically

          return acc;
        }, {});

        setFormData((prevData) => ({
          ...prevData,
          ...updatedData, // Spread updated data into formData
        }));
      }
    } catch (error) {
      console.error('Failed to parse JSON:', error);
    }
    console.log(formData);
  };
  
  // Función para manejar el evento cuando el mouse deja el input
  const handleCustomWidth = (e) => {
    const newWidthValue = e.target.value + 'cm';

    // Actualizar directamente el sizeWidth en formData
    setFormData((prevData) => ({
      ...prevData,
      sizeWidth: newWidthValue, // Aquí se actualiza el valor de width
    }));

  };
  const handleCustomHeight = (e) => {
    const newHeightValue = e.target.value + 'cm';

    // Actualiza sizeHeight en formData
    setFormData((prevData) => ({
      ...prevData,
      sizeHeight: newHeightValue, // Actualiza sizeHeight
    }));

  };

  return <FormContext.Provider value={{ formData, setFormData, handleChange, handleCustomWidth, handleCustomHeight, handleReset }}>{children}</FormContext.Provider>;
};

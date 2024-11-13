import { useNavigate } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };
  const goToHome = () => {
    navigate('/');
  };
  const goToBuyNeon = () => {
    navigate('/neon');
  };
  const goToBuyLightBox = () => {
    navigate('/lightBox');
  };

  return {
    redirectTo,
    goToHome,
    goToBuyNeon,
    goToBuyLightBox,
  };
};

export default useRedirect;

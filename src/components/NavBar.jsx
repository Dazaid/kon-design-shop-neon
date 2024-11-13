import { Box } from '@mui/material';
import useRedirect from '../hooks/useRedirect';

function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const { goToHome } = useRedirect();


  return (
    <>
      <Box className="bg-[rgba(0,0,0,0.7)] backdrop-blur-[2px] border-b-[1px] flex justify-between w-full h-[10vh] sticky top-0 z-30">
        <Box className="flex items-center text-[1rem]">
          <img
            onClick={goToHome}
            className="hover:drop-shadow-[0_0px_15px_rgba(225,225,225,0.5)] hover:cursor-pointer hover:transition-all duration-200 h-[6vh] m-[2rem] ml-[7rem] mr-[5rem]"
            src="src/assets/konLogo.webp"
            alt="kon design logo"
            title="Kon Logo"
          />

          <a
            href="#"
            className="hover:drop-shadow-[0_0px_15px_rgba(225,225,225,0.5)] hover:cursor-pointer hover:scale-125 hover:transition-all duration-200 z-10">
            Products
          </a>
          <a
            href="#"
            className="mx-[4rem] hover:drop-shadow-[0_0px_15px_rgba(225,225,225,0.5)] hover:cursor-pointer hover:scale-125 hover:transition-all duration-200 z-10">
            Company
          </a>
          <a
            href="#"
            className="hover:drop-shadow-[0_0px_15px_rgba(225,225,225,0.5)] hover:cursor-pointer hover:scale-125 hover:transition-all duration-200 z-10">
            Shipping EU
          </a>
        </Box>

        <Box className="flex w-[10rem] mr-[5rem] justify-end items-center">

        </Box>
      </Box>
    </>
  );
}

export default NavBar;

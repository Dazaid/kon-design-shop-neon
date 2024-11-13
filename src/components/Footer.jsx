import { Instagram, WhatsApp, GitHub } from '@mui/icons-material'; // Importing icons from Material-UI

const Footer = () => {
  const today = new Date();
  return (
    <footer className="absolute bot-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[1px] text-xs text-white h-[2.5vh] w-full flex justify-between px-8">
      
      {/* Left Section: Instagram and WhatsApp Icons */}
      <div className="text-left flex items-center space-x-4">
       <GitHub sx={{ fontSize: 20, color: 'white' }} />
        <div className="flex space-x-4">
          <span>
            <a
              href="https://github.com/AlexisF27"
              target="_blank"
              rel="noopener noreferrer">
              AlexisF27
            </a>
          </span>
          <span>
            <a
              href="https://github.com/Dazaid"
              target="_blank"
              rel="noopener noreferrer">
              Dazaid
            </a>
          </span>
        </div>
      </div>

      {/* Center Section: Copyright - moved slightly to the right */}
      <div className="flex items-center text-center">
        <p >Copyright &copy; {today.getFullYear()}</p>
      </div>

      {/* Right Section: Authors' GitHub Profiles */}
      

      <div className="flex items-center space-x-1 mr-10">
        <a
          className="mx-12"
          href="https://www.instagram.com/kon_design_/"
          target="_blank"
          rel="noopener noreferrer">
          <Instagram sx={{ fontSize: 20, color: 'white' }} />
        </a>
        <a
          href="https://wa.me/351913916397"
          target="_blank"
          rel="noopener noreferrer">
          <WhatsApp sx={{ fontSize: 20, color: 'white' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

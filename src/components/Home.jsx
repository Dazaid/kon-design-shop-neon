import { useRef } from 'react';
import Commision from './Commision';
import BuyNeon from './BuyComponents/BuyNeon';
import { Box } from '@mui/material';

function Home() {
  const buyNeonRef = useRef(null);

  // Función para hacer scroll
  const handleScrollToBuyNeon = () => {
    buyNeonRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Box className="h-[200vh] bg-cover bg-[url('src/assets/homeBkg.webp')] z-[-1]">
        <Box className="h-[100vh] flex flex-col justify-center items-center">

          <svg className='w-[50vw] absolute top-[-2vh] ' version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 496.000000 298.000000" preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M0 1920 l0 -1060 200 0 200 0 0 238 0 237 79 79 79 79 211 -317 211
-316 226 0 c202 0 225 2 220 16 -3 9 -137 212 -297 452 -160 240 -293 442
-296 449 -2 6 4 20 14 31 10 10 131 133 268 273 138 140 259 265 269 277 l19
22 -235 0 -235 0 -109 -123 c-60 -67 -179 -200 -264 -295 l-155 -173 -3 596
-2 595 -200 0 -200 0 0 -1060z m372 443 c3 -596 3 -598 24 -598 14 0 102 91
288 298 l268 297 200 0 200 0 -274 -281 c-150 -154 -273 -288 -272 -297 0 -10
132 -214 292 -454 l292 -438 -200 0 -201 0 -205 311 c-113 170 -212 313 -221
316 -10 4 -44 -24 -104 -83 l-89 -89 0 -227 0 -228 -175 0 -175 0 0 1035 0
1035 175 0 175 0 2 -597z" class="svg-elem-1"></path>
              <path d="M3880 2929 c-277 -59 -457 -229 -532 -504 -22 -78 -22 -97 -29 -920
-4 -515 -10 -854 -16 -876 -16 -58 -64 -138 -102 -171 -84 -74 -231 -109 -368
-89 -229 34 -334 170 -333 431 l1 65 97 47 c273 131 417 405 399 759 -8 152
-28 235 -83 346 -125 252 -370 393 -684 393 -467 0 -770 -311 -770 -790 0
-234 67 -421 202 -565 95 -102 252 -187 386 -210 l42 -7 0 -68 c0 -210 55
-383 163 -518 89 -109 203 -180 362 -224 71 -20 104 -22 295 -22 191 0 224 2
295 22 271 75 440 249 501 517 16 73 19 157 24 915 6 862 7 865 47 944 67 130
245 203 435 177 168 -23 267 -99 314 -241 17 -51 18 -113 22 -767 l3 -713 205
0 205 0 -3 738 -4 737 -26 97 c-56 203 -166 347 -328 426 -140 69 -215 84
-435 88 -162 3 -204 1 -285 -17z m410 -9 c347 -43 552 -218 622 -530 20 -91
21 -125 25 -797 l4 -703 -185 0 -186 0 0 678 c0 712 -2 758 -45 842 -25 49
-103 128 -153 154 -81 42 -253 58 -364 35 -121 -26 -227 -111 -270 -216 l-23
-58 -6 -840 c-7 -905 -6 -896 -61 -1044 -65 -175 -215 -314 -403 -375 -73 -23
-237 -46 -335 -46 -98 0 -262 23 -335 46 -199 65 -346 210 -416 411 -22 63
-48 237 -49 320 0 28 -4 55 -10 58 -5 3 -44 15 -87 26 -262 69 -430 240 -504
514 -31 114 -31 336 0 450 94 348 347 538 716 538 378 0 632 -188 726 -538 31
-114 31 -336 0 -450 -60 -222 -176 -370 -364 -461 -40 -20 -79 -39 -87 -43
-20 -11 -21 -236 -1 -296 34 -103 112 -184 219 -227 49 -19 75 -22 192 -22
117 0 143 3 192 22 66 27 116 64 164 124 70 88 67 50 75 983 7 915 6 899 66
1045 55 136 168 260 288 319 157 76 382 107 595 81z" class="svg-elem-2"></path>
              <path d="M2115 2114 c-106 -34 -191 -125 -236 -255 -31 -87 -39 -320 -15 -422
32 -138 104 -239 208 -294 48 -26 62 -28 158 -28 95 0 110 3 155 27 102 54
180 162 210 290 19 83 19 293 0 376 -32 135 -111 243 -215 290 -70 33 -190 40
-265 16z m238 -30 c93 -33 168 -125 209 -254 19 -63 23 -97 23 -210 0 -113 -4
-147 -23 -210 -57 -183 -167 -274 -332 -274 -179 0 -301 115 -344 326 -30 145
-14 329 38 443 77 167 254 241 429 179z" class="svg-elem-3"></path>
            </g>
          </svg>

          <svg className='w-[50vw] absolute top-[-2vh] drop-shadow-[0_0_5px_#83337d]' version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 496.000000 298.000000" preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M0 1920 l0 -1060 200 0 200 0 0 238 0 237 79 79 79 79 211 -317 211
-316 226 0 c202 0 225 2 220 16 -3 9 -137 212 -297 452 -160 240 -293 442
-296 449 -2 6 4 20 14 31 10 10 131 133 268 273 138 140 259 265 269 277 l19
22 -235 0 -235 0 -109 -123 c-60 -67 -179 -200 -264 -295 l-155 -173 -3 596
-2 595 -200 0 -200 0 0 -1060z m372 443 c3 -596 3 -598 24 -598 14 0 102 91
288 298 l268 297 200 0 200 0 -274 -281 c-150 -154 -273 -288 -272 -297 0 -10
132 -214 292 -454 l292 -438 -200 0 -201 0 -205 311 c-113 170 -212 313 -221
316 -10 4 -44 -24 -104 -83 l-89 -89 0 -227 0 -228 -175 0 -175 0 0 1035 0
1035 175 0 175 0 2 -597z" class="svg-elem-1 svgblur2-1"></path>
              <path d="M3880 2929 c-277 -59 -457 -229 -532 -504 -22 -78 -22 -97 -29 -920
-4 -515 -10 -854 -16 -876 -16 -58 -64 -138 -102 -171 -84 -74 -231 -109 -368
-89 -229 34 -334 170 -333 431 l1 65 97 47 c273 131 417 405 399 759 -8 152
-28 235 -83 346 -125 252 -370 393 -684 393 -467 0 -770 -311 -770 -790 0
-234 67 -421 202 -565 95 -102 252 -187 386 -210 l42 -7 0 -68 c0 -210 55
-383 163 -518 89 -109 203 -180 362 -224 71 -20 104 -22 295 -22 191 0 224 2
295 22 271 75 440 249 501 517 16 73 19 157 24 915 6 862 7 865 47 944 67 130
245 203 435 177 168 -23 267 -99 314 -241 17 -51 18 -113 22 -767 l3 -713 205
0 205 0 -3 738 -4 737 -26 97 c-56 203 -166 347 -328 426 -140 69 -215 84
-435 88 -162 3 -204 1 -285 -17z m410 -9 c347 -43 552 -218 622 -530 20 -91
21 -125 25 -797 l4 -703 -185 0 -186 0 0 678 c0 712 -2 758 -45 842 -25 49
-103 128 -153 154 -81 42 -253 58 -364 35 -121 -26 -227 -111 -270 -216 l-23
-58 -6 -840 c-7 -905 -6 -896 -61 -1044 -65 -175 -215 -314 -403 -375 -73 -23
-237 -46 -335 -46 -98 0 -262 23 -335 46 -199 65 -346 210 -416 411 -22 63
-48 237 -49 320 0 28 -4 55 -10 58 -5 3 -44 15 -87 26 -262 69 -430 240 -504
514 -31 114 -31 336 0 450 94 348 347 538 716 538 378 0 632 -188 726 -538 31
-114 31 -336 0 -450 -60 -222 -176 -370 -364 -461 -40 -20 -79 -39 -87 -43
-20 -11 -21 -236 -1 -296 34 -103 112 -184 219 -227 49 -19 75 -22 192 -22
117 0 143 3 192 22 66 27 116 64 164 124 70 88 67 50 75 983 7 915 6 899 66
1045 55 136 168 260 288 319 157 76 382 107 595 81z" class="svg-elem-2 svgblur2-2"></path>
              <path d="M2115 2114 c-106 -34 -191 -125 -236 -255 -31 -87 -39 -320 -15 -422
32 -138 104 -239 208 -294 48 -26 62 -28 158 -28 95 0 110 3 155 27 102 54
180 162 210 290 19 83 19 293 0 376 -32 135 -111 243 -215 290 -70 33 -190 40
-265 16z m238 -30 c93 -33 168 -125 209 -254 19 -63 23 -97 23 -210 0 -113 -4
-147 -23 -210 -57 -183 -167 -274 -332 -274 -179 0 -301 115 -344 326 -30 145
-14 329 38 443 77 167 254 241 429 179z" class="svg-elem-3 svgblur2-3"></path>
            </g>
          </svg>

          <svg className='w-[50vw] absolute top-[-2vh] drop-shadow-[0_0_25px_#83337d]' version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 496.000000 298.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M0 1920 l0 -1060 200 0 200 0 0 238 0 237 79 79 79 79 211 -317 211
-316 226 0 c202 0 225 2 220 16 -3 9 -137 212 -297 452 -160 240 -293 442
-296 449 -2 6 4 20 14 31 10 10 131 133 268 273 138 140 259 265 269 277 l19
22 -235 0 -235 0 -109 -123 c-60 -67 -179 -200 -264 -295 l-155 -173 -3 596
-2 595 -200 0 -200 0 0 -1060z m372 443 c3 -596 3 -598 24 -598 14 0 102 91
288 298 l268 297 200 0 200 0 -274 -281 c-150 -154 -273 -288 -272 -297 0 -10
132 -214 292 -454 l292 -438 -200 0 -201 0 -205 311 c-113 170 -212 313 -221
316 -10 4 -44 -24 -104 -83 l-89 -89 0 -227 0 -228 -175 0 -175 0 0 1035 0
1035 175 0 175 0 2 -597z" class="svg-elem-1 svgblur-1"></path>
  <path d="M3880 2929 c-277 -59 -457 -229 -532 -504 -22 -78 -22 -97 -29 -920
-4 -515 -10 -854 -16 -876 -16 -58 -64 -138 -102 -171 -84 -74 -231 -109 -368
-89 -229 34 -334 170 -333 431 l1 65 97 47 c273 131 417 405 399 759 -8 152
-28 235 -83 346 -125 252 -370 393 -684 393 -467 0 -770 -311 -770 -790 0
-234 67 -421 202 -565 95 -102 252 -187 386 -210 l42 -7 0 -68 c0 -210 55
-383 163 -518 89 -109 203 -180 362 -224 71 -20 104 -22 295 -22 191 0 224 2
295 22 271 75 440 249 501 517 16 73 19 157 24 915 6 862 7 865 47 944 67 130
245 203 435 177 168 -23 267 -99 314 -241 17 -51 18 -113 22 -767 l3 -713 205
0 205 0 -3 738 -4 737 -26 97 c-56 203 -166 347 -328 426 -140 69 -215 84
-435 88 -162 3 -204 1 -285 -17z m410 -9 c347 -43 552 -218 622 -530 20 -91
21 -125 25 -797 l4 -703 -185 0 -186 0 0 678 c0 712 -2 758 -45 842 -25 49
-103 128 -153 154 -81 42 -253 58 -364 35 -121 -26 -227 -111 -270 -216 l-23
-58 -6 -840 c-7 -905 -6 -896 -61 -1044 -65 -175 -215 -314 -403 -375 -73 -23
-237 -46 -335 -46 -98 0 -262 23 -335 46 -199 65 -346 210 -416 411 -22 63
-48 237 -49 320 0 28 -4 55 -10 58 -5 3 -44 15 -87 26 -262 69 -430 240 -504
514 -31 114 -31 336 0 450 94 348 347 538 716 538 378 0 632 -188 726 -538 31
-114 31 -336 0 -450 -60 -222 -176 -370 -364 -461 -40 -20 -79 -39 -87 -43
-20 -11 -21 -236 -1 -296 34 -103 112 -184 219 -227 49 -19 75 -22 192 -22
117 0 143 3 192 22 66 27 116 64 164 124 70 88 67 50 75 983 7 915 6 899 66
1045 55 136 168 260 288 319 157 76 382 107 595 81z" class="svg-elem-2 svgblur-2"></path>
  <path d="M2115 2114 c-106 -34 -191 -125 -236 -255 -31 -87 -39 -320 -15 -422
32 -138 104 -239 208 -294 48 -26 62 -28 158 -28 95 0 110 3 155 27 102 54
180 162 210 290 19 83 19 293 0 376 -32 135 -111 243 -215 290 -70 33 -190 40
-265 16z m238 -30 c93 -33 168 -125 209 -254 19 -63 23 -97 23 -210 0 -113 -4
-147 -23 -210 -57 -183 -167 -274 -332 -274 -179 0 -301 115 -344 326 -30 145
-14 329 38 443 77 167 254 241 429 179z" class="svg-elem-3 svgblur-3"></path>
</g>
</svg>
          
          <svg className='w-[50vw] absolute top-[-2vh] drop-shadow-[0_0_50px_#83337d]' version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 496.000000 298.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,298.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
  <path d="M0 1920 l0 -1060 200 0 200 0 0 238 0 237 79 79 79 79 211 -317 211
-316 226 0 c202 0 225 2 220 16 -3 9 -137 212 -297 452 -160 240 -293 442
-296 449 -2 6 4 20 14 31 10 10 131 133 268 273 138 140 259 265 269 277 l19
22 -235 0 -235 0 -109 -123 c-60 -67 -179 -200 -264 -295 l-155 -173 -3 596
-2 595 -200 0 -200 0 0 -1060z m372 443 c3 -596 3 -598 24 -598 14 0 102 91
288 298 l268 297 200 0 200 0 -274 -281 c-150 -154 -273 -288 -272 -297 0 -10
132 -214 292 -454 l292 -438 -200 0 -201 0 -205 311 c-113 170 -212 313 -221
316 -10 4 -44 -24 -104 -83 l-89 -89 0 -227 0 -228 -175 0 -175 0 0 1035 0
1035 175 0 175 0 2 -597z" class="svg-elem-1 svgblur-1"></path>
  <path d="M3880 2929 c-277 -59 -457 -229 -532 -504 -22 -78 -22 -97 -29 -920
-4 -515 -10 -854 -16 -876 -16 -58 -64 -138 -102 -171 -84 -74 -231 -109 -368
-89 -229 34 -334 170 -333 431 l1 65 97 47 c273 131 417 405 399 759 -8 152
-28 235 -83 346 -125 252 -370 393 -684 393 -467 0 -770 -311 -770 -790 0
-234 67 -421 202 -565 95 -102 252 -187 386 -210 l42 -7 0 -68 c0 -210 55
-383 163 -518 89 -109 203 -180 362 -224 71 -20 104 -22 295 -22 191 0 224 2
295 22 271 75 440 249 501 517 16 73 19 157 24 915 6 862 7 865 47 944 67 130
245 203 435 177 168 -23 267 -99 314 -241 17 -51 18 -113 22 -767 l3 -713 205
0 205 0 -3 738 -4 737 -26 97 c-56 203 -166 347 -328 426 -140 69 -215 84
-435 88 -162 3 -204 1 -285 -17z m410 -9 c347 -43 552 -218 622 -530 20 -91
21 -125 25 -797 l4 -703 -185 0 -186 0 0 678 c0 712 -2 758 -45 842 -25 49
-103 128 -153 154 -81 42 -253 58 -364 35 -121 -26 -227 -111 -270 -216 l-23
-58 -6 -840 c-7 -905 -6 -896 -61 -1044 -65 -175 -215 -314 -403 -375 -73 -23
-237 -46 -335 -46 -98 0 -262 23 -335 46 -199 65 -346 210 -416 411 -22 63
-48 237 -49 320 0 28 -4 55 -10 58 -5 3 -44 15 -87 26 -262 69 -430 240 -504
514 -31 114 -31 336 0 450 94 348 347 538 716 538 378 0 632 -188 726 -538 31
-114 31 -336 0 -450 -60 -222 -176 -370 -364 -461 -40 -20 -79 -39 -87 -43
-20 -11 -21 -236 -1 -296 34 -103 112 -184 219 -227 49 -19 75 -22 192 -22
117 0 143 3 192 22 66 27 116 64 164 124 70 88 67 50 75 983 7 915 6 899 66
1045 55 136 168 260 288 319 157 76 382 107 595 81z" class="svg-elem-2 svgblur-2"></path>
  <path d="M2115 2114 c-106 -34 -191 -125 -236 -255 -31 -87 -39 -320 -15 -422
32 -138 104 -239 208 -294 48 -26 62 -28 158 -28 95 0 110 3 155 27 102 54
180 162 210 290 19 83 19 293 0 376 -32 135 -111 243 -215 290 -70 33 -190 40
-265 16z m238 -30 c93 -33 168 -125 209 -254 19 -63 23 -97 23 -210 0 -113 -4
-147 -23 -210 -57 -183 -167 -274 -332 -274 -179 0 -301 115 -344 326 -30 145
-14 329 38 443 77 167 254 241 429 179z" class="svg-elem-3 svgblur-3"></path>
</g>
</svg>

          <Box onClick={handleScrollToBuyNeon}>
            <Commision />
          </Box>
        </Box>
        <Box ref={buyNeonRef}>
          <BuyNeon />
        </Box>
      </Box>

    </>
  );
}

export default Home;

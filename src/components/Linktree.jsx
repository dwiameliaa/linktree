const Linktree = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-100 p-6 overflow-hidden">
      {/* Blob Right */}
      <svg
        viewBox="0 0 292.5 292.5"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[-50px] right-[-90px] w-[400px] h-[400px] transform translate-x-0 translate-y-0"
      >
        <path
          d="M146.25,227.71585613125353C173.4573002539365,229.2985837393555,200.83274880224204,267.72883283731665,222.481507148791,251.17366820986496C244.37062741730455,234.43469483344967,218.3904706417065,197.97306803098135,221.01426517242214,170.54238232889986C222.8070081216174,151.79999689882408,238.04174546845798,135.94583337966185,235.2847705348752,117.32084940364183C232.26385616727714,96.91279962267228,220.67044077736878,78.71631148121064,205.37271923113494,64.87455816117259C188.785266283126,49.86582426441768,168.2832813799555,40.625262764424114,146.25,36.76000725958147C120.49725478046219,32.24225348028352,91.29035123745203,26.130023541722032,69.85470545024324,41.100897772644785C48.35473665383467,56.11669585099644,48.037087498629774,86.77490461676699,39.25616516665044,111.48559568715429C30.155225885413763,137.0968572980173,10.272529151198174,161.87523601226417,17.64086272596816,188.03764181585456C25.059048594061114,214.37705588256446,50.053087399660924,234.59699657744125,76.20104916270625,242.66410948042514C99.58765080499236,249.87929350031558,121.81699337870512,226.29451723443054,146.25,227.71585613125353"
          fill="#dddcfc"
        />
      </svg>

      {/* Blob Left */}
      <svg
        viewBox="0 0 292.5 292.5"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-[-50px] w-[400px] h-[400px] transform translate-x-0 translate-y-0"
      >
        <path
          d="M146.25,254.33877934199697C172.20473761936753,259.08740424033516,202.2966008816729,268.277830931709,223.4477720231073,252.50361771326024C244.5929896783248,236.73384451188434,241.5747239561831,204.82210847964373,247.20112269198899,179.05100811945192C252.17779879272945,156.25589080290783,264.21485042245143,132.2646001197778,254.3107990849255,111.1389179866409C244.61122263295127,90.44938781689376,214.83443190680077,90.39358283791077,198.26184250914767,74.66184032001512C177.417574552034,54.875152277060764,173.88333644016288,16.459888155544835,146.25000000000003,8.56082190934103C118.56423056763973,0.6467675461665747,85.6989916924989,15.25962350139449,66.97115524896061,37.132031408828375C49.14726078006215,57.94871738844742,61.509342045176325,89.92087668127022,54.01625442445318,116.28143940517015C46.97423460620352,141.05515279516538,17.37768538442541,161.05082569035508,24.73046985576479,185.73408882083038C32.06206732140363,210.34622727211897,64.80433507823284,214.94477728740372,87.16751454367021,227.5700647985933C106.46780336192566,238.4661762283688,124.44826018436369,250.3499782978913,146.25,254.33877934199697"
          fill="#BCD4FB"
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-md border border-white/50">
        {/* Header */}
        <div className="mb-6 text-center">
          <img
            src="/daijin2.jpg"
            alt="User Avatar"
            className="rounded-full w-28 h-28 mx-auto border-transparent drop-shadow-xl"
          />
          <h1 className="text-2xl font-bold mt-4 text-slate-900">
            Dwi Lestari Amelia
          </h1>
          <p className="text-gray-700 font-normal">
            Just someone who loves coding and cats
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4 text-center">
          <a
            href="https://portfolio-website-dwi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-2.5 px-6 bg-blue-900 text-white border-2 border-blue-900 rounded-2xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden group hover:bg-transparent hover:text-blue-900"
          >
            <span className="relative z-10">Website</span>
          </a>
          <a
            href="https://github.com/dwiameliaa"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-2.5 px-6 bg-blue-900 text-white border-2 border-blue-900 rounded-2xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden group hover:bg-transparent hover:text-blue-900"
          >
            <span className="relative z-10">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/douiliame/profilecard/?igsh=eW84Mjd5aHFtaDZz"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-2.5 px-6 bg-blue-900 text-white border-2 border-blue-900 rounded-2xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden group hover:bg-transparent hover:text-blue-900"
          >
            <span className="relative z-10">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dwi-lestari-amelia"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full py-2.5 px-6 bg-blue-900 text-white border-2 border-blue-900 rounded-2xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden group hover:bg-transparent hover:text-blue-900"
          >
            <span className="relative z-10">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Linktree;

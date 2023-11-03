import ScrollButton from "./components/atoms/scroll-button/ScrollButton";
import Header from "./components/compounds/header/Header";
import CameraPlusIcon from "./assets/svg/camera-plus/CameraPlus";
import LockIcon from "./assets/svg/lock/Lock";
import MarkerPinIcon from "./assets/svg/marker-pin/MarkerPin";
import PhotoSection from "./components/compounds/photobooth-section";

function App() {
  return (
    <div className="w-screen my_body">
      <Header />
      <div className="flex flex-col items-center gap-4 my-[80px]">
        <p className="text-[24px] text-primary font-medium text-center">
          foboxy Fotobox
        </p>
        <h2 className="text-[36px] font-bold text-center">
          Lorem ipsum dolor sit amet
        </h2>
        {/* Grid */}
        <div className=" flex flex-row justify-between items-center flex-wrap gap-[46px] max-body body_padding mt-[60px]">
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <CameraPlusIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Photo Instant Print
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <LockIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                GDPR Complaint
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <MarkerPinIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Including Creative
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <CameraPlusIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Individual Print layout
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <LockIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Emergency Hotline
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <MarkerPinIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Easy to use for
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <CameraPlusIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Easy Construction
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <LockIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Unlimited prints flat rate
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 max-w-[300px]">
            <div className="p-6 rounded-full flex justify-center items-center bg-[#F7F7F7] mr-[4.5]">
              <MarkerPinIcon />
            </div>
            <div>
              <p className="font-[600] text-[18px] text-textBlack leading-[20px]">
                Online Gallery - USB
              </p>
              <p className="font-normal text-[16px] text-textGrey leading-[21px] mt-[6px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>

        <div id="scroll_button_placeholder" className="mt-[60px] w-full" />

        <div className=" flex w-full mt-[180px]">
          <PhotoSection />
        </div>
      </div>
      {/* scroll button */}
      <ScrollButton />
    </div>
  );
}

export default App;

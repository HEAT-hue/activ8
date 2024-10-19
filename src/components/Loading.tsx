import "../styles/loading.css"
import Activ8Logo from "../assets/Activ8LogoNTS.svg"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative items-center w-24 h-24 lg:w-64">
        <img
          src={Activ8Logo}
          alt="Loading"
          // layout="fill"
          // objectFit="contain"
          className="svg-water-fill mx-auto object-contain"
        />
      </div>
    </div>
  );
}

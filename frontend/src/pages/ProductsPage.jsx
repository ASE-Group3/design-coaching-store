import { NavBar } from "../components";
import VintageDress from "../assets/Products_Dress Vintage.svg";
import SummerWrapTop from "../assets/Products_WrapTop.svg";
import OscarTop from "../assets/Products_OscarTop.svg";
import BeautyCream from "../assets/Products_Design Beauty Creams.svg";
import SkinCareOil from "../assets/Products_Skin care oil.svg";
import FaceWash from "../assets/Products_Charcoal face wash.svg";
const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="grid gap-y-20  gap-x-10 grid-cols-3 m-20">
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-xl">
          <img className="m-3 object-fit h-72" src={VintageDress}></img>
          <div className="flex justify-center">
            <p className="m-2 text-xs font-bold">
              Long Flat Dress Close Lineup Vintage
            </p>
            <p className="font-extrabold">$15.00</p>
          </div>
        </div>
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-xl">
          <img className="m-3 object-fit h-72" src={SummerWrapTop}></img>
          <div className="flex justify-center">
            <p className="m-2 text-xs font-bold">Piece Summer Wrap Top Free</p>
            <p className="font-bold">$10.00</p>
          </div>
        </div>
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-xl">
          <img className="m-3 object-fit h-72" src={OscarTop}></img>
          <div className="flex justify-center">
            <p className="m-2 text-xs font-bold">
              Oaxacan Rainbow Top-Technicolor
            </p>
            <p className="font-bold">$20.00</p>
          </div>
        </div>
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-xl">
          <img className="m-3 object-fit h-72" src={BeautyCream}></img>
          <div className="flex justify-center">
            <p className="m-2 text-xs font-bold">Design Beauty Creams</p>
            <p className="font-bold">$12.00</p>
          </div>
        </div>
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-xl">
          <img className="m-3 object-fit h-72" src={SkinCareOil}></img>
          <div className="flex justify-center">
            <p className="m-2 text-xs font-bold">Design Skin Care oil</p>
            <p className="font-bold">$25.00</p>
          </div>
        </div>
        <div className="flex flex-col border-solid border-2 rounded-lg shadow-xl">
          <img className="m-3 object-fit h-72" src={FaceWash}></img>
          <div className="flex justify-center">
            <p className="m-2 text-xs font-bold">Charcoal Face Wash</p>
            <p className="font-bold">$14.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;

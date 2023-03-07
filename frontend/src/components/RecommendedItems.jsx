import DummyImage from "../assets/dummy-img.svg";
import DummyImage2 from "../assets/dummy-img2.svg";
import { ArrowRight } from "lucide-react";

const dummyData = [
  {
    id: 1,
    productName: "Full Makeup products including powder, lipstick and more",
    productImage: DummyImage,
    productPrice: "50.70",
  },
  {
    id: 2,
    productName: "N5 Chanel eau de parfum spray bottle",
    productImage: DummyImage2,
    productPrice: "110.70",
  },
  {
    id: 3,
    productName: "Full Makeup products including powder, lipstick and more",
    productImage: DummyImage,
    productPrice: "50.70",
  },
  {
    id: 4,
    productName: "N5 Chanel eau de parfum spray bottle",
    productImage: DummyImage2,
    productPrice: "110.70",
  },
  {
    id: 5,
    productName: "Full Makeup products including powder, lipstick and more",
    productImage: DummyImage,
    productPrice: "50.70",
  },
  {
    id: 6,
    productName: "N5 Chanel eau de parfum spray bottle",
    productImage: DummyImage2,
    productPrice: "110.70",
  },
  {
    id: 7,
    productName: "Full Makeup products including powder, lipstick and more",
    productImage: DummyImage,
    productPrice: "50.70",
  },
  {
    id: 8,
    productName: "N5 Chanel eau de parfum spray bottle",
    productImage: DummyImage2,
    productPrice: "110.70",
  },
  {
    id: 9,
    productName: "Full Makeup products including powder, lipstick and more",
    productImage: DummyImage,
    productPrice: "50.70",
  },
  {
    id: 10,
    productName: "N5 Chanel eau de parfum spray bottle",
    productImage: DummyImage2,
    productPrice: "110.70",
  },
];

const Products = ({ productName, productImage, productPrice }) => {
  return (
    <div className="flex flex-col items-start cursor-pointer bg-white rounded p-5">
      <img
        src={productImage}
        alt="product image"
        className="w-[200px] h-[200px]"
      />
      <p className="mt-5 font-bold">$ {productPrice}</p>
      <p className="mt-2 font-semibold max-w-sm text-slate-400">
        {productName}
      </p>
    </div>
  );
};

const RecommendedItems = () => {
  return (
    <div className="my-20 flex flex-col">
      <div className="px-10 mb-5 flex items-center justify-between">
        <p className=" text-orange-500 w-fit font-extrabold text-2xl">
          Recommended Items
        </p>

        <div className="border-2 border-orange-500 p-2 rounded-full">
          <ArrowRight className="w-5 h-5 text-orange-500" />
        </div>
      </div>

      <div className="grid grid-cols-5 px-10 gap-5">
        {dummyData.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default RecommendedItems;

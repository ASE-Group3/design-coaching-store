import DemoProduct from "../assets/demo-product.svg";
import { ArrowRight } from "lucide-react";
const dummyData = [
  {
    id: 1,
    productName: "Long Flat Dress Vintage",
    productImage: DemoProduct,
  },
  {
    id: 2,
    productName: "Long Flat Dress Vintage",
    productImage: DemoProduct,
  },
  {
    id: 3,
    productName: "Long Flat Dress Vintage",
    productImage: DemoProduct,
  },
  {
    id: 4,
    productName: "Long Flat Dress Vintage",
    productImage: DemoProduct,
  },
  {
    id: 5,
    productName: "Long Flat Dress Vintage",
    productImage: DemoProduct,
  },
  {
    id: 6,
    productName: "Long Flat Dress Vintage",
    productImage: DemoProduct,
  },
];

const Products = ({ productName, productImage }) => {
  return (
    <div className="mb-10 flex flex-col items-center cursor-pointer">
      <img src={productImage} alt="product image" />
      <p className="mt-2 font-semibold">{productName}</p>
    </div>
  );
};

const ProductsList = () => {
  return (
    <div className="mt-32 mb-10 flex flex-col items-center">
      <p className="mb-10 border-b-4 border-black w-fit font-bold text-2xl">
        Our Products
      </p>

      <div className="grid grid-cols-3 justify-between w-[100%]">
        {dummyData.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>

      <button className="flex font-bold items-center justify-center gap-x-4 bg-orange-500 rounded-full p-2 w-60 text-white">
        Explore more
        <ArrowRight color="white" size={20} />
      </button>
    </div>
  );
};
export default ProductsList;

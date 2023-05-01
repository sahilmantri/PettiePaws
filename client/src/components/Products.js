import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  console.log(products)
  return (
    <div className="py-10 bg-[#D9BCA9]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Find Your Friend
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        The PettiePaws is an online Pet adoption website.
        It wants to help you to find a furry friend. 
        In this the customers  can browse the web page and look at all the different kinds of pet available.customer can also contact the owner to get more details about it .
        It also contains the accessories and the food for the pets.  
        </p>
      </div>
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;

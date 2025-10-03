import Image from "next/image";
import products from "@/data/products.json";

export default function ProductsPage() {
  return (
    <div className="flex justify-center bg-red-700 p-5">
      <div className=" container flex">
        <div className="flex flex-wrap justify-center">
          {products.map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5   border-gray-300 p-2  
                    overflow-hidden  transform transition-transform duration-300 
                    hover:scale-105 cursor-pointer flex flex-col  "
            >
              <div className=" group bg-amber-600 p-2 rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  title={item.title}
                  className="rounded-lg object-cover"
                />
                <h3 className="mt-2 text-center font-semibold truncate xl:whitespace-normal xl:overflow-visible xl:text-clip  ">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

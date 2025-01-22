import { products } from "../Constants"
import PopularProductsCard from "../Components/PopularProductsCard"

export default function PopularProducts(){
    return (
        <section id="products">

            <div className="flex flex-col flex-1 max-container">

            <div className="flex flex-col gap-5 justify-start">

                <h2 className="font-palanquin max-lg:text-[32px] lg:text-4xl font-bold max-lg:justify-center flex gap-3">

                    Our <span className="text-coral-red">Popular</span> Products
                </h2>
            <div className="flex max-lg:justify-center items-center max-lg:p-6">
                <p className="font-montserrat text-slate-gray lg:max-w-lg mt-2 ">
                    Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
                </p>
            </div>
            </div>
                <div className="flex justify-between gap-6 max-lg:flex-wrap max-lg:justify-center  mt-16">
                    {products.map((item)=>(
                        <PopularProductsCard
                        
                        key={item.name}
                        imgURL={item.imgURL}
                        name={item.name}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
import { star } from "../assets/icons";

export default function PopularProductsCard ({imgURL,name,price})

{
    return(
        <div className="flex flex-col ">
            <img 
                src={imgURL} 
                alt="shoePic"
                className="cursor-pointer hover:border-coral-red hover:border rounded-[23px] popular-card "
            />
            <div className="flex justify-start mt-8 gap-2.5 font-montserrat">
                <img src={star} alt="star logo" />
                (4.5)
            </div>
            <h2 className="mt-2 text-2xl font-bold font-montserrat">
                {name}
            </h2>
            <h2 className="mt-2 text-2xl font-montserrat text-coral-red font-semibold">
                {price}
            </h2>
        </div>
    );
}
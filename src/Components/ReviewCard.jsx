import { star } from "../assets/icons";

export default function ReviewCard({image, customerName, rating, feedback}){
    return(
        <div className="flex flex-col items-center">
            <img src={image} className="w-[120px] h-[120px] rounded-full" />

            <p className="max-w-sm info-text text-center mt-6">
                {feedback}    
            </p>

            <div className="flex mt-4 gap-2.5">
                <img src={star} alt="" />
                <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
            </div>

            <h1 className="font-bold text-3xl font-palanquin mt-2 text-center">{customerName}</h1>
        </div> 
    );
}
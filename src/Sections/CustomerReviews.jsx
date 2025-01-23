import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../Constants";

export default function CustomerReviews(){
    return (
        <section className="flex flex-col justify-center items-center ">

            <h3 className="font-palanquin text-4xl font-bold">What Our<span className="text-coral-red"> Customers</span> Say</h3>

            <p className="info-text mt-4 text-center max-w-lg">
                Hear genuine stories from our satisfied customers about their exceptional experiences with us.
            </p>

            <div className="mt-24 gap-14 flex justify-evenly items-center flex-1 w-full max-lg:flex-col">
               {reviews.map((review)=>(
                    <ReviewCard
                       
                        image={review.imgURL}
                        feedback={review.feedback}
                        rating={review.rating}
                        customerName={review.customerName}
                    />
               ))}
            </div>

        </section>
    )
}
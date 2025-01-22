import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

export default function SuperQuality(){
    return (
        <section className=" flex max-container justify-between items-center max-lg:flex-col-reverse">

            <div className="w-full flex flex-col max-lg:justify-center max-lg:items-center">

                <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg flex-col max-lg:justify-center max-lg:items-center max-lg:mt-20 max-lg:mb-7">
                    We Provide   You <span className="text-coral-red max-lg:flex max-lg:justify-center mr-3 max-lg:items-center">Super Quality</span> 
                    <span className="max-lg:justify-center max-lg:items-center max-lg:flex">Shoes</span>
                </h2>

                <p className="mt-4 info-text lg:max-w-lg">
                Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance
                </p>

                <p className="mt-6 info-text lg:max-w-lg">
                Our dedication to detail and excellence ensures your satisfaction
                </p>

                <div className="mt-11">
                    <Button 
                        label={"View details"}
                        iconURL={arrowRight}
                    />
                </div>

            </div>

            <div className="w-full flex justify-center items-center">
                <img  src={shoe8} alt="supeShoe" height={522} width={570} className="object-contain"/>
            </div>

        </section>
    )
}
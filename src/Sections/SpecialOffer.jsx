import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

export default function SpecialOffer(){
    return (
        <section className="flex max-lg:flex-col-reverse max-container gap-10 justify-between items-center ">

            <div className="flex-1 max-lg:ml-24 max-lg:mt-11">
                <img src={offer} alt="offerLogo" width={773} height={687} className="object-contain w-full" />
            </div>

            <div className="flex flex-col flex-1">

                <h2 className="text-4xl font-palanquin font-bold"> 
                    <span className="text-coral-red">Special</span> Offer
                </h2>

                <p className="mt-4 info-text">
                    Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
                </p>

                <p className="mt-6 info-text">
                    Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                </p>

                <div className="mt-11 gap-4 flex flex-wrap">
                    <Button
                        label={"Shop Now"}
                        iconURL={arrowRight}
                    />
                    <Button
                        borderColor={"border-slate-gray"}
                        textColor={"text-slate-gray"}
                        label={"Learn More"}
                        backgroundColor={"white"}
                        iconURL={""}
                    />
                </div>
            </div>

        </section>
    )
}
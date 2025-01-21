import Button from "../Components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {bigShoe1} from "../assets/images/index.js";
export default function HeroSection(){
    return (

        <section
            id="home"
            className='flex max-lg:flex-col items-center justify-center w-full'>
            <div className='flex flex-col items-start justify-center pt-24'>
                <p className='font-montserrat text-coral-red text-xl '>
                    Our Summer Collections
                </p>
                <h1 className='text-8xl mt-10 font-bold font-palanquin max-sm:leading-[82px]'>
                   <span className='xl:whitespace-nowrap'>
                       The New Arrival
                   </span>
                    <br/>
                    <span className='text-coral-red pr-4 inline-block mt-3'>
                        Nike
                    </span>
                    Shoes
                </h1>
                <p className='text-slate-gray text-lg font-montserrat sm:max-w-sm mt-6 mb-14'>
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>

                <Button label="Shop Now"
                        iconURL={arrowRight}>
                </Button>

                <div>

                </div>
            </div>

            <div className='flex justify-start items-start mt-20 gap-10'>
                <img
                    src={bigShoe1}
                    alt='shoe colletion'
                    width={610}
                    height={502}
                    className='z-10'
                />
            </div>
        </section>
    )
}
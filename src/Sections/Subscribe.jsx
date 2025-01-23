import Button from "../Components/Button";

export default function Subscribe(){
    return (
        <section
        
        id="contact"
        className="flex justify-between items-center max-container max-lg:flex-col">

            <div>
                <h1 className="font-bold font-palanquin text-4xl lg:max-w-lg flex gap-3 justify-center items-center flex-wrap">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
            </div>

           <div className="flex lg:max-w-[40%] w-full p-2.5 sm:border sm:border-slate-gray rounded-full justify-between max-lg:mt-10 max-sm:flex-col max-sm:justify-center items-center">  

                <input placeholder="  subscribe@nike.com" type="text" class="input" className=" gap max-sm:mb-7 max-sm:border max-sm:border-slate-gray max-sm:rounded-full max-sm:w-full max-sm:h-[63px] "></input>

                <div className="max-sm:w-full">
                    <Button
                        fullWidth
                        label={"Sign Up"}
                    />
                </div>
            </div>

        </section>
    )
}
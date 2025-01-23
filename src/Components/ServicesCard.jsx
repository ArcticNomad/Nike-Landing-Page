export default function ServicesCard({imgURL, label, subtext}){
    return(
        <div className="px-10 py-16  flex flex-col  shadow-3xl rounded-2xl">
            
            <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red ">
                 <img src={imgURL} alt={label} width={24} height={24} />
            </div>

            <h3 className="font-palanquin text-3xl font-bold mt-5 max-xl:leading-6 text-nowrap">
                {label}
            </h3>

            <p className="mt-3 text-lg font-montserrat text-slate-gray lg:max-w-sm">
                {subtext}
            </p>

        </div>
    );
}
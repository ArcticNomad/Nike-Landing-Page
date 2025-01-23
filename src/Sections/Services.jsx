import { services } from "../Constants";
import ServicesCard from "../Components/ServicesCard"

export default function Services(){
    return (
        <section className=" flex max-lg:flex-col justify-center gap-9">
            {services.map((item)=>(
                <ServicesCard 
                key={item.label} {...item}
                />
            ))}
        </section>
    )
}
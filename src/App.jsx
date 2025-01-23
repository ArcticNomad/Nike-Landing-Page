import HeroSection from "./Sections/HeroSection.jsx"
import CustomerReviews from "./Sections/CustomerReviews.jsx";
import Footer from "./Sections/Footer.jsx";
import PopularProducts from "./Sections/PopularProducts.jsx";
import Services from "./Sections/Services.jsx";
import SpecialOffer from "./Sections/SpecialOffer.jsx";
import Subscribe from "./Sections/Subscribe.jsx";
import SuperQuality from "./Sections/SuperQuality.jsx";
import NavBar from "./Components/NavBar.jsx";


export default function App() {
    return (
        <main className="relative">
            <NavBar/>
            <section className='xl:padding-l wide:padding-r padding-b'>
                <HeroSection />
            </section>
            <section className='padding'>
                <PopularProducts/>
            </section>
            <section className='padding'>
                <SuperQuality/>
            </section>
            <section className='padding'>
                <Services/>
            </section>
            <section className='padding'>
                <SpecialOffer/>
            </section>
            <section className='padding bg-pale-blue'>
                <CustomerReviews/>
            </section>
            <section className='padding-x sm:py-32 py-16'>
                <Subscribe/>
            </section>
            <section className='padding-x pb-8 padding-t bg-black '>
                <Footer/>
            </section>
        </main>
    )
}
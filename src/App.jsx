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
        <main className="Relative">
            <NavBar/>
            <section className='padding-l wide:padding-r padding-b '>
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
            <section className='padding'>
                <CustomerReviews/>
            </section>
            <section className='padding'>
                <Subscribe/>
            </section>
            <section className='padding-x pb-20 padding-t bg-black '>
                <Footer/>
            </section>
        </main>
    )
}
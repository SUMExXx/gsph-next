import { events } from "@/data/website";
import Reveal from "../components/Reveal";
import ImageGallery from "../components/ImageGallery";
import RevealLTR from "../components/RevealLTR";
import EventsCarousel from "@/app/components/EventsCarousel";

const Events = () => {
    return (
        <div className="w-full flex flex-col items-center gap-20 py-10">
            <Reveal><h4 className="text-[#0075BB] text-[48px]">Our Events</h4></Reveal>
            {
                events.map((event, index) => (
                    <section key={index} id={event.id} className="flex flex-col items-center justify-center w-full gap-10 text-center">
                        <RevealLTR><h1 className="text-[36px] font-bold md:px-24 px-10">{`${event.name} : ${event.tagline}`}</h1></RevealLTR>
                        <Reveal>
                            <div className="md:px-24 px-10"><span className='font-normal'>{event.desc}</span></div>
                        </Reveal>
                        <div className="hidden md:flex justify-center items-center md:px-24"><ImageGallery imagesUrl={event.images}/></div>
                        <div className="md:hidden flex justify-center items-center"><EventsCarousel images={event.images}/></div>
                    </section>
                ))
            }

            <RevealLTR><h4 className="text-[24px] font-bold md:px-24 px-10 justify-center content-center align-middle text-center">More Events Coming Soon Stay Tuned 📸</h4></RevealLTR>
        </div>
    )
}

export default Events;
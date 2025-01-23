import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";

export default function Footer(){
    return (
        <footer className=" max-container">
            
        <div className="flex justify-between gap-20 max-lg:flex-col">    
            <div className="flex flex-col items-start ">
                <img src={footerLogo} alt="logo" width={150} height={46}/>
                <p className=" text-white-400 font-montserrat mt-6 max-w-[520px] leading-7 text-base">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <div className="flex mt-6 gap-4">
                    {socialMedia.map((item)=>(
                        <div className="flex justify-center items-center bg-white rounded-full w-12 h-12">
                        <img src={item.src} alt={item.alt} width={24} height={24}  />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full justify-between gap-20 flex-wrap">
                {footerLinks.map((link)=>(
                    <div className="flex flex-col">

                        <h4 className=" font-montserrat text-2xl leading-normal font-medium mb-6 text-white">{link.title}</h4>

                        <ul>
                        {link.links.map((item)=>(
                            <li className="text-white-400 font-montserrat mt-3 max-w-[520px] leading-7 text-base hover:text-slate-gray cursor-pointer">
                                {item.name}
                                <a href={item.link}></a>
                            </li>
                        ))}

                        </ul>

                    </div>
                    
                ))}
            </div>
        </div>
            <div className="mt-24 flex gap-2 justify-between items-center ">
                <div className="flex gap-2">
                    <img src={copyrightSign} alt="logo" height={20} width={20} className="rounded-full"/>
                    <p className="font-montserrat text-white-400 cursor-pointer">Copyright.All rights reserved.</p>
                </div>
                <p className="font-montserrat text-white-400 cursor-pointer">Terms and Conditions</p>
            </div>
        </footer>
    )
}
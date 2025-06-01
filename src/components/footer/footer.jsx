import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-[#f0f8ff] text-black">
            <div className="mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-gray-500">
                <div className="flex-shrink-0">
                    <img src={logo} alt="SkyBook" className="w-32 h-auto" />
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2"> 
                        Follow Us On
                    </h3>
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"> <Facebook className="w-5 h-5 text-black" /> <span>Facebook</span></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"> <Instagram className="w-5 h-5 text-black" /> <span>Instagram</span></a>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-bold mb-2">
                        About
                    </h3>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/contactus" className="hover:underline"> Contact Us</Link>  
                            </li>
                        </ul>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/faq" className="hover:underline"> FAQ </Link>
                            </li>
                        </ul>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/termsprivacy" className="hover:underline"> Terms & Privacy</Link>
                            </li>
                        </ul>
                </div>
            </div>

            <div className="bg-white text-center text-sm py-4">
            ©Copyright 2023 SkyBook, inc All Right Reserved
            </div>
        </footer>    
    );
};

export default Footer;

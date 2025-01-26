import { APP_NAME } from "@/lib/constants";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer bordere-t bg-slate-500 mt-auto">
           <div className="p-5 flex-center text-white text-bold text-2xl">
            {currentYear} @{APP_NAME} All Rights Reserved
           </div>

        </footer>
    );
}

export default Footer;
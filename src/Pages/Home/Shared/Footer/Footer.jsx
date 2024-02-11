import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className="footer footer-center p-10 bg-gray-300 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/about' className="link link-hover">About us</Link>


            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/rasel6518"> <AiFillFacebook className="text-3xl rounded hover:scale-110" /></a>
                    <a href="https://github.com/rasel6518"> <AiFillGithub className="text-3xl rounded hover:scale-110" /></a>
                    <a href="https://www.linkedin.com/in/rasel6518"> <AiFillLinkedin className="text-3xl rounded hover:scale-110" /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by MD Rasel khan</p>
            </aside>
        </footer>

    );
};

export default Footer;
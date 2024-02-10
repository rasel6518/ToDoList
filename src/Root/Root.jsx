
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Home/Shared/NavBar/NavBar';
import Footer from '../Pages/Home/Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
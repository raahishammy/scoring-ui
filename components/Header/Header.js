import Link from 'next/link';
import './header.scss';
import Navbar from '../Navbar';

const Header = () => (
    <header>
        <div className="ui">
            <Navbar />
        </div>    
    </header>
);

export default Header;
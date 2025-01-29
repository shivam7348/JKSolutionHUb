import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu, secondParentMenu, activeMenu } = props;

    return (
        <React.Fragment>
            < li>
                <Link to="/">Home</Link>
                <ul className="sub-menu">
                 
                </ul>
            </li>
            <li className={parentMenu === 'about' ? 'current-menu-item' : ''}>
                <Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>About</Link>
            </li>
           
            <li className={parentMenu === 'Services' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Services</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/services" className={activeMenu === "/services" ? "active-menu" : ""}>Services</Link>
                    </li>
                    <li>
                        <Link to="/services-carousel" className={activeMenu === "/services-carousel" ? "active-menu" : ""}>Services Carousel</Link>
                    </li>
                    <li>
                        <Link to="/express-freight-solutions" className={activeMenu === "/express-freight-solutions" ? "active-menu" : ""}>Express Freight Solutions</Link>
                    </li>
                    <li>
                        <Link to="/quick-move-logistics" className={activeMenu === "/quick-move-logistics" ? "active-menu" : ""}>Quick Move Logistics</Link>
                    </li>
                    <li>
                        <Link to="/speedy-dispatch" className={activeMenu === "/speedy-dispatch" ? "active-menu" : ""}>Speedy Dispatch</Link>
                    </li>
                    <li>
                        <Link to="/swift-supply-chain" className={activeMenu === "/swift-supply-chain" ? "active-menu" : ""}>Swift Supply Chain</Link>
                    </li>
                    <li>
                        <Link to="/on-point-distribution" className={activeMenu === "/on-point-distribution" ? "active-menu" : ""}>On Point Distribution</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'Project' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Projects</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/project" className={activeMenu === "/project" ? "active-menu" : ""}>Project</Link>
                    </li>
                    <li>
                        <Link to="/project-details" className={activeMenu === "/project-details" ? "active-menu" : ""}>Project Details</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'blog' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/blog-details" className={activeMenu === "/blog-details" ? "active-menu" : ""}>Blog details</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'contact' ? 'current-menu-item' : ''}>
                <Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>Contact</Link>
            </li>
            
        </React.Fragment>
    );
}

export default MenuItems;
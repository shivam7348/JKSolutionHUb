import React from 'react';
// Import the ServiceCard component
import ServiceItem from '../../components/Service/ServiceItem';

const ServicesOne = ( ) => {
    const services = [
        { iconClass: 'icon-postbox', title: 'Web Development & Design', link: '/express-freight-solutions' },
        { iconClass: 'icon-customer-service', title: 'Digital Marketing', link: '/quick-move-logistics' },
        { iconClass: 'icon-container', title: 'E-Commerce Solutions', link: '/speedy-dispatch' },
        { iconClass: 'icon-container', title: 'Mobile App Development', link: '/speedy-dispatch' },
        { iconClass: 'icon-container', title: 'Custom Software Solutions', link: '/speedy-dispatch' },
        
        
    ];
    
    return (
        <>
            {/*Services One Start*/}
            <section className="services-one">
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">LATEST SERVICE</span>
                    </div>
                    <h2 className="section-title__title">
                    AI-driven solutions, cloud-based platforms, 
                    <br /> custom software development, cybersecurity enhancements
                    </h2>
                </div>
                    <div className="row">
                        {services.map((service, index) => (
                            <div key={index} className="col-xl-4 col-lg-4">
                                <ServiceItem
                                    iconClass={service.iconClass}
                                    title={service.title}
                                    link={service.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Services One End*/} 
        </>
    );
}

export default ServicesOne;

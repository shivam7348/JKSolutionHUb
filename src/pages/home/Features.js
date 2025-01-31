import React from 'react';
import CounterOne from '../../components/About/CounterOne';
import videoImg from '../../assets/images/resources/counter-one-img-1.jpg';
const counters = [
  { iconClass: 'icon-schedule', end: 100, suffix: '+', text: 'Our Happy Customers' },
  { iconClass: 'icon-schedule', end: 2, suffix: 'k', plus: true, text: 'Our Team Members' },
  { iconClass: 'icon-schedule', end: 3, suffix: 'k', plus: true, text: 'Our Client Reviews' }
];

const Features = ( ) => {
    return (
        
      <>
        {/*Message One Start */}
        <CounterOne
            imageSrc={videoImg}
            videoId="jNQXAC9IVRw" // YouTube video ID
            videoCaption="Watch our video"
            tagline="Our Features"
            title="JK Digital SolutionsHub: Your Partner in Digital Innovation and Growth"
            description="At JK Digital SolutionsHub, we blend technical expertise with creative thinking to deliver digital solutions that are not only functional but also visually stunning. Our team of developers, designers, and strategists work together to create unique, user-centric experiences that leave a lasting impression.."
            counters={counters}
        />
        {/*Message One End */}
      </>
      


    );
}

export default Features;
import React from "react";
import ServicesDetails from "../../components/Service/ServicesDetails";
import SabkibImg from "../../assets/images/services/services-details-client-img-1.jpg";
import BgImg from "../../assets/images/services/services-details-get-touch-bg-img.jpg";
import detailsImg from "../../assets/images/services/services-details-img-1.jpg";

const SolutionsMain = () => {
  const client = {
    image: SabkibImg,
    name: "RahAhmadullah",
    title: "Manager",
    text: "Transforming Businesses with Cutting-Edge Digital Solutions",
    phone: "7236941347",
    socials: [
      { icon: "icon-instagram", link: "/blog-details" },
      { icon: "icon-facebook-f", link: "/blog-details" },
      { icon: "icon-Vector", link: "/blog-details" },
      { icon: "icon-linkedin-in", link: "/blog-details" },
    ],
  };

  const services = [
    {
      name: "Web Development & Design",
      link: "/express-freight-solutions",
      active: true,
    },
    {
      name: "Digital Marketing ",
      link: "/quick-move-logistics",
      active: false,
    },
    { name: "Mobile App Development", link: "/speedy-dispatch", active: false },
    { name: "Custom Software Solutions", link: "/swift-supply-chain", active: false },
    {
      name: "SEO",
      link: "/on-point-distribution",
      active: false,
    },
  ];

  const getTouch = {
    background: BgImg,
    title: "GET TOUCH",
    subTitle: "For fast service",
    icon: "icon-call",
    phone: "+888123456765",
  };

  const details = {
    title: "Cultivate Success with Agriculture",
    text1:
      "Logistics service involves the planning, implementation, and control of the efficient and effective transportation, storage, and distribution of goods and materials...",
    image1: detailsImg,
    serviceBoxes: [
      {
        icon: "icon-airplane",
        title: "Rapid Delivery Services",
        link: "#",
        text: "Construction is an essential industry that involves building and designing...",
      },
      {
        icon: "icon-lift-truck",
        title: "Quick Move Logistics",
        link: "#",
        text: "Construction is an essential industry that involves building and designing...",
      },
    ],
    text2:
      "Logistics service involves the planning, implementation, and control of the efficient and effective transportation, storage, and distribution of goods and materials...",
    prevLink: "#",
    prevText: "Road Flight",
    nextLink: "#",
    nextText: "Air Flight",
  };

  const faqData = [
    {
      question: "What services does JK Digital SolutionsHub offer?",
      answer:
        "We offer a wide range of digital solutions including: Web Design & Development",
    },
    {
      question: "How do I set up a Swift Warehousing Solutions?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    },
    {
      question: "How do I set up an Efficient Freight Solutions?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
    },
  ];

  return (
    <React.Fragment>
      <ServicesDetails
        client={client}
        services={services}
        getTouch={getTouch}
        details={details}
        faqData={faqData}
      />
    </React.Fragment>
  );
};

export default SolutionsMain;

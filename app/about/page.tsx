"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function AboutUsPage() {
  const [activeServiceTab, setActiveServiceTab] = useState("For Landlords");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialScrollRef = useRef<HTMLDivElement | null>(null);

  // Mouse drag scrolling states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const services = {
    "For Landlords": [
      "Tenant placement, vetting, and inventory",
      "Rent collection and maintenance coordination",
      "Legal compliance and landlord support",
    ],
    "For Tenants": [
      "Property search and viewings",
      "Application support and referencing",
      "Tenant rights and maintenance requests",
    ],
    "For Investors": [
      "Investment opportunity sourcing",
      "Portfolio management and optimization",
      "Market analysis and growth strategies",
    ],
    "For Buyers & Sellers": [
      "Property valuation and market analysis",
      "Marketing and sales support",
      "Transaction coordination and completion",
    ],
  };

  const serviceImages: Record<string, string> = {
    "For Landlords": "/images/services_-_For_Landlords.png",
    "For Tenants": "/images/services_-_For_Tenants.png",
    "For Investors": "/images/services_-_For_Investors.png",
    "For Buyers & Sellers": "/images/services_-_For_Buyers__Sellers.png",
  };

  const values = [
    {
      title: "Integrity",
      description: "Ethical conduct and honest guidance.",
      active: true,
    },
    {
      title: "Approachability",
      description: "Open, transparent, and practical communication.",
      active: false,
    },
    {
      title: "Collaboration",
      description: "Working together for mutual benefit.",
      active: false,
    },
    {
      title: "Guardianship",
      description: "Responsible decisions for future generations.",
      active: false,
    },
    {
      title: "Enterprise",
      description: "Balancing profitability with community sensitivity.",
      active: false,
    },
  ];

  const team = [
    {
      name: "Marcus Mango",
      role: "CEO",
      image: "/images/our_team_-_Card_1.png",
    },
    {
      name: "Jakob George",
      role: "Marketing Manager",
      image: "/images/our_team_-_Card_2.png",
    },
    {
      name: "Nolan Kenter",
      role: "Marketing Manager",
      image: "/images/our_team_-_Card_3.png",
    },
    {
      name: "Roger Stanton",
      role: "Marketing Manager",
      image: "/images/our_team_-_Card_4.png",
    },
  ];

  const testimonials = [
    {
      title: "Exceeded All Expectations!",
      quote:
        "Pevona handled the sale of my flat with remarkable efficiency. Their guidance, communication, and market knowledge made the entire process stress-free.",
      author: "Olivia M",
    },
    {
      title: "Truly Professional From Day One",
      quote:
        "The team kept me updated at every step. My property was sold above the asking price within two weeks!",
      author: "Daniel R.",
    },
    {
      title: "Smooth, Hassle-Free Selling Experience",
      quote:
        "I felt supported throughout. Pevona's advice on pricing and staging helped my home stand out in a competitive market.",
      author: "Harriet S.",
    },
    {
      title: "Honest, Transparent, Reliable",
      quote:
        "As a first-time buyer, I appreciated the clear communication and patience. The team explained every step and never rushed me.",
      author: "James T.",
    },
  ];

  // Update active testimonial based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (testimonialScrollRef.current) {
        const container = testimonialScrollRef.current;
        const flex = container.firstElementChild as HTMLElement | null;
        const firstCard = flex?.firstElementChild as HTMLElement | null;
        if (!firstCard || !flex) return;
        const gap = parseFloat(getComputedStyle(flex).gap) || 0;
        const cardWidth = firstCard.offsetWidth + gap;

        // sectionWidth = width of one set of testimonials (middle copy)
        const sectionWidth = cardWidth * testimonials.length;
        const currentScrollLeft = container.scrollLeft;

        // Calculate index relative to middle section start and normalize
        const offsetFromMiddle = currentScrollLeft - sectionWidth;
        const rawIndex = Math.round(offsetFromMiddle / cardWidth);
        const normalized =
          ((rawIndex % testimonials.length) + testimonials.length) % testimonials.length;
        setActiveTestimonial(normalized);
      }
    };

    const container = testimonialScrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Infinite scroll effect
  useEffect(() => {
    const container = testimonialScrollRef.current;
    if (!container) return;

    const handleInfiniteScroll = () => {
      const flex = container.firstElementChild as HTMLElement | null;
      const firstCard = flex?.firstElementChild as HTMLElement | null;
      if (!firstCard || !flex) return;
      const gap = parseFloat(getComputedStyle(flex).gap) || 0;
      const cardWidth = firstCard.offsetWidth + gap;

      const sectionWidth = cardWidth * testimonials.length; // width of one copy
      const currentScrollLeft = container.scrollLeft;

      // If we've scrolled past the second copy, wrap back by subtracting one section
      if (currentScrollLeft >= sectionWidth * 2) {
        container.scrollLeft = currentScrollLeft - sectionWidth;
      }
      // If we've scrolled before the first copy, wrap forward
      else if (currentScrollLeft < sectionWidth) {
        container.scrollLeft = currentScrollLeft + sectionWidth;
      }
    };

    container.addEventListener("scroll", handleInfiniteScroll);

    // Initialize scroll position to middle section
    setTimeout(() => {
      const flex = container.firstElementChild as HTMLElement | null;
      const firstCard = flex?.firstElementChild as HTMLElement | null;
      if (!firstCard || !flex) return;
      const gap = parseFloat(getComputedStyle(flex).gap) || 0;
      const cardWidth = firstCard.offsetWidth + gap;
      const sectionWidth = cardWidth * testimonials.length;
      container.scrollLeft = sectionWidth;
    }, 100);

    return () => container.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!testimonialScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - testimonialScrollRef.current.offsetLeft);
    setScrollLeft(testimonialScrollRef.current.scrollLeft);
    testimonialScrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (testimonialScrollRef.current) {
      testimonialScrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (testimonialScrollRef.current) {
      testimonialScrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !testimonialScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - testimonialScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    testimonialScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[760px] overflow-hidden rounded-b-[36px]">
        <Image
          src="/images/Banner_image.png"
          alt="About us hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/50 to-transparent" />

        <div className="relative h-full max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] flex flex-col justify-center">
          <div className="max-w-[600px] space-y-6 text-white">
            <h1 className="font-crimson text-[28px] sm:text-[32px] md:text-[36px] leading-tight tracking-[-1.1px]">
              Built on Trust.
              <br />
              Driven by Expertise.
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[28px] text-white/90">
              We believe in the personal touch welcoming clients with familiar voices and friendly
              faces. Our limited portfolio ensures dedicated service and long-term relationships. We
              are committed to sustainability, ethical leadership, and environmental responsibility,
              actively supporting animal welfare and reducing waste.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-8 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] transition-all hover:bg-[#0073B5] hover:text-white"
            >
              Speak To Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-[1800px] mx-auto mt-[150px] flex flex-col lg:flex-row items-center justify-center gap-[50px]">
        {/* Left Image */}
        <div className="relative w-full lg:flex-1 h-[300px] lg:h-[400px] rounded-r-[36px] overflow-hidden">
          <Image
            src="/images/2nd_sec_who_we_re_left_img.png"
            alt="Who we are left"
            fill
            className="object-cover"
          />
        </div>

        {/* Center Text */}
        <div className="w-full lg:flex-1 text-center space-y-6 px-6">
          <h2 className="font-crimson text-[48px] sm:text-[56px] leading-tight tracking-[-1.68px] text-[#002f57]">
            Who We Are
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[28px] text-[#333] opacity-80">
            Pevona Ltd is a proudly independent, family-owned estate agency based in London, founded
            in 2009. With over two decades of industry experience and deep roots in the construction
            sector, we deliver personalised property solutions to both private and public sector
            clients. Our multilingual and multicultural team provides expert guidance across
            lettings, property management, and investment services. At Pevona, clients are treated as
            partners in their property journey, fostering long-term relationships built on trust and
            results.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:flex-1 h-[300px] lg:h-[400px] rounded-l-[36px] overflow-hidden">
          <Image
            src="/images/prop_card_image-1.png"
            alt="Who we are right"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Mission & Our Vision */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[48px] sm:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          Our Mission &amp; Our Vision
        </h2>

        <div className="w-full space-y-[26px]">
          {/* Mission */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
            <div className="flex-1 relative w-full h-[300px] lg:h-[350px] rounded-[16px] overflow-hidden">
              <Image src="/images/3rd_Mission.png" alt="Mission" fill className="object-cover" />
            </div>
            <div className="flex-1 bg-white rounded-[16px] px-[30px] py-[26px] h-[300px] lg:h-[350px] flex flex-col items-center justify-center text-center border border-[rgba(0,0,0,0.06)] shadow-sm">
              <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] mb-2">
                Mission
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                We support every stage of the property journey, driving sustainable growth while
                enhancing communities through responsible, ethical, and strategic business practices.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
            <div className="flex-1 bg-white rounded-[16px] px-[30px] py-[26px] h-[300px] lg:h-[350px] flex flex-col items-center justify-center text-center border border-[rgba(0,0,0,0.06)] shadow-sm order-2 lg:order-1">
              <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] mb-2">
                Vision
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                To be recognised as a thriving, well-managed business known for commercial success,
                community support, and environmental stewardship.
              </p>
            </div>
            <div className="flex-1 relative w-full h-[300px] lg:h-[350px] rounded-[16px] overflow-hidden order-1 lg:order-2">
              <Image src="/images/3rd_Vision.png" alt="Vision" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-[#002f57] mt-[150px] py-[60px] px-6 lg:px-[47px]">
        <div className="max-w-[1506px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-[78px] items-center">
            <div className="flex-1 max-w-[672px] space-y-[36px]">
              <div className="space-y-4">
                <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-white">
                  Our Services
                </h2>
                <p className="font-manrope text-[22px] leading-[32px] text-white opacity-80">
                  We offer tailored services grouped by client journey
                </p>
              </div>

              <div className="space-y-[26px]">
                <div className="flex gap-[10px] flex-wrap">
                  {Object.keys(services).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveServiceTab(tab)}
                      className={`px-4 py-[10px] rounded-[10px] border border-white font-crimson text-[22px] leading-[32px] transition-colors ${
                        activeServiceTab === tab
                          ? "bg-[#0073b5] text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="space-y-[10px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white">
                    {activeServiceTab}
                  </h3>
                  <ul className="space-y-[10px]">
                    {services[activeServiceTab as keyof typeof services].map((service) => (
                      <li key={service} className="flex items-center gap-[10px]">
                        <div className="w-[10px] h-[10px] rounded-full bg-white flex-shrink-0" />
                        <p className="font-manrope text-[18px] leading-[28px] text-white opacity-80">
                          {service}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full lg:w-[630px] h-[540px] rounded-[16px] overflow-hidden">
              <Image
                src={serviceImages[activeServiceTab] || "/images/services_-_For_Landlords.png"}
                alt={activeServiceTab}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 relative w-full lg:w-[610px] h-[750px] rounded-[16px] overflow-hidden">
          <Image
            src="/images/Our_Values_-_Integrity.png"
            alt="Our Values left"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-0">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] mb-[36px]">
            Our Values
          </h2>
          <div className="space-y-0">
            {values.map((value) => (
              <div
                key={value.title}
                className={`border-b border-[rgba(0,0,0,0.12)] py-[26px] ${
                  value.active ? "" : "opacity-40"
                }`}
              >
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] mb-2">
                  {value.title}
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-4 max-w-[942px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Our Team
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Our team includes experienced property managers, compliance specialists, and investment
            advisors who bring insight, structure, and reliability to every project. We work
            collaboratively to ensure every client receives exceptional service and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px] w-full">
          {team.map((member) => (
            <div key={member.name} className="relative group overflow-hidden rounded-[16px] h-[450px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-[12px] px-6 py-4 shadow-lg min-w-[80%] max-w-[90%]">
                <h6 className="font-crimson font-bold text-[24px] leading-tight text-[#002f57]">
                  {member.name}
                </h6>
                <p className="font-manrope text-[15px] leading-normal text-[#333] opacity-80 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognized by Leading Authorities */}
      <section className="max-w-[1336px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[40px] 1300:gap-[150px] items-center">
        <div className="flex-1 max-w-[507px] space-y-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Recognized by Leading Authorities
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Accredited by respected real estate bodies, we uphold strict guidelines to deliver
            reliable, transparent, and ethically driven property solutions
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[716px]">
          {[
            "/images/Certifications-1.svg",
            "/images/Certifications-2.svg",
            "/images/Certifications-3.svg",
            "/images/Certifications-4.svg",
          ].map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] h-[200px] flex items-center justify-center p-8"
            >
              <Image
                src={logo}
                alt={`Certification ${index + 1}`}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* A Network of Reputed Clients */}
      <section className="bg-[#002f57] mt-[150px] py-[60px] px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
        <div className="max-w-[1296px] mx-auto flex flex-col gap-[36px] items-center">
          <div className="text-center space-y-4 max-w-[942px] text-white">
            <h2 className="font-crimson text-[48px] sm:text-[56px] leading-[56px] tracking-[-1.68px]">
              A Network of Reputed Clients
            </h2>
            <p className="font-manrope text-[18px] leading-[28px]">
              Our expanding client list reflects the confidence major brands place in our
              professionalism, expertise, and commitment to quality service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              "/images/About us/our team - Card 1.png",
              "/images/About us/our team - Card 2.png",
              "/images/About us/our team - Card 3.png",
              "/images/About us/our team - Card 4.png",
              "/images/About us/Our Values - Integrity.png",
              "/images/About us/Our Values - Approachability.png",
              "/images/About us/Our Values - Collaboration.png",
              "/images/About us/Our Values - Enterprise.png",
            ].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] h-[150px] flex items-center justify-center p-6"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={200}
                  height={80}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pevona? */}
      <section className="max-w-[1337px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] mb-[120px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          Why Choose Pevona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {[
            {
              title: "Proven Expertise",
              description:
                "Decades of combined experience across lettings, management, and UK property investments.",
              icon: "/images/proven expertise 1.svg",
            },
            {
              title: "End-to-End Solutions",
              description: "From tenant placement to portfolio growth - we manage it all seamlessly.",
              image: "/images/8_sec_End-to-End_Solutions_image.png",
            },
            {
              title: "Streamlined Management Process",
              description:
                "Digital tools that simplify communication, reporting, and performance tracking.",
              icon: "/images/workflow_18119733 1.svg",
            },
            {
              title: "Transparent Process",
              description: "Every step is clear, compliant, and designed to build lasting trust.",
              image: "/images/Transparent Process.png",
            },
            {
              title: "Compliance First",
              description:
                "We operate with full adherence to UK housing, licensing, & data protection standards.",
              icon: "/images/complainence 1.svg",
            },
            {
              title: "Client-Focused Approach",
              description:
                "Tailored strategies that protect your property and maximise long-term returns.",
              image: "/images/8_sec_Client-Focused_Approach_image.png",
            },
            {
              title: "Trusted Partner Network",
              description:
                "Building strong alliances with trusted partners to ensure seamless transactions, transparent dealings, and lasting value in every real estate project.",
              icon: "/images/Trusted Partner Network.svg",
            },
            {
              title: "Best Properties on the Market",
              description:
                "Access to premium listings & verified opportunities through Zoopla integration.",
              image: "/images/8_sec_Best_Properties_on_the_Market_image.png",
            },
            {
              title: "Time & Stress Saving",
              description:
                "Simplifying your real estate journey with efficient processes, expert guidance, and seamless coordination - saving you time, effort, and stress.",
              icon: "/images/Time & Stress Saving.svg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-8 flex flex-col gap-4 h-[345px]"
            >
              {item.icon && (
                <div className="w-[36px] h-[36px] relative">
                  <Image src={item.icon} alt={item.title} fill className="object-contain" />
                </div>
              )}
              {item.image && (
                <div className="relative w-full h-[185px] rounded-[16px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}
              <div className="space-y-2">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                  {item.title}
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[150px] flex flex-col gap-[50px] items-center w-full">
        <div className="text-center space-y-4 max-w-[942px]">
          <h2 className="font-crimson text-[48px] sm:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Experiences That Inspire Confidence
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Our clients share their positive experiences, reflecting our commitment to dependable
            service and exceptional support throughout every property transaction.
          </p>
        </div>

        <div className="w-full relative">
          <div
            ref={testimonialScrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="w-full overflow-x-scroll overflow-y-hidden pb-8 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
            }}
          >
            <div className="flex gap-6 lg:gap-8">
              {/* Duplicate testimonials 3 times for infinite scroll */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-[280px] sm:min-w-[320px] lg:min-w-[calc((100%-96px)/3.5)] flex flex-col justify-between flex-shrink-0 bg-white border border-[rgba(0,0,0,0.08)] rounded-[16px] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    maxWidth: "400px",
                  }}
                >
                  <div className="space-y-4">
                    <h3 className="font-crimson font-bold text-[20px] sm:text-[22px] leading-[28px] text-[#002f57]">
                      {testimonial.title}
                    </h3>
                    <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333]">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <p className="font-crimson font-semibold text-[18px] sm:text-[20px] leading-[26px] text-[#002f57] mt-6">
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom scrollbar hide styles */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-3 justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTestimonial(index);
                if (testimonialScrollRef.current) {
                  const container = testimonialScrollRef.current;
                  const flex = container.firstElementChild as HTMLElement | null;
                  const firstCard = flex?.firstElementChild as HTMLElement | null;
                  if (!firstCard || !flex) return;
                  const gap = parseFloat(getComputedStyle(flex).gap) || 0;
                  const cardWidth = firstCard.offsetWidth + gap;
                  // Scroll to middle section (second set of testimonials) + index offset
                  const sectionWidth = cardWidth * testimonials.length;
                  const scrollPosition = sectionWidth + index * cardWidth;

                  container.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? "bg-[#002f57] scale-110"
                  : "bg-[#002f57]/30 hover:bg-[#002f57]/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ESG Section */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px] relative h-[450px] rounded-[26px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ESG_section_Bg_img.png"
            alt="ESG Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[618px] pt-[105px] pb-[105px] space-y-4 text-white">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px]">
            Environmental &amp;
            <br />
            Social Governance (ESG)
          </h2>
          <p className="font-manrope text-[18px] leading-[28px]">
            Pevona Ltd integrates ESG principles into its operations. We promote sustainable
            practices, ethical leadership, and community engagement. Our directors advocate vegan
            values and support animal charities, aligning our business with future-focused
            environmental responsibility.
          </p>
        </div>
      </section>
    </div>
  );
}



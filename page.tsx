
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FeaturedProperties from './components/sections/FeaturedProperties';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFA]">

      {/* Header Section */}
      <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center px-4">
        <div className="bg-white border border-[rgba(0,0,0,0.12)] flex items-center justify-between px-6 lg:px-[60px] py-[16px] rounded-[32px] lg:rounded-[100px] max-w-[1560px] w-full pointer-events-auto relative mt-4">
          <div className="h-[40px] lg:h-[60px] w-[110px] lg:w-[145px] relative">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/Header-logo.svg"
                alt="Pevona Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-[36px]">
            <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">About Us</Link>
            <div className="flex items-center gap-[2px]">
              <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">Buy</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">Sell</Link>
            <div className="flex items-center gap-[2px]">
              <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">Rent</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <div className="flex items-center gap-[2px]">
              <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">Property Management</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <div className="flex items-center gap-[2px]">
              <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">Investments</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <Link href="#" className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57]">Contact Us</Link>
          </nav>

          <button className="hidden lg:block bg-[#002f57] px-[10px] py-[10px] rounded-[100px] w-[225px]">
            <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">Book a Free Valuation</span>
          </button>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-[#002f57] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-[#002f57] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-[#002f57] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[10000] lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-8 gap-8 overflow-y-auto">
          {['About Us', 'Buy', 'Sell', 'Rent', 'Property Management', 'Investments', 'Contact Us'].map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="font-manrope font-medium text-[24px] text-[#002f57] border-b border-gray-100 pb-2"
            >
              {item}
            </Link>
          ))}
          <button className="bg-[#002f57] mt-4 px-[10px] py-[18px] rounded-[12px] w-full">
            <span className="font-manrope font-semibold text-[18px] text-white">Book a Free Valuation</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[700px] lg:h-[900px] overflow-hidden rounded-b-[36px]">
        <div className="absolute inset-0">
          <Image
            src="http://localhost:3845/assets/383fd913059b8fb108d652e2bd3bf80d19e18a3e.png"
            alt="Hero background"
            fill
            className="object-cover rounded-b-[36px]"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-[0.69] rounded-b-[36px]"></div>
        </div>






        <div className="relative z-10 flex flex-col h-full px-6 lg:px-[20px] py-[37px] justify-end">
          <div className="flex-grow flex items-end pb-12 lg:pb-20">
            <div className="flex flex-col items-center lg:items-start gap-[36px] w-full">
              <div className="flex flex-col items-center lg:items-start gap-[16px]">
                <h1 className="font-crimson text-[40px] lg:text-[66px] leading-tight lg:leading-[66px] text-white text-center lg:text-left tracking-tight lg:tracking-[-1.98px] max-w-[653px]">
                  Managing, Letting, & Investing - the Right Way
                </h1>
                <p className="font-manrope font-normal text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-white text-center lg:text-left max-w-[500px]">
                  Expert management, lettings, and investment opportunities across the UK - powered by transparency and modern compliance.
                </p>
              </div>
              <button className="bg-white px-[10px] py-[10px] rounded-[8px] w-full sm:w-[217px] h-[56px]">
                <span className="font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57]">Speak To Our Team</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] items-center lg:items-start px-0 lg:pl-[60px] pb-12 lg:pb-0 w-full">
            <div className="h-[66px] w-[176px] relative">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="absolute w-[58px] h-[58px]" style={{ left: `${i * 37}px`, top: '4.35px' }}>
                  <Image
                    src={`http://localhost:3845/assets/${['dfa6305a9e48ea1ed03addef9eb64fb12bad5810', '411de54d61a7617902ad97c7fd9973fb72ec2506', '12b4974b719ef2c1b71d0fea78774c141bb45b0d', '2c44a0f83d50d3df5cc3ee99e6bf5a6051da2f67'][i]}.png`}
                    alt={`Avatar ${i + 1}`}
                    fill
                    className="rounded-full border-2 border-white object-cover object-top"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <p className="font-manrope font-semibold text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] text-white text-center lg:text-left max-w-[450px]">
              Thousands of residents have chosen our community to call home.
            </p>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <FeaturedProperties />

      {/* About Us Section */}
      <div className="relative w-full min-h-[600px] lg:h-[800px] flex flex-col gap-[31px] items-start justify-center lg:justify-end pb-12 lg:pb-[36px] pt-12 lg:pt-0 px-6 lg:px-[98px] mt-[100px] lg:mt-[150px]">
        <Image
          src="http://localhost:3845/assets/069af032e465c46ca3308131d6b7c34885ece7db.png"
          alt="About Us Background"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 lg:hidden"></div>
        <div className="relative z-10 flex flex-col gap-[16px] items-start max-w-[600px] text-white w-full">
          <div className="flex flex-col gap-[8px] items-start">
            <h2 className="font-crimson text-[36px] lg:text-[56px] leading-[42px] lg:leading-[56px] tracking-tight lg:tracking-[-1.68px]">About Pevona</h2>
            <p className="font-manrope font-normal text-[18px] lg:text-[22px] leading-[26px] lg:leading-[32px]">Rooted in Trust. Driven by Expertise.</p>
          </div>
          <p className="font-manrope font-normal text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] opacity-80">
            Pevona Ltd is a UK real estate company specialising in lettings, management, and investments. We deliver transparent, compliant, and client-focused solutions that protect assets and maximise returns.
          </p>
        </div>
        <div className="relative z-10 flex flex-col gap-[16px] items-start w-full">
          <p className="font-crimson text-[20px] lg:text-[22px] leading-[32px] text-white">Certifications</p>
          <div className="flex flex-wrap gap-[16px] items-start max-w-[350px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-[rgba(0,0,0,0.12)] h-[50px] lg:h-[60px] rounded-[10px] w-[140px] lg:w-[150px] flex items-center justify-center">
                <Image
                  src={`http://localhost:3845/assets/cert${i}.png`}
                  alt={`Certification ${i}`}
                  width={70}
                  height={24}
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
        <button className="relative z-10 bg-white px-[10px] py-[10px] rounded-[8px] w-full sm:w-[240px] h-[56px]">
          <span className="font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57]">Learn More About Us</span>
        </button>
      </div>

      <div className="flex flex-col gap-[36px] items-center justify-center w-full mt-[100px] lg:mt-[150px] px-6">
        <div className="flex flex-col gap-[10px] items-center text-center max-w-[800px]">
          <h2 className="font-crimson text-[36px] lg:text-[56px] leading-tight lg:leading-[56px] text-[#002f57] tracking-tight lg:tracking-[-1.68px]">
            Proven Results Backed by Experience
          </h2>
          <p className="font-manrope font-normal text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#333333]">
            With decades of industry expertise and hundreds of successful sales, we deliver trusted property guidance rooted in performance and reliability.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[26px] items-center justify-center w-full max-w-[1100px]">
          <div className="flex-1 w-full border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center py-8 lg:p-[26px] text-center">
            <p className="font-crimson font-bold text-[36px] lg:text-[42px] text-[#002f57]">500+</p>
            <p className="font-manrope font-light text-[18px] lg:text-[22px] text-[#333333]">properties sold</p>
          </div>
          <div className="flex-1 w-full border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center py-8 lg:p-[26px] text-center">
            <p className="font-crimson font-bold text-[36px] lg:text-[42px] text-[#002f57]">20</p>
            <p className="font-manrope font-light text-[18px] lg:text-[22px] text-[#333333]">years of experience</p>
          </div>
          <div className="flex-1 w-full border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center py-8 lg:p-[26px] text-center">
            <p className="font-crimson font-bold text-[36px] lg:text-[42px] text-[#002f57]">50+</p>
            <p className="font-manrope font-light text-[18px] lg:text-[22px] text-[#333333]">Awards & Recognitions</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[26px] items-center w-full mt-[100px] lg:mt-[150px] px-6">
        <h2 className="font-crimson text-[36px] lg:text-[56px] leading-tight lg:leading-[56px] text-[#002f57] text-center tracking-tight lg:tracking-[-1.68px] max-w-[562px]">
          Solutions That Protect and Grow Your Assets.
        </h2>
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[26px] items-start justify-center w-full max-w-[1400px]">
          {[
            { title: 'Lettings', image: '6271a7d00ed6ac50b236623f908417de9ef70cc1', desc: 'From tenant sourcing to application management, we simplify every step for landlords and renters.' },
            { title: 'Property Management', image: 'aa86c424b3f4a71c56a2065c77d590f4b3f1c8fa', desc: 'Complete care for your property - from compliance and maintenance to reporting and renewals.' },
            { title: 'Investments', image: '67b55c6ccaa7e563976cce39b0d51b258d560847', desc: 'Tailored UK property investment opportunities designed for performance and security.' }
          ].map((service, i) => (
            <div key={i} className="flex flex-col gap-[21px] items-center w-full lg:w-[445px]">
              <div className="relative w-full h-[350px] lg:h-[480px] rounded-[12px] overflow-hidden">
                <Image
                  src={`http://localhost:3845/assets/${service.image}.png`}
                  alt={service.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-[20px] left-[20px] lg:left-[38px]">
                  <h3 className="font-crimson font-semibold text-[32px] lg:text-[40px] leading-tight text-white capitalize">{service.title}</h3>
                </div>
              </div>
              <p className="font-manrope font-normal text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#333333] text-center lg:text-left max-w-[370px]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-[10px] items-center overflow-hidden py-[100px] lg:py-[204px] mt-[100px] lg:mt-[150px] px-6">
        <div className="absolute inset-0 w-full flex justify-center">
          <div className="relative w-full max-w-[1336px] h-full">
            <Image
              src="http://localhost:3845/assets/e95fc985941feb01d9a5975e6ed8d9296695239e.png"
              alt="Investment Background"
              fill
              className="object-cover rounded-[16px]"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#002f57] opacity-60 rounded-[16px]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[#002f57] rounded-b-[16px] hidden lg:flex items-center justify-center px-4">
              <p className="font-manrope font-semibold text-[18px] lg:text-[22px] text-white text-center">
                Market Research & Sourcing   -   Return on Investment & Financial Modelling   -   Legal Due Diligence   -   Portfolio Management
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col gap-[20px] items-center justify-center text-center text-white w-full max-w-[800px] lg:pt-[100px]">
          <h2 className="font-crimson text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px]">
            Investment Opportunities
          </h2>
          <p className="font-manrope font-normal text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px]">
            Pevona identifies high-yield UK properties through detailed research and financial analysis to maximise returns and safeguard your portfolio.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#002f57] flex flex-col gap-[36px] items-center justify-end px-6 lg:px-0 pt-[73px] pb-12 lg:pb-[16px] w-full mt-[100px] lg:mt-[150px]">
        <div className="flex flex-col lg:flex-row items-start justify-between lg:px-[135px] w-full max-w-[1560px] gap-12 lg:gap-0">
          <div className="flex flex-col gap-[26px] items-start w-full lg:w-[480px]">
            <div className="h-[50px] w-[193px] relative">
              <Link href="/">
                <Image
                  src="/images/Footer-logo.svg"
                  alt="Pevona Logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            <p className="font-manrope font-normal text-[18px] leading-[28px] text-white">
              Get an accurate, expert-led valuation tailored to your property and local market. Book now and take the next step with confidence.
            </p>
            <button className="bg-white hover:bg-gray-100 px-[10px] py-[10px] rounded-[8px] w-full lg:w-[240px] h-[56px] transition-colors">
              <span className="font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57]">Book a Free Valuation</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-12 lg:gap-[60px] w-full lg:w-auto">
            <div className="flex flex-col gap-[10px] items-start min-w-[140px]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Company</p>
              <div className="flex flex-col gap-[10px] items-start font-manrope font-normal text-[18px] leading-[28px] text-white opacity-80">
                <Link href="#" className="hover:text-white transition-opacity">About Us</Link>
                <Link href="#" className="hover:text-white transition-opacity">Contact Us</Link>
                <Link href="#" className="hover:text-white transition-opacity">News & Insights</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] items-start min-w-[140px]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Legal</p>
              <div className="flex flex-col gap-[10px] items-start font-manrope font-normal text-[18px] leading-[28px] text-white opacity-80">
                <Link href="#" className="hover:text-white transition-opacity">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-opacity">Cookie Policy</Link>
                <Link href="#" className="hover:text-white transition-opacity">Terms & Conditions</Link>
                <Link href="#" className="hover:text-white transition-opacity">Legal & Compliance</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] items-start min-w-[140px]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Follow Us</p>
              <div className="flex flex-col gap-[10px] items-start font-manrope font-normal text-[18px] leading-[28px] text-white opacity-80">
                <Link href="#" className="hover:text-white transition-opacity">Youtube</Link>
                <Link href="#" className="hover:text-white transition-opacity">Twitter</Link>
                <Link href="#" className="hover:text-white transition-opacity">LinkedIn</Link>
                <Link href="#" className="hover:text-white transition-opacity">Instagram</Link>
                <Link href="#" className="hover:text-white transition-opacity">Facebook</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-center w-full px-6">
          <div className="h-px w-full max-w-[1560px] border-t border-white opacity-20"></div>
          <p className="font-manrope font-medium text-[16px] leading-[26px] text-white opacity-60 text-center">
            Copyright © All rights reserved Pevona
          </p>
        </div>
      </footer>
    </div>
  );
}





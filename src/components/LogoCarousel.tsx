import { useState } from "react";
import * as Popover from '@radix-ui/react-popover';

const logos = [
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/Yamaha_aspect_preserved_xaxtar.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/Fossil_aspect_preserved_azio1k.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/PGW_aspect_preserved_zzexql.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/HP_aspect_preserved_g74bw6.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/Reckitt_aspect_preserved_quqr34.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/Oregon_Tool_aspect_preserved_rxofcm.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/Wacom_aspect_preserved_ryjbyh.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672848/LG_aspect_preserved_k3nzqe.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Verizon_aspect_preserved_uubght.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672845/Happy_Dad_aspect_preserved_oipygm.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Under_Armour_aspect_preserved_abhwyl.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Miele_aspect_preserved_x6oo3l.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Siemens_aspect_preserved_j6lin9.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Brown_Caldwell_aspect_preserved_nocfi8.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Stanley_aspect_preserved_bphq3l.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Rain_Bird_aspect_preserved_cf3wrc.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Samsung_aspect_preserved_nqor69.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/Hayward_aspect_preserved_vbqxgm.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672843/Nulo_Pet_Food_aspect_preserved_wgbchr.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672843/Jost_Chemical_aspect_preserved_t0hbfi.png",
  "https://res.cloudinary.com/dqojf0xy1/image/upload/v1734672844/UKG_aspect_preserved_mqwumk.png",
];

const testimonials = [
  {
    from: { name: "marketing.team", domain: "yamaha.com" },
    subject: "Re: Marketing Performance",
    message: "The implementation has exceeded our expectations. Significant improvement in our digital presence.",
    company: "Yamaha",
    revenue: "$16.8 Billion (2022)",
  },
  {
    from: { name: "digital.marketing", domain: "fossil.com" },
    subject: "Campaign Results",
    message: "Outstanding results from our latest digital initiatives.",
    company: "Fossil Group",
    revenue: "$1.68 Billion (2022)",
  },
  {
    from: { name: "operations", domain: "pgw.com" },
    subject: "Partnership Success",
    message: "The integration has streamlined our processes significantly.",
    company: "PGW Auto Glass",
    revenue: "$500+ Million",
  },
  {
    from: { name: "digital.team", domain: "hp.com" },
    subject: "Digital Transformation Update",
    message: "Remarkable improvement in our digital capabilities.",
    company: "HP",
    revenue: "$63.0 Billion (2022)",
  },
  {
    from: { name: "marketing", domain: "reckitt.com" },
    subject: "Campaign Performance",
    message: "Exceptional results across all metrics.",
    company: "Reckitt",
    revenue: "$14.5 Billion (2022)",
  },
  {
    from: { name: "digital", domain: "oregontool.com" },
    subject: "Digital Strategy Success",
    message: "Significant improvements in our online presence.",
    company: "Oregon Tool",
    revenue: "$750+ Million",
  },
  {
    from: { name: "marketing", domain: "wacom.com" },
    subject: "Marketing Results",
    message: "The new strategy has delivered impressive outcomes.",
    company: "Wacom",
    revenue: "$1.1 Billion (2022)",
  },
  {
    from: { name: "digital.marketing", domain: "lg.com" },
    subject: "Digital Performance",
    message: "Outstanding results from our digital transformation.",
    company: "LG",
    revenue: "$51.4 Billion (2022)",
  },
  {
    from: { name: "marketing.team", domain: "verizon.com" },
    subject: "Campaign Success",
    message: "Exceptional performance across all channels.",
    company: "Verizon",
    revenue: "$136.8 Billion (2022)",
  },
  {
    from: { name: "marketing", domain: "happydad.com" },
    subject: "Growth Results",
    message: "Impressive growth in our digital presence.",
    company: "Happy Dad",
    revenue: "$100+ Million",
  },
  {
    from: { name: "digital", domain: "underarmour.com" },
    subject: "Digital Success",
    message: "Significant improvements in our online engagement.",
    company: "Under Armour",
    revenue: "$5.7 Billion (2022)",
  },
  {
    from: { name: "marketing.team", domain: "miele.com" },
    subject: "Marketing Performance",
    message: "Outstanding results from our latest initiatives.",
    company: "Miele",
    revenue: "$5.2 Billion (2022)",
  },
  {
    from: { name: "digital.marketing", domain: "siemens.com" },
    subject: "Digital Transformation",
    message: "Exceptional progress in our digital capabilities.",
    company: "Siemens",
    revenue: "$75.8 Billion (2022)",
  },
  {
    from: { name: "marketing", domain: "brownandcaldwell.com" },
    subject: "Strategy Success",
    message: "Remarkable improvements in our market presence.",
    company: "Brown and Caldwell",
    revenue: "$500+ Million",
  },
  {
    from: { name: "digital.team", domain: "stanleyblackanddecker.com" },
    subject: "Digital Results",
    message: "Significant growth in our digital channels.",
    company: "Stanley Black & Decker",
    revenue: "$16.9 Billion (2022)",
  },
  {
    from: { name: "marketing", domain: "rainbird.com" },
    subject: "Marketing Success",
    message: "Outstanding performance in our digital initiatives.",
    company: "Rain Bird",
    revenue: "$750+ Million",
  },
  {
    from: { name: "digital.marketing", domain: "samsung.com" },
    subject: "Digital Performance",
    message: "Exceptional results across all metrics.",
    company: "Samsung",
    revenue: "$244.2 Billion (2022)",
  },
  {
    from: { name: "marketing.team", domain: "hayward.com" },
    subject: "Campaign Results",
    message: "Impressive outcomes from our latest strategies.",
    company: "Hayward",
    revenue: "$1.3 Billion (2022)",
  },
  {
    from: { name: "digital", domain: "nulo.com" },
    subject: "Growth Update",
    message: "Significant improvements in our market presence.",
    company: "Nulo Pet Food",
    revenue: "$200+ Million",
  },
  {
    from: { name: "marketing", domain: "jostchemical.com" },
    subject: "Marketing Performance",
    message: "Outstanding results from our digital initiatives.",
    company: "Jost Chemical",
    revenue: "$100+ Million",
  },
  {
    from: { name: "digital.team", domain: "ukg.com" },
    subject: "Digital Success",
    message: "Remarkable improvements in our digital presence.",
    company: "UKG",
    revenue: "$3.3 Billion (2022)",
  },
];

export const LogoCarousel = () => {
  const [openPopover, setOpenPopover] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (logo: string) => {
    setLoadedImages(prev => new Set(prev).add(logo));
  };

  return (
    <div className="py-16 relative" role="region" aria-label="Logo Carousel">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="mx-auto overflow-hidden">
          <div 
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              willChange: 'transform',
            }}
            className="flex animate-marquee space-x-16"
          >
            {logos.concat(logos).map((logo, idx) => (
              <div 
                key={idx}
                className="relative"
                onMouseEnter={() => {
                  setOpenPopover(idx);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setOpenPopover(null);
                  setIsPaused(false);
                }}
              >
                <Popover.Root open={openPopover === idx}>
                  <Popover.Trigger className="relative z-10 flex items-center outline-none group cursor-pointer">
                    <div 
                      className="relative h-[80px] w-[160px] flex items-center justify-center"
                      style={{ zIndex: openPopover === idx ? 20 : 10 }}
                    >
                      {!loadedImages.has(logo) && (
                        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
                      )}
                      <img
                        src={logo}
                        alt={`${testimonials[idx % testimonials.length].company} logo`}
                        className={`h-[80px] w-auto object-contain transition-all duration-300 transform
                                  ${openPopover === idx ? 'scale-110 grayscale-0' : 'grayscale hover:grayscale-0 group-hover:scale-110'}
                                  ${loadedImages.has(logo) ? 'opacity-100' : 'opacity-0'}`}
                        style={{ maxWidth: 'none' }}
                        onLoad={() => handleImageLoad(logo)}
                        loading="eager"
                      />
                    </div>
                  </Popover.Trigger>

                  {loadedImages.has(logo) && (
                    <Popover.Portal>
                      <Popover.Content
                        className="w-[320px] bg-white shadow-lg rounded-lg animate-email-pop z-[9999] fixed
                                 origin-[center_bottom]"
                        sideOffset={5}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => {
                          setOpenPopover(null);
                          setIsPaused(false);
                        }}
                      >
                        <div className="overflow-hidden rounded-lg">
                          <div className="px-3 py-2 bg-gray-50">
                            <h3 className="text-sm font-medium text-gray-900 mb-2">
                              {testimonials[idx % testimonials.length].subject}
                            </h3>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                                  {testimonials[idx % testimonials.length].company.charAt(0)}
                                </div>
                                <div>
                                  <div className="relative">
                                    <span className="text-xs font-medium text-gray-700 blur-[2px] select-none">
                                      {testimonials[idx % testimonials.length].from.name}
                                    </span>
                                    <span className="text-xs font-medium text-gray-700">
                                      @{testimonials[idx % testimonials.length].from.domain}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-gray-500">to me</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-gray-500">12:30 PM</span>
                            </div>
                          </div>

                          <div className="px-3 py-2">
                            <p className="text-xs text-gray-600 mb-4">
                              {testimonials[idx % testimonials.length].message}
                            </p>
                            <div className="flex items-center justify-between text-[11px] pt-2">
                              <span className="text-green-600 font-medium">✓ Call Booked</span>
                              <div className="text-right">
                                <p className="text-[10px] text-gray-600 mb-0.5">
                                  {testimonials[idx % testimonials.length].company}
                                </p>
                                <p className="text-blue-600 font-medium">
                                  {testimonials[idx % testimonials.length].revenue}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Content>
                    </Popover.Portal>
                  )}
                </Popover.Root>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
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
    from: { name: "head.sales", domain: "yamaha.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Yamaha",
    revenue: "$16.8B ARR"
  },
  {
    from: { name: "head.sales", domain: "fossil.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Fossil Group",
    revenue: "$1.68B ARR"
  },
  {
    from: { name: "head.sales", domain: "pgw.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "PGW Auto Glass",
    revenue: "$500M ARR"
  },
  {
    from: { name: "head.sales", domain: "hp.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "HP",
    revenue: "$63.0B ARR"
  },
  {
    from: { name: "head.sales", domain: "reckitt.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Reckitt",
    revenue: "$14.5B ARR"
  },
  {
    from: { name: "head.sales", domain: "oregontool.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Oregon Tool",
    revenue: "$750M ARR"
  },
  {
    from: { name: "head.sales", domain: "wacom.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Wacom",
    revenue: "$1.1B ARR"
  },
  {
    from: { name: "head.sales", domain: "lg.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "LG",
    revenue: "$51.4B ARR"
  },
  {
    from: { name: "head.sales", domain: "verizon.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Verizon",
    revenue: "$136.8B ARR"
  },
  {
    from: { name: "head.sales", domain: "happydad.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Happy Dad",
    revenue: "$100M ARR"
  },
  {
    from: { name: "head.sales", domain: "underarmour.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Under Armour",
    revenue: "$5.7B ARR"
  },
  {
    from: { name: "head.sales", domain: "miele.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Miele",
    revenue: "$5.2B ARR"
  },
  {
    from: { name: "head.sales", domain: "siemens.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Siemens",
    revenue: "$75.8B ARR"
  },
  {
    from: { name: "head.sales", domain: "brownandcaldwell.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Brown and Caldwell",
    revenue: "$500M ARR"
  },
  {
    from: { name: "head.sales", domain: "stanleyblackanddecker.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Stanley Black & Decker",
    revenue: "$16.9B ARR"
  },
  {
    from: { name: "head.sales", domain: "rainbird.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Rain Bird",
    revenue: "$750M ARR"
  },
  {
    from: { name: "head.sales", domain: "samsung.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Samsung",
    revenue: "$244.2B ARR"
  },
  {
    from: { name: "head.sales", domain: "hayward.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Hayward",
    revenue: "$1.3B ARR"
  },
  {
    from: { name: "head.sales", domain: "nulo.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Nulo Pet Food",
    revenue: "$200M ARR"
  },
  {
    from: { name: "head.sales", domain: "jostchemical.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Jost Chemical",
    revenue: "$100M ARR"
  },
  {
    from: { name: "head.sales", domain: "ukg.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "UKG",
    revenue: "$3.3B ARR"
  }
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
      <div className="max-w-[100vw] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          TRUSTED BY INDUSTRY LEADERS
        </h2>
        <div className="relative w-full overflow-hidden">
          <div 
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              willChange: 'transform',
              width: 'fit-content',
              display: 'flex',
              gap: '4rem'
            }}
            className="animate-marquee"
          >
            {logos.concat(logos).map((logo, idx) => (
              <div 
                key={idx}
                className="relative shrink-0"
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
                        <div className="overflow-hidden rounded-lg ring-1 ring-gray-100">
                          <div className="px-4 py-2 bg-white">
                            <div className="flex items-center justify-between">
                              <h3 className="text-[14px] font-medium text-gray-900">
                                {testimonials[idx % testimonials.length].subject}
                              </h3>
                              <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">
                                ✓ Booked
                              </span>
                            </div>
                            <div className="mt-1 text-[13px] text-gray-500">
                              To: <span className="text-gray-800">*****@youragency.com</span>
                            </div>
                          </div>

                          <div className="px-4 py-3 bg-white">
                            <p className="text-[13px] text-gray-600 leading-relaxed">
                              {testimonials[idx % testimonials.length].message}
                            </p>
                            
                            <div className="mt-4 pt-3 border-t border-gray-100">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="text-[13px] font-medium text-gray-900">
                                      {testimonials[idx % testimonials.length].company}
                                    </div>
                                    <div className="text-[11px] text-gray-500 mt-0.5">
                                      Head of Enterprise Sales
                                    </div>
                                  </div>
                                  <div className="text-[13px] font-medium text-blue-600">
                                    {testimonials[idx % testimonials.length].revenue}
                                  </div>
                                </div>
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
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
    jobTitle: "Head of Enterprise Sales",
    revenue: "$16.8B ARR"
  },
  {
    from: { name: "head.sales", domain: "fossil.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Fossil Group",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$1.68B ARR"
  },
  {
    from: { name: "head.sales", domain: "pgw.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "PGW Auto Glass",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$500M ARR"
  },
  {
    from: { name: "head.sales", domain: "hp.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "HP",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$63.0B ARR"
  },
  {
    from: { name: "head.sales", domain: "reckitt.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Reckitt",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$14.5B ARR"
  },
  {
    from: { name: "head.sales", domain: "oregontool.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Oregon Tool",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$750M ARR"
  },
  {
    from: { name: "head.sales", domain: "wacom.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Wacom",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$1.1B ARR"
  },
  {
    from: { name: "head.sales", domain: "lg.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "LG",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$51.4B ARR"
  },
  {
    from: { name: "head.sales", domain: "verizon.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Verizon",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$136.8B ARR"
  },
  {
    from: { name: "head.sales", domain: "happydad.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Happy Dad",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$100M ARR"
  },
  {
    from: { name: "head.sales", domain: "underarmour.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Under Armour",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$5.7B ARR"
  },
  {
    from: { name: "head.sales", domain: "miele.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Miele",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$5.2B ARR"
  },
  {
    from: { name: "head.sales", domain: "siemens.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Siemens",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$75.8B ARR"
  },
  {
    from: { name: "head.sales", domain: "brownandcaldwell.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Brown and Caldwell",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$500M ARR"
  },
  {
    from: { name: "head.sales", domain: "stanleyblackanddecker.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Stanley Black & Decker",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$16.9B ARR"
  },
  {
    from: { name: "head.sales", domain: "rainbird.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Rain Bird",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$750M ARR"
  },
  {
    from: { name: "head.sales", domain: "samsung.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Samsung",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$244.2B ARR"
  },
  {
    from: { name: "head.sales", domain: "hayward.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Hayward",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$1.3B ARR"
  },
  {
    from: { name: "head.sales", domain: "nulo.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Nulo Pet Food",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$200M ARR"
  },
  {
    from: { name: "head.sales", domain: "jostchemical.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "Jost Chemical",
    jobTitle: "Head of Enterprise Sales",
    revenue: "$100M ARR"
  },
  {
    from: { name: "head.sales", domain: "ukg.com" },
    subject: "Re: Enterprise Sales Growth",
    message: "Your enterprise sales strategy has transformed our B2B division. We've seen a 200% increase in corporate partnerships within six months.",
    company: "UKG",
    jobTitle: "Head of Enterprise Sales",
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

  const handleMouseEnter = (idx: number) => {
    setOpenPopover(idx);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setOpenPopover(null);
    setIsPaused(false);
  };

  return (
    <div className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          WE BRING OUR CLIENTS WHALES
        </h2>
        <div className="overflow-hidden">
          <div
            className={`flex animate-marquee space-x-16`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {logos.concat(logos).map((logo, idx) => {
              const testimonial = testimonials[idx % testimonials.length];
              return (
                <div key={idx} className="relative">
                  <Popover.Root open={openPopover === idx}>
                    <Popover.Trigger
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                      className="outline-none cursor-pointer"
                    >
                      <div className="relative">
                        {!loadedImages.has(logo) && (
                          <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
                        )}
                        <img
                          src={logo}
                          alt={`${testimonial.company} logo`}
                          className={`h-[80px] w-auto object-contain transition-transform duration-300
                                      ${openPopover === idx ? 'scale-105 grayscale-0' : 'grayscale hover:grayscale-0 hover:scale-105'}
                                      ${loadedImages.has(logo) ? 'opacity-100' : 'opacity-0'}`}
                          onLoad={() => handleImageLoad(logo)}
                          loading="eager"
                        />
                      </div>
                    </Popover.Trigger>
                    {loadedImages.has(logo) && (
                      <Popover.Portal>
                        <Popover.Content
                          className="w-[320px] bg-white shadow-lg rounded-lg animate-email-pop origin-[center_bottom]"
                          sideOffset={5}
                          onMouseEnter={() => setIsPaused(true)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="overflow-hidden rounded-lg">
                            <div className="px-4 py-2 bg-white">
                              <div className="flex items-center justify-between">
                                <h3 className="text-[14px] font-medium text-gray-900">
                                  {testimonial.subject}
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
                                {testimonial.message}
                              </p>
                              
                              <div className="mt-4 pt-3 border-t border-gray-100">
                                <div className="flex flex-col gap-1">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="text-[13px] font-medium text-gray-900">
                                        {testimonial.company}
                                      </div>
                                      <div className="text-[11px] text-gray-500 mt-0.5">
                                        {testimonial.jobTitle || 'Head of Enterprise Sales'}
                                      </div>
                                    </div>
                                    <div className="text-[13px] font-medium text-blue-600">
                                      {testimonial.revenue}
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

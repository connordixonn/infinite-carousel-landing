import * as Popover from '@radix-ui/react-popover';
import { TestimonialType } from './types';

interface LogoItemProps {
  logo: string;
  index: number;
  testimonial: TestimonialType;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  loadedImages: Set<string>;
  onImageLoad: (logo: string) => void;
}

export const LogoItem = ({
  logo,
  index,
  testimonial,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  loadedImages,
  onImageLoad
}: LogoItemProps) => {
  return (
    <div 
      className="relative shrink-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Popover.Root open={isOpen}>
        <Popover.Trigger className="relative z-10 flex items-center outline-none group cursor-pointer">
          <div 
            className="relative h-[60px] w-[180px] flex items-center justify-center"
            style={{ zIndex: isOpen ? 20 : 10 }}
          >
            {!loadedImages.has(logo) && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
            )}
            <img
              src={logo}
              alt={`${testimonial.company} logo`}
              className={`h-auto w-auto max-h-[60px] max-w-[180px] object-contain transition-all duration-300 transform
                        ${isOpen ? 'scale-110 grayscale-0' : 'grayscale hover:grayscale-0 group-hover:scale-110'}
                        ${loadedImages.has(logo) ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => onImageLoad(logo)}
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
              onMouseEnter={() => onMouseEnter()}
              onMouseLeave={onMouseLeave}
            >
              <div className="overflow-hidden rounded-lg ring-1 ring-gray-100">
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
                            Head of Enterprise Sales
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
};
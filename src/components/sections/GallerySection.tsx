import { useState } from "react";
import { Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

/** Asymmetric magazine grid: spans vary by index so rows never look uniform. */
const spans = [
  "sm:col-span-7 lg:col-span-6",
  "sm:col-span-5 lg:col-span-3 lg:mt-16",
  "sm:col-span-12 lg:col-span-3",
  "sm:col-span-5 lg:col-span-4",
  "sm:col-span-7 lg:col-span-5 lg:mt-12",
  "sm:col-span-6 lg:col-span-3",
  "sm:col-span-6 lg:col-span-5",
  "sm:col-span-6 lg:col-span-3 lg:mt-16",
  "sm:col-span-6 lg:col-span-4",
];

export function GallerySection({ filterable = true }: { filterable?: boolean }) {
  const [active, setActive] = useState<string>("All");
  const images = galleryImages.filter((image) => active === "All" || image.category === active);

  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>Gallery</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl">
            India, <span className="italic">In Frames</span>
          </h2>
        </Reveal>

        {filterable && (
          <Reveal delay={180} className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {["All", ...galleryCategories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={cn(
                  "text-[0.65rem] uppercase tracking-[0.24em] transition-colors duration-500",
                  active === category ? "text-terracotta" : "text-ink-soft hover:text-ink",
                )}
              >
                {category}
              </button>
            ))}
          </Reveal>
        )}

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-12 lg:gap-8">
          {images.map((image, index) => (
            <Reveal
              key={image.src + index}
              delay={(index % 3) * 90}
              variant="clip"
              className={cn("img-zoom", spans[index % spans.length])}
            >
              <div
                className={cn(
                  "overflow-hidden bg-sand-deep",
                  image.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-[0.6rem] uppercase tracking-[0.24em] text-ink-soft">
                {image.category}
              </p>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}
import { useState } from "react";
import { Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryCategories, galleryImages, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

/** Editorial grid pattern — repeats every 5 cards for a magazine feel */
const spans = [
  "sm:col-span-12 lg:col-span-8",          // 1 — wide hero
  "sm:col-span-6  lg:col-span-4",          // 2 — tall right
  "sm:col-span-6  lg:col-span-4",          // 3 — small left
  "sm:col-span-6  lg:col-span-4 lg:mt-8", // 4 — small mid
  "sm:col-span-6  lg:col-span-4 lg:mt-8", // 5 — small right
];

const heights = [
  "aspect-[16/9]",   // 1 wide
  "aspect-[3/4]",    // 2 tall
  "aspect-[4/3]",    // 3
  "aspect-[4/3]",    // 4
  "aspect-[4/3]",    // 5
];

export function GallerySection({ filterable = true }: { filterable?: boolean }) {
  const [active, setActive] = useState<string>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const images = galleryImages.filter((image) => active === "All" || image.category === active);

  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>Gallery</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl">
            India
            <br />
            <span className="font-[family-name:var(--font-display-alt)] font-light">In Frames</span>
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
                  "border-b-2 pb-1 text-[0.7rem] uppercase tracking-[0.24em] transition-colors duration-500",
                  active === category
                    ? "border-terracotta text-terracotta"
                    : "border-transparent text-ink-soft hover:border-line hover:text-ink",
                )}
              >
                {category}
              </button>
            ))}
          </Reveal>
        )}

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-12 lg:gap-5">
          {images.map((image, index) => (
            <Reveal
              key={image.src + index}
              delay={(index % 3) * 80}
              className={cn("img-zoom group", spans[index % spans.length])}
            >
              <button
                type="button"
                onClick={() => setSelected(image)}
                aria-label={`View larger: ${image.alt}`}
                className={cn(
                  "relative block w-full cursor-zoom-in overflow-hidden bg-sand-deep",
                  heights[index % heights.length],
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                <p className="absolute bottom-3 left-4 text-[0.6rem] uppercase tracking-[0.28em] text-sand/0 transition-all duration-500 group-hover:text-sand/90">
                  {image.category}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </Shell>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl w-[92vw] border-none bg-transparent p-0 shadow-none sm:rounded-none">
          <DialogTitle className="sr-only">{selected?.alt}</DialogTitle>
          {selected && (
            <img
              src={selected.src}
              alt={selected.alt}
              className="max-h-[85vh] w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
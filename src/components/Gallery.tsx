import { invite } from "@/invite.config";

export function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {invite.media.galleryImages.map((src, idx) => (
        <a
          key={idx}
          href={src}
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden rounded-xl bg-neutral-200"
        >
          <img
            src={src}
            alt={`gallery ${idx + 1}`}
            className="h-28 w-full object-cover"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}

import { invite } from "@/invite.config";

export function HeaderHero() {
  return (
    <header className="relative">
      <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-200">
        {/* 대표 이미지: public/hero.jpg 로 교체하세요 */}
        <img
          src={invite.media.heroImage}
          alt="wedding hero"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="px-5 py-6">
        <div className="text-sm text-neutral-500">{invite.hero.smallTitle}</div>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight">
          {invite.couple.groom.name} · {invite.couple.bride.name}
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          {invite.schedule.dateText} · {invite.schedule.timeText}
        </p>
        <p className="mt-1 text-sm text-neutral-600">{invite.location.venueName}</p>
      </div>
    </header>
  );
}

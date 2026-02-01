import { invite } from "@/invite.config";
import { Section } from "@/components/Section";
import { HeaderHero } from "@/components/HeaderHero";
import { Timeline } from "@/components/Timeline";
import { LocationCard } from "@/components/LocationCard";
import { Gallery } from "@/components/Gallery";
import { Account } from "@/components/Account";
import { FooterActions } from "@/components/FooterActions";

export default function Page() {
  return (
    <main className="mx-auto max-w-md">
      <HeaderHero />

      <Section title="초대합니다" subtitle={invite.message.subtitle}>
        <p className="whitespace-pre-line text-[15px] leading-7 text-neutral-700">
          {invite.message.body}
        </p>

        <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
          <div className="text-sm text-neutral-500">신랑 · 신부</div>
          <div className="mt-1 text-lg font-semibold">
            {invite.couple.groom.name} · {invite.couple.bride.name}
          </div>
          <div className="mt-2 text-sm text-neutral-600">
            {invite.schedule.dateText} · {invite.schedule.timeText}
          </div>
          <div className="mt-1 text-sm text-neutral-600">{invite.location.venueName}</div>
        </div>
      </Section>

      <Section title="오시는 길" subtitle={invite.location.address1}>
        <LocationCard />
      </Section>

      <Section title="갤러리" subtitle="우리의 순간들">
        <Gallery />
      </Section>

      <Section title="마음 전하실 곳" subtitle="계좌 안내">
        <Account />
      </Section>

      <FooterActions />
      <div className="h-12" />
    </main>
  );
}

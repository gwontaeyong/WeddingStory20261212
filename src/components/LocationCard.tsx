"use client";

import { invite } from "@/invite.config";
import { copyToClipboard } from "@/lib/copy";

export function LocationCard() {
  const q = encodeURIComponent(`${invite.location.venueName} ${invite.location.address1}`);
  const googleMapEmbed = `https://www.google.com/maps?q=${q}&output=embed`;
  const googleMapLink = `https://www.google.com/maps?q=${q}`;

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100">
        <iframe
          title="map"
          src={googleMapEmbed}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
        <div className="text-[15px] font-semibold">{invite.location.venueName}</div>
        <div className="mt-1 text-sm text-neutral-600">
          {invite.location.address1}
          {invite.location.address2 ? ` ${invite.location.address2}` : ""}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            className="rounded-xl bg-neutral-900 px-3 py-2 text-center text-sm font-semibold text-white"
            href={googleMapLink}
            target="_blank"
            rel="noreferrer"
          >
            지도 열기
          </a>
          <button
            className="rounded-xl bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900"
            onClick={() => copyToClipboard(invite.location.address1)}
          >
            주소 복사
          </button>
        </div>

        <div className="mt-3 space-y-2 text-sm text-neutral-700">
          {invite.location.transport.map((t, i) => (
            <div key={i} className="leading-6">
              <span className="font-semibold">{t.title}</span>
              <div className="text-neutral-600">{t.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

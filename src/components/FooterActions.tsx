"use client";

import { invite } from "@/invite.config";
import { buildIcs } from "@/lib/ics";

export function FooterActions() {
  const handleShare = async () => {
    const payload = {
      title: invite.meta.title,
      text: invite.meta.description,
      url: invite.meta.siteUrl || window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(payload);
      else alert("공유 기능을 지원하지 않는 브라우저예요. URL을 복사해 주세요.");
    } catch {
      // 사용자가 취소한 경우도 있으니 조용히 무시
    }
  };

  const downloadIcs = () => {
    const ics = buildIcs(invite);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="sticky bottom-0 z-10 border-t border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-md px-5 py-3">
        <div className="grid grid-cols-3 gap-2">
          <button
            className="rounded-xl bg-neutral-900 px-3 py-2 text-sm font-semibold text-white"
            onClick={handleShare}
          >
            공유
          </button>
          <button
            className="rounded-xl bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900"
            onClick={downloadIcs}
          >
            캘린더 추가
          </button>
          <a
            className="rounded-xl bg-neutral-100 px-3 py-2 text-center text-sm font-semibold text-neutral-900"
            href={`tel:${invite.couple.groom.phone}`}
          >
            신랑 전화
          </a>
        </div>
      </div>
    </div>
  );
}

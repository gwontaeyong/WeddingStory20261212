"use client";

import { invite } from "@/invite.config";
import { copyToClipboard } from "@/lib/copy";

function AccountBlock({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; bank: string; account: string; note?: string }[];
}) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 space-y-3">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-xl bg-neutral-50 p-3">
            <div className="text-sm font-semibold">{it.name}</div>
            <div className="mt-1 text-sm text-neutral-700">
              {it.bank} {it.account}
            </div>
            {it.note ? <div className="mt-1 text-xs text-neutral-500">{it.note}</div> : null}
            <button
              className="mt-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white"
              onClick={() => copyToClipboard(`${it.bank} ${it.account}`)}
            >
              계좌 복사
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Account() {
  return (
    <div className="space-y-3">
      <AccountBlock title="신랑 측" items={invite.accounts.groom} />
      <AccountBlock title="신부 측" items={invite.accounts.bride} />
      {invite.rsvp.link ? (
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
          <div className="text-sm font-semibold">참석 여부 전달</div>
          <p className="mt-1 text-sm text-neutral-600">
            아래 버튼에서 참석 여부를 알려주세요.
          </p>
          <a
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-3 py-2 text-sm font-semibold text-white"
            href={invite.rsvp.link}
            target="_blank"
            rel="noreferrer"
          >
            RSVP 열기
          </a>
        </div>
      ) : null}
    </div>
  );
}

import type { InviteConfig } from "@/invite.config";

/**
 * 아주 단순한 iCalendar(.ics) 생성기
 * - 시간은 로컬 시간 기준으로 만들고, TZID를 명시합니다.
 * - 실제 타임존/서머타임 이슈가 걱정되면, ISO + TZ 데이터로 확장하세요.
 */
export function buildIcs(invite: InviteConfig) {
  const dt = invite.schedule.dateTimeLocal; // '2026-03-21T14:00:00'
  const [date, time] = dt.split("T");
  const dtstamp = nowUtcStamp();
  const dtstart = toIcsLocal(date, time);
  const dtend = toIcsLocal(date, addMinutes(time, invite.schedule.durationMinutes));

  const uid = `invite-${hash(invite.meta.title + dt)}@local`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//mobile-wedding-invite//KO//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART;TZID=${invite.schedule.timezone}:${dtstart}`,
    `DTEND;TZID=${invite.schedule.timezone}:${dtend}`,
    `SUMMARY:${escapeText(invite.meta.title)}`,
    `LOCATION:${escapeText(invite.location.venueName + " " + invite.location.address1)}`,
    `DESCRIPTION:${escapeText(invite.meta.description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}

function nowUtcStamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}

function toIcsLocal(date: string, time: string) {
  // YYYYMMDDTHHMMSS
  const [y, m, d] = date.split("-");
  const [hh, mm, ss = "00"] = time.split(":");
  return `${y}${m}${d}T${hh}${mm}${ss}`;
}

function addMinutes(time: string, mins: number) {
  const parts = time.split(":");
  const hh = parseInt(parts[0] ?? "0", 10);
  const mm = parseInt(parts[1] ?? "0", 10);
  const ss = parseInt(parts[2] ?? "0", 10);
  const total = hh * 60 + mm + mins;
  const nh = Math.floor((total % (24 * 60)) / 60);
  const nm = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(nh)}:${pad(nm)}:${pad(ss)}`;
}

function escapeText(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h.toString(16);
}

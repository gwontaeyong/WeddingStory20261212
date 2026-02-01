export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert("복사했어요 ✅");
  } catch {
    // iOS 일부 환경 fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    alert("복사했어요 ✅");
  }
}

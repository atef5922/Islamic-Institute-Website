import Link from "next/link";

const noticeItems = [
  "২০২৬ শিক্ষাবর্ষে ভর্তি কার্যক্রম চলছে",
  "বার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে",
  "নতুন শিক্ষাবর্ষের ক্লাস রুটিন প্রকাশিত হয়েছে",
  "অভিভাবক সভা আগামী শুক্রবার অনুষ্ঠিত হবে",
  "হিফজ বিভাগের নতুন ব্যাচে ভর্তি চলছে"
];

export function NoticeMarquee() {
  const repeatedItems = [...noticeItems, ...noticeItems];

  return (
    <div className="w-full border-b border-gold/30 bg-amber-50 text-primary-dark">
      <div className="mx-auto flex min-h-9 w-full max-w-[1440px] items-center overflow-hidden px-3 text-sm sm:px-6 md:text-base lg:px-8">
        <div className="z-10 flex h-9 shrink-0 items-center rounded-sm bg-gold px-3 font-bold text-ink shadow-sm sm:px-4">
          নোটিশঃ
        </div>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="notice-marquee-track flex w-max items-center gap-7 whitespace-nowrap py-2 pr-7 will-change-transform">
            {repeatedItems.map((item, index) => (
              <Link
                key={`${item}-${index}`}
                href="/notices"
                className="inline-flex shrink-0 items-center gap-7 font-semibold transition hover:text-primary"
              >
                <span>{item}</span>
                <span className="text-gold">|</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

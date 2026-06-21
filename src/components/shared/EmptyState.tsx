import { SearchX } from "lucide-react";

export function EmptyState({ text = "কোনো তথ্য পাওয়া যায়নি" }: { text?: string }) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
      <SearchX className="mx-auto mb-3 h-8 w-8 text-primary" />
      {text}
    </div>
  );
}

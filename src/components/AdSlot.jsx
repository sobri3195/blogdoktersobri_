export default function AdSlot({ label = 'AdSense Slot', className = '' }) {
  return (
    <div className={`rounded-xl border border-dashed border-slate-300 bg-slate-100 p-4 text-center text-xs text-slate-500 ${className}`}>
      {label}
    </div>
  );
}

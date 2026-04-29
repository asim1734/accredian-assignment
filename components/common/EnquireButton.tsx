"use client";

type EnquireButtonProps = {
  label: string;
  className?: string;
};

export default function EnquireButton({ label, className }: EnquireButtonProps) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("open-enquire-modal"));
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}

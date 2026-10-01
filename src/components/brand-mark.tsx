export function BrandMark({ size = 52 }: { size?: number }) {
  return (
    <div
      aria-hidden="true"
      className="grid place-items-center rounded-[18px] border border-white/10 bg-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.42)]"
      style={{ width: size, height: size }}
    >
      <svg
        width={Math.round(size * 0.56)}
        height={Math.round(size * 0.56)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.8 5.8 19.1 58.2"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M45.3 14.1c7 4.5 10.2 12.8 7.9 21.2-3 10.7-14.1 17.1-24.8 14.1-10.8-3-17.1-14.1-14.1-24.8C16.6 16.2 24 10.4 32.1 10"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}

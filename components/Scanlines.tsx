export default function Scanlines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          rgba(220, 20, 60, 0.5) 0px,
          rgba(220, 20, 60, 0.5) 1px,
          transparent 1px,
          transparent 3px
        )`,
      }}
    />
  );
}
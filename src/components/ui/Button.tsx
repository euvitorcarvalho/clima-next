interface HeaderProps {
  className: string;
  children: React.ReactNode;
}

export function Button({ className, children }: HeaderProps) {
  return (
    <div
      className={`text-white flex rounded-3xl justify-center items-center md:text-2xl text-xl w-41 md:h-19.5 h-12 bg-linear-to-r from-(--button-start) to-(--button-end) hover:brightness-[0.9] transition-all ease duration-200 ${className}`}
    >
      <button>{children}</button>
    </div>
  );
}

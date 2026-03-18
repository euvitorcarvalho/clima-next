export default function Input() {
    return (
        <input
            type="text"
            placeholder="Search Here"
            className="placeholder:text-(--foreground) placeholder:font-extralight sm:text-2xl text-xl border-none bg-(--surface) w-full md:max-w-89 sm:h-21 h-12 sm:px-7.5 px-3 rounded-xl"
        />
    )
}
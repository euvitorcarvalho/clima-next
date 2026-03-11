export default function Input() {
    return (
        <input
            type="text"
            placeholder="Search Here"
            className="placeholder:text-(--foreground) placeholder:font-extralight text-2xl border-none bg-(--surface) w-full md:max-w-89 h-21 px-7.5 rounded-xl"
        />
    )
}
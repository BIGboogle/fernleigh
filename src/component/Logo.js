export default function Logo({ display }) {
    const color = `text-${display}`
    return (
        <div className={`${color}`}>
            <span className="text-2xl font-alt">The </span>
            <span className="text-3xl font-alt">Atelier's</span>
        </div>
    )
}
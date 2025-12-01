export function SectionHeading({
  colourClass,
  title
}: {
  colourClass: string
  title: string
}) {
  return (
    <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
      <span className={`inline-block h-2 w-2 rounded-full ${colourClass}`} />
      <span>{title}</span>
    </h2>
  )
}

import TypingTitle from "./TypingTitle"

export default function CenterHeader({ name }: { name: string }) {
  return (
    <div className="text-center py-14 px-4">
      <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
        The Center – A Legacy in Sports Excellence
      </p>

      <TypingTitle text={name} />

      <div className="w-20 h-1 bg-[#C9A14A] mx-auto mt-6 rounded-full" />
    </div>
  )
}
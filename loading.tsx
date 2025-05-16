export function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-xl font-bold">Loading 1mtr.</p>
    </div>
  )
}

import Link from "next/link"

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Link href="/" className="text-gray-600 hover:text-gray-900">
        Back to Home
      </Link>
    </div>
  )
}

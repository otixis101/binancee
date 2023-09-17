import Link from "next/link";

const cta = () => {
    return (
        <section className="bg-gray-50 flex flex-col justify-center items-center gap-8 py-24">
            <h1 className="text-4xl font-bold">Start earning today</h1>
            <Link href={'/login'} className="px-16 py-3 font-medium rounded-md bg-primary-light w-fit">Get Started</Link>
        </section>
    )
}

export default cta
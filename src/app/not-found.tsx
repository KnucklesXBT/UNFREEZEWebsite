import Link from "next/link";

export default function NotFound() {
  return (
    <section className="prose">
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <p>
        Go back <Link href="/">home</Link>.
      </p>
    </section>
  );
}


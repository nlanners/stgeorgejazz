import Link from 'next/link';

export const Header = () => (
  <header className="flex items-center p-8 font-header">
    <Link href="/">
      <h1 className="text-4xl mr-8">St George Jazz</h1>
    </Link>
    <ul className="flex text-2xl list-none">
      <li className="mx-8">
        <Link href="/">Home</Link>
      </li>
      <li className="mx-8">
        <Link href="/about">About</Link>
      </li>
      <li className="mx-8">
        <Link href="/rebel-jazz-band">Rebel Jazz Band</Link>
      </li>
      <li className="mx-8">
        <Link href="/events/">Events</Link>
      </li>
      <li className="mx-8">
        <Link href="/contact-us">Contact Us</Link>
      </li>
    </ul>
  </header>
);

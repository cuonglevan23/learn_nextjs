import Link from "next/link";



export default function Home() {
  return (
    <div>
      <li>
        <ul>
          <Link href="/admin">Go to Admin Page</Link>
        </ul>
      </li>
      <li>
        <ul>
          <Link href="/admin/demo">Go to Admin Demo Page</Link>
        </ul>
      </li>

    </div>
  );
}

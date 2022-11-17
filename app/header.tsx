import Link from "next/link";

export default function Header() {
  return (
    <div className="text-center pb-5 no-underline">
      <Link className="no-underline !text-black" href={`/`}>
        SEBBIA TEST
      </Link>
    </div>
  );
}

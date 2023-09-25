import AboutPage from "./About";
import Link from "next/link";
export default function Home() {
  return (
    <main className={`flex  flex-col items-center justify-between `}>
      Hello
      <Link href="./About">
        <button>About</button>
      </Link>
    </main>
  );
}

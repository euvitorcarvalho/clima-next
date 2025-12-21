import { Header } from "./components/Layout/Header";
import { Intro } from "./components/Layout/Intro";

export default function Home() {
  return (
    <div
      className={`h-screen w-screen md:bg-[url('/assets/bg.svg')] bg-[url('/assets/bg-mobile.png')] bg-cover bg-center`}
    >
      <Header />
      <Intro />
    </div>
  );
}

import { Intro } from "../components/layout/Intro";

export default function Home() {
  return (
    <main className={`h-screen w-screen md:bg-img-desktop bg-[url('/assets/bg-mobile.png')] bg-cover bg-center`}>
      <Intro />
    </main>
  );
}

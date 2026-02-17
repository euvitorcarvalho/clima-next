import Main from "@/components/layout/Main";
import { Intro } from "../components/layout/Intro";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <div>
      <Intro />
      <Main>
        <div className="flex justify-between flex-wrap items-center gap-5">
          <Input></Input>
        </div>
      </Main>
    </div>
  );
}

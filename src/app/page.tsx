import Main from "@/components/layout/Main";
import { Intro } from "../components/layout/Intro";
import Input from "@/components/ui/Input";
import Filters from "@/components/ui/Filters";

export default function Home() {
  return (
    <div>
      {/* fazer background no menu da header versão mobile */}
      {/* tentar fazer a responsividade da barra de filtro e search por conta própria */}
      <Intro />
      <Main>
        <div className="flex justify-between sm:flex-nowrap flex-wrap items-center sm:gap-45 gap-5 py-18.5">
          <Input></Input>
          <Filters></Filters>
        </div>
      </Main>
    </div>
  );
}

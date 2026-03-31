import Main from "@/components/layout/Main";
import { Intro } from "../components/layout/Intro";
import Input from "@/components/ui/Input";
import Filters from "@/components/ui/Filters";

export default function Home() {
  return (
    <div>
      {/* fazer background no menu da header versão mobile */}
      {/* tentar fazer a responsividade da barra de filtro e search*/}
      <Intro />
      <Main>
        <div className="flex sm:flex-row flex-col flex-wrap lg:justify-between justify-center items-center gap-5 lg:py-18.75 py-8">
          <Input></Input>
          <Filters></Filters>
        </div>
      </Main>
    </div>
  );
}

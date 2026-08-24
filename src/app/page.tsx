"use client";

import Main from "@/components/layout/Main";
import { Intro } from "../components/layout/Intro";
import Input from "@/components/ui/Input";
import Filters from "@/components/ui/Filters";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  return (
    <div>
      <Intro />
      <Main>
        <div className="flex sm:flex-row flex-col flex-wrap lg:justify-between justify-center items-center gap-5 lg:py-18.75 py-8">
          <Input value={inputValue} valueChanged={setInputValue}></Input>
          <Filters></Filters>
        </div>
      </Main>
    </div>
  );
}

import { GridContainer } from "../GridContainer";

export function Intro() {
  return (
    <GridContainer className="flex justify-center items-center max-w-194.5">
      <p className="font-medium md:text-[2.5rem] text-2xl text-center">
        Seeing the weather of the whole world with{" "}
        <span className="font-bold text-transparent bg-linear-to-r from-[#CAECFF] to-[#78CFFF] bg-clip-text">
          Clima!
        </span>
      </p>
    </GridContainer>
  );
}

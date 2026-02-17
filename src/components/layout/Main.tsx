import { Container } from "../Container"
import { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <main>
            <Container> 
              {children}
            </Container>
        </main>
    )
}
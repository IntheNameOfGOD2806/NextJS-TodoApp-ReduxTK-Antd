import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
// import { postCreateTodo } from "@/services/apiservice";
import { deleteTodo } from "@/services/apiservice";
import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {

  
  // const test = async () => {
  //   const res = await deleteTodo("56");
  //   console.log("res::::", res);
  // };
  // test();
  return (
    <StoreProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}

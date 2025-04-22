import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header";

export function DefaultLaytout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

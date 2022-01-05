import { ButtonNav } from "./ButtonNav";
import "./Navigation.css";
import { CgArrowDown, CgArrowUp } from "react-icons/cg";

export const Navigation = () => {
  return (
    <nav>
      <ButtonNav value={-1}>
        <CgArrowUp size={40} />
      </ButtonNav>
      <ButtonNav value={1}>
        <CgArrowDown size={40} />
      </ButtonNav>
    </nav>
  );
};

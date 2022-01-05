import { ButtonNav } from "./ButtonNav";
import "./Navigation.css";
import { GrCaretUp as ArrowUp, GrCaretDown as ArrowDown } from "react-icons/gr";

export const Navigation = () => {
  return (
    <nav>
      <ButtonNav value={-1}>
        <ArrowUp size={40} />
      </ButtonNav>
      <ButtonNav value={1}>
        <ArrowDown size={40} />
      </ButtonNav>
    </nav>
  );
};

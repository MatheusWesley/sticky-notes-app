import { HeaderContainer, LogoContent } from "./styles";

import noteIcon from "../../assets/noteIcon.png";
import { Timer, TrashSimple } from "phosphor-react";

export function Header() {

  function deleteAllNotes() {
    const message = "Para apagar apenas uma, clique duas vezes na nota.";
    const confirmation = confirm(`Deseja apagar todas as notas?\n*${message}`);

    if (confirmation) {
      localStorage.removeItem("@sticky-notes-1.0.0")
    }

  }

  return (
    <HeaderContainer>
      <LogoContent>
        <img src={noteIcon} alt="Imagem de um lapes" />
        <h1>Stick Notes</h1>
      </LogoContent>
      <nav>
        <a href="https://math-timer.vercel.app/" target="_blank">
          <Timer size={24} />
        </a>
        <a href="" onClick={deleteAllNotes}>
          <TrashSimple size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
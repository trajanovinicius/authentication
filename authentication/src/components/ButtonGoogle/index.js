import { ButtonG } from "./styles";
import googleImg from "../../assets/google-icon-1 1.svg";

export function ButtonGoogle() {
  return (
    <ButtonG>
      <img src={googleImg} alt="imagem do simbolo do google" />
      Sign in With Google
    </ButtonG>
  );
}

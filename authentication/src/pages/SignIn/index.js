import { Container, Form, ContainerImg } from "./styles";
import reformImg from "../../assets/reform.svg";
import explicImg from "../../assets/explic.svg";
import { InputLogin } from "../../components/InputLogin";
import { ButtonLogin } from "../../components/ButtonLogin";

export default function SignIn() {
  return (
    <Container>
      <ContainerImg>
        <img src={reformImg} alt="ilustração representando uma reforma" />
      </ContainerImg>
      <Form>
        <img src={explicImg} alt="ilustração representando uma explicação" />
        <InputLogin label="E-mail" />
        <InputLogin label="Senha" />
        <ButtonLogin />
      </Form>
    </Container>
  );
}

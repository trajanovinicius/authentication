import { Input, Container } from "./styles";

export function InputLogin({ label }) {
  return (
    <Container>
      <span>{label}</span>
      <Input />
    </Container>
  );
}

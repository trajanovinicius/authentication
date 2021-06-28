import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #7ab1f2;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #ffffff;
  width: 400px;
  height: 530px;
  border-radius: 10px;
  box-shadow: 4px 5px 5px rgb(0, 0, 0, 0.25);
  margin-right: 3rem;

  img {
    width: 75%;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100vh;

  img {
    width: 65%;
  }
`;

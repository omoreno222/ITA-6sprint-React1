import styled from "styled-components";

export const Inicio = styled.div`
  padding: 3rem;
  background-color: lightgray;
`;

export const Radiado = styled.div`
  border: 2px solid black;
  border-radius: 4rem;
  margin: 0.5rem 2rem 0.5rem 2rem;
  text-align: center;
  background-color: ${({ active }) => (active ? "#eeb4b3" : "transparent")};
`;

export const Contenedor = styled.div`
  display: flex;
`;

export const Boton = styled.button`
  width: 50vw;
  padding: 1rem;
  margin: 0.5rem 2rem 0.5rem 2rem;
  text-align: center;
`;

export const BotonInicio = styled(Boton)`
  width: 8vw;
`;

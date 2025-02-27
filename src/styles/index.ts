import styled, { createGlobalStyle } from "styled-components";

/* Resetando a estilização */
const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: Roboto, sans-serif;
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    margin: 20px;
  }
`;

export default EstiloGlobal;

import styled from "styled-components";

export const CardsContainer = styled('div')`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;
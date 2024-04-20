import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 20%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1% 0;
  border-radius: 2%;
  background: var(--bg-color-secondary);
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 150px;
`;

export const ImgWrapper = styled.div`
  background: white;
  min-width: 100%;
  text-align: center;
`;

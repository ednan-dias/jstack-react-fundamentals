import styled from "styled-components";

export default styled.h1`
  color: ${({ color }) => (color ? color : "#637bf3")};
  font-family: "Montserrat";
`;

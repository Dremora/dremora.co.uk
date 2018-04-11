import styled, { css, injectGlobal } from 'styled-components';

injectGlobal`${css`
  body {
    font-family: Helvetica;
    line-height: 1.3;
    background-color: #ffca00;
    margin: 0;
  }
`}`;

const Heading = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Center = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subheading = styled.div``;

const Clients = styled.ul``;
const Client = styled.li``;

export default () => (
  <Center>
    <Heading>Dremora</Heading>
    <Subheading>Software consulting agency</Subheading>
    <Clients>
      <Client>Ericsson</Client>
      <Client>Indigo</Client>
      <Client>Concrete</Client>
      <Client>Kayako</Client>
    </Clients>
  </Center>
);

import styled, { css } from 'styled-components';

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

const Clients = styled.ul`
di
`;
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

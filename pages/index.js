import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 36px;
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

const Subheading = styled.div`
  color: white;
  font-weight: 300;
  font-size: 12px;
`;

const ClientsHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Clients = styled.ul`
  display: flex;
  margin: 0;
`;

const Client = styled.li`
  display: inline;
  margin: 0 10px;
  color: white;
  font-weight: 300;
`;

const GetInTouch = styled.a`
  margin-top: 60px;
  color: #222;
`;

const Highlight = styled.span`
  background: #222;
  color: #ce4848;
`;

export default () => (
  <Center>
    <Heading>
      <Highlight>D</Highlight>remora
    </Heading>
    <Subheading>Software consulting agency</Subheading>
    <ClientsHeader>Prevously worked with</ClientsHeader>
    <Clients>
      <Client>Ericsson</Client>
      <Client>Indigo</Client>
      <Client>Concrete</Client>
      <Client>Kayako</Client>
    </Clients>
    <GetInTouch href="mailto:kirill.korolyov@gmail.com">Get in touch</GetInTouch>
  </Center>
);

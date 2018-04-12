import styled, { css } from 'styled-components';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 50px;
  color: #ffe6e6;
  margin: 0;
  text-transform: uppercase;
  border-bottom: 3px solid #6b2d00;
  font-weight: 900;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
`;

const Subheading = styled.div`
  color: #ffd0ae;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  padding-top: 11px;
`;

const ClientsHeader = styled.div`
  margin-top: 40px;
  margin-bottom: 5px;
  font-size: 22px;
  color: #fffaae;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const Clients = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 0;

  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

const Client = styled.li`
  display: block;
  margin: 5px 10px;
  text-align: center;
`;

const Link = styled.a`
  color: #ffddc5;
  font-weight: 700;
  font-size: 18px;

  &:hover {
    color: #ffe6e6;
  }
`;

const GetInTouch = styled.div`
  margin-top: 30px;

  @media (min-width: 450px) {
    margin-top: 10px;
  }
`;

const Footer = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  font-size: 12px;
  font-weight: 700;
  color: #ffc0c0;
  flex-shrink: 0;
`;

export default () => (
  <Page>
    <Main>
      <Heading>Dremora</Heading>
      <Subheading>Software consulting agency</Subheading>
      <ClientsHeader>Clients</ClientsHeader>
      <Clients>
        <Client>
          <Link rel="noopener" target="_blank" href="https://www.ericsson.com/">
            Ericsson
          </Link>
        </Client>
        <Client>
          <Link rel="noopener" target="_blank" href="https://www.indigo.gt/">
            Indigo
          </Link>
        </Client>
        <Client>
          <Link rel="noopener" target="_blank" href="https://www.concreteplatform.com/">
            Concrete
          </Link>
        </Client>
        <Client>
          <Link rel="noopener" target="_blank" href="https://www.kayako.com/">
            Kayako
          </Link>
        </Client>
        <Client>
          <Link rel="noopener" target="_blank" href="https://www.eurostar.com/">
            Eurostar
          </Link>
        </Client>
      </Clients>
      <GetInTouch>
        <Link rel="noopener" target="_blank" href="mailto:kirill.korolyov@gmail.com">
          Your business?
        </Link>
      </GetInTouch>
    </Main>
    <Footer>© 2018 Dremora Ltd. All Rights Reserved</Footer>
  </Page>
);

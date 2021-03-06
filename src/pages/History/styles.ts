import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};

  background: -moz-linear-gradient(
    23deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.dark600} 100%
  );
  background: -webkit-linear-gradient(
    23deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.dark600} 100%
  );
  background: linear-gradient(
    23deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.dark600} 100%
  );
`;

export const Exit = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    font-size: 38px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.purple200};
  }
`;

export const Content = styled.div`
  background: ${(props) => props.theme.colors.card};
  width: 90vw;
  border-radius: 8px;
  max-width: 480px;
  text-align: center;
  margin: 8rem 0;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.8rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const HistoricList = styled.ul`
  max-width: 90%;
  list-style-type: none;
  padding: 0;
  margin: 1rem auto;
`;

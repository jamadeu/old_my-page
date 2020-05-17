import styled from 'styled-components';

export const Header = styled.header`
  font-size: 16px;
  color: #fff;
  max-width: 450px;
  line-height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  nav {
    svg {
      width: 18px;
      height: 18px;
      margin-right: 20px;
    }
  }
`;

export const Repositories = styled.section`
  width: 500px;
  line-height: 56px;
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    align-self: center;
  }

  div {
    margin-top: 4px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 500px;
    line-height: 16px;
    display: flex;

    a {
      text-decoration: none;
      color: #2f363d;
    }

    p {
      color: #2f363d;
      font-size: 12px;
    }
  }
`;

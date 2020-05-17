import styled from 'styled-components';

export const Header = styled.header`
  font-size: 16px;
  color: #fff;
  max-width: 450px;
  line-height: 30px;
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
    a {
      visibility: hidden;
    }
    svg {
      width: 18px;
      height: 18px;
      margin: 20px;
      visibility: visible;
      transition: transform 0.2s;

      &:hover {
        filter: drop-shadow(0 0 3px black);
        transform: scale(1.5);
      }
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

  a {
    margin-top: 4px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 500px;
    height: 50px;
    line-height: 16px;
    display: flex;
    flex: 1;
    flex-direction: column;

    text-decoration: none;
    color: #2f363d;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    span {
      color: #2f363d;
      font-size: 12px;
    }

    p {
      color: #2f363d;
      font-size: 12px;
    }
  }
`;

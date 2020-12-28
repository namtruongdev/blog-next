import styled from 'styled-components';

export const HeroContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease;
  background: ${(props) => (props.theme === 'dark' ? '#303030' : '#fafafa')};
`;

export const IconMouse = styled.i`
  display: block;
  width: 25px;
  height: 40px;
  border-radius: 25px;
  position: relative;
  border: ${(props) =>
    props.theme === 'dark'
      ? '2px solid rgba(255, 255, 255, 0.87)'
      : '2px solid rgba(0, 0, 0, 0.87)'};

  &:before {
    position: absolute;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3.5px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
    background: ${(props) =>
      props.theme === 'dark'
        ? 'rgba(255, 255, 255, 0.87)'
        : 'rgba(0, 0, 0, 0.87)'};
  }
`;

export const ButtonScroll = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

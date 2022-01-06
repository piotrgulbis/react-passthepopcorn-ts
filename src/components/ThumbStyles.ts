import styled from 'styled-components';

type Props = {
  clickable: boolean;
};

export const Image = styled.img<Props>`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  ${({ clickable }) =>
    clickable
    ? `:hover { opacity: 0.8; }`
    : ``
  };

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

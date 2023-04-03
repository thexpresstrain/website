// Button
// ButtonAsLink
// Link
// LinkAsButton
// HeroButton

import styled from 'styled-components';

const commonStyles = {
  className: 'py-4 px-8 text-white text-base focus:outline-none shadow hover:shadow-lg duration-300',
};

export const Button = styled.button.attrs(commonStyles)`
  background: #68d391;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  color: #000000;
  border: 2px transparent solid;
  :hover {
    background: #013220;
    color: #ffffff;
    border: 2px tomato solid;
    transform: translateY(-0.3rem);
  }
`;

export const LinkButton = styled.a.attrs(commonStyles)`
  background: #68d391;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  color: #000000;
  border: 2px transparent solid;
  :hover {
    background: #013220;
    color: #ffffff;
    border: 2px tomato solid;
    transform: translateY(-0.3rem);
  }
  cursor: pointer;
  display: inline-block;
`;

export const Anchor = styled.a`
  :focus {
    outline: none;
  }
  cursor: pointer;
  color: #1a202c;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px #a0aec0 solid;
  }
  :hover {
    color: #000000;
    border-bottom: 2px #2a4365 solid;
  }
`;

export const HeroButton = styled.button.attrs({
  className: 'rounded-lg text-black py-3 px-6 focus:outline-none duration-200 font-normal uppercase shadow-lg',
})`
  background: #68d391;
  border: 2px transparent solid;
  :hover {
    background: #013220;
    color: #ffffff;
    border: 2px tomato solid;
    transform: scale(1.2);
  }
`;

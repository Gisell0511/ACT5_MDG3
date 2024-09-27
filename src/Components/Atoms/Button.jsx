import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${props => (props.primary ? '#3829e0' : 'transparent')};
  color: ${props => (props.primary ? 'white' : '#737373')};
  border: none;
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => (props.primary ? '#7c5dfa' : '#e2e2e2')};
  }
`;

const Button = ({ children, primary, ...rest }) => (
  <ButtonStyled primary={primary} {...rest}>
    {children}
  </ButtonStyled>
);

export default Button;

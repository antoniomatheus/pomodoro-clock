import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const Setting = styled.div`
  padding-top: 10px;
`;

export const Label = styled.span`
  font-size: 1.5rem;
`;

export const Control = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 10px;
  font-size: 1rem;

  &:active {
    transform: scale(0.8);
  }
`;

export const Value = styled.span`
  font-size: 1.5rem;
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
`;

export const Time = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Black+Ops+One&display=swap');
  font-family: 'Black Ops One', cursive;
  font-size: 3rem;
`;

export const Control = styled.div``;

export const Button = styled.button`
  font-size: 2rem;
  padding: 8px;
  background-color: transparent;
  border: none;
`;

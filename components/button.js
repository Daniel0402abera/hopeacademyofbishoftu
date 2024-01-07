import styled from "styled-components";

export const StyledButton = styled.button`
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  padding: 10px 16px;
  margin: 20px 0px;
  transition: background-color 0.3s ease-in-out;
  background-color: #00008b !important; /* Dark blue */
  color: #fff;
  border: 1px solid #00008b !important; /* Dark blue */

  &:hover,
  &:focus {
    background-color: #0000cd !important; /* Medium blue */
    border-color: #0000cd !important; /* Medium blue */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #6a5acd !important; /* Slate blue */
    border-color: #6a5acd !important; /* Slate blue */
  }
`;
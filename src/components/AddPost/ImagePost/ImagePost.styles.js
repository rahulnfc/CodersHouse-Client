import styled from "styled-components";
import CloseRounded from "@material-ui/icons/CloseRounded";

export const ImagePostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
`;
export const Image = styled.label`
  width: 5rem;
  height: 5rem;
  border: 1px dashed #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const InputFile = styled.input`
  display: none;
`;
export const Preview = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  cursor: pointer;
`;
export const Error = styled.p`
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid #4f80e1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:focus {
    outline: none;
  }
`;
export const Close = styled(CloseRounded)`
  margin-top: -5rem;
  margin-left: -2rem;
  background-color: #0f0f0f;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
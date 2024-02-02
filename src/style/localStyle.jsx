import { styled } from "styled-components";

// 폼
export const StSubmitForm = styled.form`
  background-color: #f8f9fa;
  box-shadow: 2px 2px 2px 2px lightgrey;
  width: 700px;
  height: 200px;
  padding: 40px;
  margin-top: 300px;
  margin-left: 600px;
  border-radius: 10px;
`;

export const StInputTopic = styled.input`
  margin: 10px;
  width: 700px;
`;

export const StInputText = styled.textarea`
  margin: 10px;
  width: 700px;
  height: 100px;
`;

export const StSubmitButton = styled.button`
  margin-left: 650px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #0d6efd;
  color: #ffffff;
  border-color: #0d6efd;
  border-radius: 5px;
  padding: 8px;

  &:hover {
    border-color: #0a58ca;
    background-color: #0b5ed7;
  }
`;

export const StCardItem = styled.div`
  background-color: lightblue;
  width: 300px;
  margin: 10px;
`;

export const StText = styled.p`
  padding: 15px;
  background-color: aliceblue;
  margin: 4px;
`;

export const StTopic = styled.p`
  padding: 15px;
  background-color: aliceblue;
`;

export const StDeleteButton = styled.button`
  cursor: pointer;
  background-color: #fd0d0d;
  border-radius: 5px;
  color: #ffffff;
  margin-left: 140px;
  border-color: #fd0d0d;
  &:hover {
    border-color: #c00909;
    background-color: #c00909;
  }
`;

export const StCardInfo = styled.div`
  padding: 10px;
`;

export const StCardItemTable = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

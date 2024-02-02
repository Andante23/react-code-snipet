import { useEffect, useState } from "react";
import {
  StInputTopic,
  StSubmitForm,
  StSubmitButton,
  StInputText,
  StCardItem,
  StDeleteButton,
  StText,
  StTopic,
  StCardInfo,
  StCardItemTable,
} from "./style/localStyle";
import { Reset } from "styled-reset";

function App() {
  // userIdea ,userPw : 각각 사용자이름 , 사용자 비밀번호 를 저장하는 state 변수
  const [inputTopic, setInputTopic] = useState("");
  const [inputText, setInputText] = useState("");

  // 더미데이터가 들어간 inputData
  const [inputData, setInputData] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(inputData));
  }, [inputData]);

  /*  
    resetInput :    form에 input 값을 리셋시켜주는 함수
    onChangeTopic : 주제를 inputTopic 변수에 저장해주는 함수
    onChangeText :  내용을 inputText 변수에 저장해주는 함수 
    onSubmitData :  입력 데이터를 inputData 변수에 저장해주는 함수
  */
  const resetInput = () => {
    setInputText("");
    setInputTopic("");
  };

  const onChangeTopic = (event) => {
    // event.target.value :  내가 입력한 값을 읽어올수 있는 키워드
    setInputTopic(event.target.value);
  };

  const onChangeText = (event) => {
    setInputText(event.target.value);
  };

  const submitFormHandler = (event) => {
    // 기본 행동 방지
    event.preventDefault();

    // 입력값들이 전부 공백일때 로직
    if (inputTopic.trim() === "" && inputText.trim() === "") {
      window.alert("빈칸을 채워주세요");
      resetInput();
      return;
    }

    const newData = {
      id: inputData.length + 1,
      topic: inputTopic,
      text: inputText,
    };

    setInputData([...inputData, newData]);
    alert("저장");
    resetInput();
  };

  function handleDelete(id) {
    setInputData((prev) => prev.filter((letter) => letter.id !== id));
  }

  return (
    <>
      <Reset />
      <StSubmitForm>
        <StInputTopic
          type="text"
          placeholder="주제"
          value={inputTopic}
          onChange={onChangeTopic}
          required
          maxLength={"50"}
        />
        <br />

        <StInputText
          type="text"
          placeholder="내용"
          value={inputText}
          onChange={onChangeText}
          maxLength={"250"}
          required
        />
        <br />
        <StSubmitButton type="Submit" onClick={submitFormHandler}>
          추가
        </StSubmitButton>
      </StSubmitForm>

      <StCardItemTable>
        {/* 데이터 뿌려주는  부분  */}
        {inputData.map((data) => {
          return (
            <StCardItem key={data.id}>
              <StCardInfo>
                <StText>{data.text}</StText>
                <StTopic>{data.topic}</StTopic>
              </StCardInfo>

              <StDeleteButton
                onClick={() => {
                  handleDelete(data.id);
                }}
              >
                삭제
              </StDeleteButton>
            </StCardItem>
          );
        })}
      </StCardItemTable>
    </>
  );
}

export default App;

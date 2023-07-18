import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";
import "./styles/styles.css";

function App() {
  const [mode, setMode] = useState(false);
  const themeHandler = () => {
    setMode(!mode);
  };

  return (
    <StyledApp
      className={mode ? "darkmode" : "lightmode"}
      style={{ height: "100vh", transition: "0.5s all ease" }}
    >
      <StyledTitle className={mode ? "darkmode" : "lightmode"}>
        <h1>Task Planner</h1>
        <div onClick={themeHandler}>
          {mode ? (
            <FaMoon style={{ width: "3rem", height: "3rem" }} />
          ) : (
            <FaSun style={{ width: "3rem", height: "3rem" }} />
          )}
        </div>
      </StyledTitle>
      <TodoList mode={mode} className={mode ? "darkmode" : "lightmode"} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledTitle = styled.div`
  transition: 0.5s all ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Manrope", sans-serif;
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
  @media screen and (min-width: 769px) {
    h1 {
      width: 63%;
    }
  }
  div {
    cursor: pointer;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin: 0;
    padding: 0;
    display: block;

    h1 {
      font-size: 2rem;
      padding-top: 2rem;
      width: 100vw;
      margin-bottom: 3rem;
    }
    div {
      width: 100%;
      margin: auto auto;
      align-items: center;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;

export default App;

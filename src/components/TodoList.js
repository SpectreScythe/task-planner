import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaTrash, FaBackspace, FaBroom } from "react-icons/fa";
import "../styles/styles.css";

const TodoList = ({ mode }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() != "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const DeleteInput = () => {
    let data = document.getElementById("txtbox");
    data.value = "";
  };

  const ClearHandler = () => {
    setTodos((todos) => []);
  };

  return (
    <StyledTodoList className={mode ? "darkmode" : "lightmode"}>
      <StyledHeader className={mode ? "darkmode" : "lightmode"}>
        <StyledInput
          value={newTodo}
          onChange={handleInputChange}
          id="txtbox"
          placeholder="What's on your mind?"
          type="text"
          className={mode ? "darkmode" : "lightmode"}
        />
        <InputButtons
          onClick={handleAddTodo}
          style={{ backgroundColor: "#008000" }}
        >
          <FaPlus
            style={{
              backgroundColor: "transparent",
              width: "70%",
              height: "70%",
            }}
          />
        </InputButtons>
        <InputButtons onClick={DeleteInput} style={{ backgroundColor: "grey" }}>
          <FaBackspace
            style={{
              backgroundColor: "transparent",
              width: "70%",
              height: "70%",
            }}
          />
        </InputButtons>
        <InputButtons
          onClick={ClearHandler}
          style={{ backgroundColor: "#867e36" }}
        >
          <FaBroom
            style={{
              backgroundColor: "transparent",
              width: "70%",
              height: "70%",
            }}
          />
        </InputButtons>
      </StyledHeader>
      <div className="list-div">
        <StyledTaskList className={mode ? "darkmode" : "lightmode"}>
          {todos.map((todo, index) => (
            <>
              <StyledTask
                key={index}
                className={mode ? "darkmode" : "lightmode"}
              >
                <TaskDetails>
                  {index + 1}. {todo}
                </TaskDetails>
                <ListBtn>
                  <ListButtons
                    className="del-btn"
                    onClick={() => handleDeleteTodo(index)}
                    style={{ backgroundColor: "#ff0800" }}
                  >
                    <FaTrash
                      className="trash-icon"
                      onClick={handleDeleteTodo}
                      style={{
                        backgroundColor: "transparent",
                        width: "70%",
                        height: "70%",
                      }}
                    />
                  </ListButtons>
                </ListBtn>
              </StyledTask>
            </>
          ))}
        </StyledTaskList>
      </div>
    </StyledTodoList>
  );
};

const TaskDetails = styled.div`
  display: block;
  width: 90%;
  display: flex;
  align-items: center;
`;

const ListBtn = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
`;

const StyledTodoList = styled.div`
  transition: 0.5s all ease;
  .list-div {
    display: flex;
    justify-content: center;
    transition: 0.5s all ease;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.5s all ease;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: block;
  }
`;

const InputButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  transition: 0.5s all ease;
  &:hover {
    animation: shake infinite linear 1s;
    cursor: pointer;
    color: ghostwhite;
  }
  @keyframes shake {
    0% {
      transform: rotate(2deg);
    }
    25% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
    75% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 92vw;
  }
`;

const ListButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  border-radius: 10px;
  
  align-items: center;
  transition: 0.5s all ease;
  &:hover {
    animation: shake infinite linear 1s;
    cursor: pointer;
    color: ghostwhite;
  }
  @keyframes shake {
    0% {
      transform: rotate(2deg);
    }
    25% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
    75% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
  .trash-icon {
  }
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 25em;
  height: 2.5rem;
  margin: 0.5rem;
  font-weight: bold;
  font-size: 1.75rem;
  padding: 0.5rem;
  font-family: "Manrope", sans-serif;
  transition: 0.5s all ease;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 92vw;
  }
`;

const StyledTaskList = styled.div`
  transition: 0.5s all ease;
`;

const StyledTask = styled.div`
  overflow-y: hidden;
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 0.5rem;
  width: 56.5rem;
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: 0.5s all ease;
  .del-btn {
  }
  .info-btn {
    margin-left: 1rem;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 88vw;
  }
`;

export default TodoList;

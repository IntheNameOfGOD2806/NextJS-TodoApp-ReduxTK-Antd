"use client";
import { getAllTodos, selectAllTodos } from "@/lib/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./todoList.css";
import { Watermark } from "antd";
export const TodoList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
 const todos=useAppSelector(selectAllTodos)
  return (
    <>
    <Watermark content="DatTT">
   <div className="App-wrapper">
        <div className="Card-wrapper">
          <Card1
            todos={todos}
            // setTodos={setTodos}
          />
          <Card2
            todos={todos}
            //     setTodos={setTodos}
          />
        </div>
      </div>

    </Watermark>
   
    </>
  );
};

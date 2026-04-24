import { useContext } from "react";
import { TaskContext } from "./taskContxt";


export function useTaskContext(){
  return useContext(TaskContext);
}
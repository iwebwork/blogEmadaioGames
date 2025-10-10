import { useContext } from "react";
import MessageContext from ".";

export function useMessage(){
  const context = useContext(MessageContext);
 
  return context;
 }
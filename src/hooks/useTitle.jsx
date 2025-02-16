import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useTitle = (title) => {

  

  useEffect(() => {
    document.title = `${title} - TracConnect`
  },[title]);
  
  return null;
}

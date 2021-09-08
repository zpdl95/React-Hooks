import { useEffect, useRef } from "react";

/* useClick은 어떤 element를 클릭했을때 이벤트를 실행시키기위해 만듬 */
/* useRef()는 document.getElementByID()와 같다 */
/* 그래서 사용하고자 하는 element에 ref={}를 넣어야 한다
   <input ref={element}/>                          */
/* useEffect(_,__)에서 _부분은 Didmount됬을때 실행, __부분은 Update됬을때 실행 */
export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    /* mount 됬을때 이벤트를 추가함 */
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    /* unmount 됬을때 이벤트를 제거함 */
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  /* 요소에 연결하기 위함 */
  return element;
};

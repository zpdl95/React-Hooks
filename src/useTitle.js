import { useState, useEffect } from "react";

/* useTitle은 타이틀이나 내용을 변경시키기 위한 함수 */
/* useState를 이용하여 초기값을 설정하고, useEffect를 이용하여
   API의 전송이 끝났을때와 같은 변경점이 발생하면 API의 내용을 사용
   타이틀이나 내용을 변경하여 출력함 */
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  /* 변경값을 넣기 위해 */
  return setTitle;
};

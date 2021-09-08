import { useEffect, useRef, useState } from "react";
/* useScroll은 페이지의 스크롤을 감지해서 변화를 줌 */
/* 스크롤할때 x,y값을 찾아 값에 따른 css변화를 줌 */
export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

import { useRef } from "react";

/* useFullscreen은 해당 element를 꽉찬화면으로 만들어주는 함수 */
export const useFullscreen = (callback) => {
  const element = useRef();
  /* 콜백으로 받는 함수를 실행시킬 수 있는 함수 */
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  /* 최대화면 실행 */
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
        /* 파이어폭스용 */
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
        /* 오페라용 */
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
        /* 마이크로소프트용 */
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      /* 콜백함수를 true 조건으로 실행 */
      runCb(true);
    }
  };
  /* 최대화면 나가기 */
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      /* 파이어폭스용 */
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
      /* 오페라용 */
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      /* 마이크로소프트용 */
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  /* 최대화면을 설정할 element, 최대화면을 실행시킬 함수(버튼에 onClick속성을 사용해 실행), 최대화면 나가기 할 함수 */
  return { element, triggerFull, exitFull };
};

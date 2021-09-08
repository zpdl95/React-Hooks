/* usePreventLeave는 사용자가 브라우저를 떠날때 브라우저가 닫히지 않고
   경고 or 알림창을 띄워주는 함수 */
/* "아직 저장하지 않았다" 라고 알림창을 띄움 */
/* EventListener에 있는 "beforeunload"이벤트를 사용
   브라우저가 닫히기 전에 함수가 실행되게 해줌 */
export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  /* 사용자가 브라우저를 닫지 않게 하기 위해 사용 */
  /* 예) API전송중 브라우저를 닫는것을 방지 */
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  /* 사용자가 브라우저를 닫아도 되는 상황일때 사용 */
  /* 알림창 띄우는것을 삭제한다 */
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  /* 각각 다른 버튼에 부여하기 위함 */
  return [enablePrevent, disablePrevent];
};

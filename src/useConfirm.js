/* useConfirm은 사용자가 작업을할때 이벤트 실행전 메시지를 보여줌(알림창) */
/* state를 사용하지 않는 함수 */
export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  /* 버튼에 부여하기 위함 */
  return confirmAction;
};

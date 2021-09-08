export const useNotification = (title, options) => {
  /* 브라우저에 알림기능이 없으면 끝 */
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    /* 브라우저의 알림설정이 '허용'일 아닐때 */
    if (Notification.permission !== "granted") {
      /* 사용자에게 알림설정에 대한 요청 */
      /* 그리고 돌아오는 응답(permission)이 '허용'일때 */
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          /* 알림생성 */
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      /* 알림생성 */
      new Notification(title, options);
    }
  };
  return fireNotif;
};

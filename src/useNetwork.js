import { useEffect, useRef, useState } from "react";

/* useNetwork는 현재 네트워크가 온라인인지 오프라인인지를 확인하는 함수 */
export const useNetwork = (onchange) => {
  /*useState를 사용해서 온오프라인 상태를 status에 저장 */
  /* navigator.onLine은 true or false를 반환한다 */
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onchange === "function") {
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  /* 온오프라인 상태를 반환값으로 사용 */
  return status;
};

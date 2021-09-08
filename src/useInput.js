import { useState } from "react";
/* 어떤값을 넣을때 그 값을 state값으로 설정하기 위한 함수 */
/* useState를 이용한 기초적인 함수형 State사용법 */
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  /* input안에 들어있는 value값을 연결하고 변경값을 지정하기 위함 */
  return { value, onChange };
};

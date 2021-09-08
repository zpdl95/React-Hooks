import defaultAxios from "axios";
import { useEffect, useState } from "react";
/* axiosInstance를 요청, 값이 없다면 axios패키지에서 값을 얻어서 전달 */
export const useAxios = (opts, axiosInstance = defaultAxios) => {
  /* API통신에 대한 반응을 받을 기본값을 설정 */
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  /* refetch를 위한 트리거를 생성 */
  const [trigger, setTrigger] = useState(0);
  /* Axios에서 url을 받지 못하면 종료 */
  if (!opts.url) {
    return;
  }
  /* refetch가 실행되면 loading값을 true로 바꾸고 트리거값을 변경함 */
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    /* 랜덤값을 넣어주기 위해 현재시간 값을 줌 */
    setTrigger(Date.now());
  };
  useEffect(() => {
    /* axios에 url을 주고 data를 받음 */
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
    /* 트리거 값을 보다가 트리거 값이 변경되면 axios 재실행 */
  }, [trigger]);
  /* refetch함수를 버튼에 적용해서 트리거 값을 변경시킬수 있음 */
  return { ...state, refetch };
};

import { useState } from "react";
/* useTabs는 여러개의 Tab, section, 화면등
   보여줄 영역이 복수개 일때 state로 설정된 부분만 보여주도록 만드는 함수 */
/* 사용자가 버튼을 사용하여 state값을 변경시키면 화면을 전환할 수 있음 */
export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  /* 탭스 배열에서 현재영역과 변경값을 지정해주기 위함 */
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

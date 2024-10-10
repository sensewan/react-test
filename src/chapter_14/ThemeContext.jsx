import React from "react";

// context의 기본값 설정하지 않음. 메인컨테이너에서 provider를 이용해 설정할 예정 
// provider는 value={} 를 이용해서 하위 컴포넌트들이 사용하게 됨
const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext!!";

export default ThemeContext;
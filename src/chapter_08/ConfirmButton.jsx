import React, { useState } from "react";

// ★★ 함수 컴포넌트로 사용하기 ★★
function ConfirmButton(props) {
    const [isConfirmed, setIsConfiremd] = useState(false);

    const handleConfirm = () => {
        setIsConfiremd((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );

}

export default ConfirmButton;
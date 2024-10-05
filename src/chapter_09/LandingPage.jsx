import React, { useState } from "react";
import Toolbar from "./Tollbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin2 = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout2 = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin2}
                onClickLogout = {onClickLogout2}
            />
            <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    );

}


export default LandingPage;
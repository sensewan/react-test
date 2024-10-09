import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    console.log("celsius가 작동중");
    
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    console.log("fahrenheit이 작동중");
    return (celsius * 9) / 5 + 32;
}

//                                  ↱ 함수를 받아서 사용한다.
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c1");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    // 화씨와 섭씨 동시에 변경해주기 scale이 변경 되면 알아서 작동 하는 것 같음...
    // 아니면 temperature가 변경이 되면 알아서 작동하나??
    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    const fahrenheit =
        scale === "c1" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale3 = "c"
                temperature3 = {celsius}
                onTemperatureChange = {handleCelsiusChange}
            />
            <TemperatureInput 
                scale3 = "f"
                temperature3 = {fahrenheit}
                onTemperatureChange = {handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;

const scaleNames =  {
    c: "섭씨",
    f: "화씨",
};

// props를 통해 scale과, temperature를 받음, 
// 온도값을 변경할 경우 props의 onTemperatureChange 함수를 호출하여 상위컴포넌트로 변경된 값을 전달함
function TemperatureInput(props) {

    const handleChange = (event) => {
        // 상위 컴포넌트를 호출함
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange}></input>
        </fieldset>
    );

}

export default TemperatureInput;

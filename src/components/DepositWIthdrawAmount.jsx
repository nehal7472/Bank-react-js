/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

const DepositWIthdrawAmount = ({
  heading,
  btn,
  color,
  inputField = "Enter Withdraw Balance",
}) => {

  let [val, getVal] = useState("");
  const getValue = () => {
    alert(val);
  };

  const changeVal = (event) => {
    getVal(event.target.value);
  };

  // styled component start
  const Card = styled.div`
    background-color: ${color};
  `;
  // styled component end
  
  return (
    <Card className="bg-red-500 py-10 px-7 rounded-sm">
      <h1 className="text-white text-3xl">{heading}</h1>
      <input
        onChange={changeVal}
        value={val}
        type="Number"
        placeholder={inputField}
        className="input rounded text-lg mt-2 pl-2 py-1 border-slate-50"
      />
      <button
        onClick={getValue}
        className="ml-4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded"
      >
        {btn}
      </button>
    </Card>
  );
};

export default DepositWIthdrawAmount;

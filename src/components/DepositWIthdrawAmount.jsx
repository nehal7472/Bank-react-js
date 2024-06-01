import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const DepositWIthdrawAmount = ({ heading, btn, color }) => {
  const Card = styled.div`
    background-color: ${color};
  `;
  return (
    <Card className="bg-red-500 py-10 px-7 rounded-sm">
      <h1 className="text-white text-3xl">{heading}</h1>
      <input
        type="Number"
        placeholder="Enter balance"
        className="input rounded text-lg mt-2 pl-2 py-1 border-slate-50"
      />
      <button className="ml-4 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded">
        {btn}
      </button>
    </Card>
  );
};

export default DepositWIthdrawAmount;

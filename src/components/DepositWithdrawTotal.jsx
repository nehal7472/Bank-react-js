import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const DepositWithdrawTotal = ({ heading, totalBalance = "00", color }) => {
  
  const Card = styled.div`
    background-color: ${color};
  `;

  return (
    <>
      <Card className="py-7 px-7 rounded-md w-80">
        <h1 className="text-white text-3xl">{heading}</h1>
        <h1 className="text-white text-3xl mt-3 ">
          $<span>{totalBalance}</span>
        </h1>
      </Card>
    </>
  );
};

export default DepositWithdrawTotal;

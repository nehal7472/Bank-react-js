import DepositWithdrawTotal from "./components/DepositWithdrawTotal";
import DepositWIthdrawAmount from "./components/DepositWIthdrawAmount";

function App() {
  return (
    <>
      <h1 className="mt-16 text-4xl text-center text-lime-600">
        Brac Bank LTD
      </h1>
      <div className="mt-16 w-3/4 mx-auto grid justify-items-center grid-cols-3 gap-2">
        <DepositWithdrawTotal heading="Deposit Total" color="#00BC7B " />
        <DepositWithdrawTotal heading="Withdraw Total" color="#5257EA  " />
        <DepositWithdrawTotal
          heading="Total Balance"
          totalBalance="1150"
          color="#4CD100 "
        />
      </div>
      <div className="mt-16 w-4/6 mx-auto grid grid-cols-2 justify-items-center gap-16">
        <DepositWIthdrawAmount heading="Deposit Balance" btn="Deposit" color = '#C71585'/>
        <DepositWIthdrawAmount heading="Withdraw Balance" btn="Withdraw" color = '#6B8E23'/>
      </div>
    </>
  );
}

export default App;

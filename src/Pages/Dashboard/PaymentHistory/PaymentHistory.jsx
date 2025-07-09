import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Payment History</h2>
    </div>
  );
};

export default PaymentHistory;

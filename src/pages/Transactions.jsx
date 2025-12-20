import { useEffect, useState } from "react";
import api from "../context/api";
import "./Transactions.css"; // <-- import CSS

const Transactions = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/admin/transactions");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/admin/stats/monthly");
        console.log(res);
        setAmount(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="transactions-container">
      <h2 className="transactions-title">Donation Transactions</h2>
      <h3 className="transactions-subtitle">
        Total Donations This Month: ₹{amount.amount || 0}
      </h3>
      <div className="table-wrapper">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Donor</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Order ID</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-data">
                  No transactions yet.
                </td>
              </tr>
            ) : (
              data.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.donorName}</td>
                  <td>{t.donorEmail}</td>
                  <td>{t.donorPhone}</td>
                  <td>{t.amount / 100}</td>
                  <td className={t.status === "PAID" ? "paid" : "failed"}>
                    {t.status}
                  </td>
                  <td>{t.razorpayOrderId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

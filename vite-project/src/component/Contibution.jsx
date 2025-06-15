import React, { useState } from "react";

const Contribution = ({ contributionsData, membersData }) => {
  const [monthFilter, setMonthFilter] = useState("all");

  // Get member photo by name
  const getMemberPhoto = (memberName) => {
    const member = membersData.find(m => m.name.split(' ')[0] === memberName);
    return member ? member.photo : 'https://via.placeholder.com/50';
  };

  // Filter logic
  const filteredContributions = contributionsData.filter((item) => {
    if (monthFilter === "all") return true;
    return item.date.startsWith(monthFilter);
  });

  // Totals
  const monthlyTotal = filteredContributions.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace("$", ""));
  }, 0);

  const overallTotal = contributionsData.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace("$", ""));
  }, 0);

  return (
    <section id="contributions" className="page active ">
      <div className="table-container">
        <div className="table-header">
          <h2>Contributions</h2>
          <div className="controls">
            <div className="filter-dropdown">
              <select
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="2023-01">January 2023</option>
                <option value="2023-02">February 2023</option>
                <option value="2023-03">March 2023</option>
              </select>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Member</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {filteredContributions.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="member-photo">
                    <img 
                      src={getMemberPhoto(item.member)} 
                      alt={item.member}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/50';
                      }}
                    />
                  </div>
                </td>
                <td>{item.member}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}

            <tr className="total-row">
              <td colSpan="2" style={{ textAlign: "right", fontWeight: 600 }}>
                Monthly Total:
              </td>
              <td></td>
              <td>${monthFilter === "all" ? 0 : monthlyTotal}</td>
              <td></td>
            </tr>

            <tr className="total-row">
              <td colSpan="2" style={{ textAlign: "right", fontWeight: 600 }}>
                Overall Total:
              </td>
              <td></td>
              <td>${overallTotal}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contribution;
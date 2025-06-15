import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

const StatusBadge = ({ status }) => (
  <span className={`status-badge ${status}`}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);

const Member = ({ membersData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const filteredMembers = membersData
    .filter((member) => {
      const matchesSearch = member.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || member.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

  const clearSearch = () => setSearchTerm("");

  return (
    <section id="members" className="page  active ">
      <div className="table-container">
        <div className="table-header">
          <div className="header-left">
            <h2>Group Members</h2>
            <div className="results-count">
              Showing {filteredMembers.length} of {membersData.length} members
            </div>
          </div>
          <div className="controls">
            <div className={`search-box ${searchTerm ? "active" : ""}`}>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search members"
              />
              {searchTerm && (
                <button
                  className="clear-search"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </div>
            <div className="filter-dropdown">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Filter by status"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="th-content">Photo</div>
                </th>
                <th>
                  <div className="th-content">Name</div>
                </th>
                <th>
                  <div className="th-content">Join Date</div>
                </th>
                <th>
                  <div className="th-content">Status</div>
                </th>
                <th>
                  <div className="th-content">Contributions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <div className="member-photo">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://via.placeholder.com/50";
                          }}
                        />
                      </div>
                    </td>
                    <td>{member.name}</td>
                    <td>{member.joinDate}</td>
                    <td>
                      <StatusBadge status={member.status} />
                    </td>
                    <td>{member.contributions}</td>
                  </tr>
                ))
              ) : (
                <tr className="no-results">
                  <td colSpan="5">
                    <div className="no-results-content">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%23ccc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E"
                        alt="No results"
                      />
                      <p>No members found</p>
                      <button onClick={clearSearch} className="reset-btn">
                        🔄Reset
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Member;
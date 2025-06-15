import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faUsers,
  faChartLine,
  faUserFriends,
  faMoneyBillWave,
  faChartPie,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const quickLinks = [
  { id: "members", icon: faUserFriends, title: "Member List" },
  { id: "contributions", icon: faMoneyBillWave, title: "Contributions" },
  { id: "fund-summary", icon: faChartPie, title: "Fund Summary" },
  { id: "gallery", icon: faImages, title: "Gallery" },
];

const Home = ({ 
  activePage,  // Added activePage prop
  memberCount, 
  monthlyTotal, 
  contributionsData, 
  setActivePage 
}) => {
  const overallTotal = contributionsData.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace('$', ''));
  }, 0);

  const stats = [
    { icon: faWallet, title: "Total Fund", value: `$${overallTotal}` },
    { icon: faUsers, title: "Number of Members", value: memberCount },
    { icon: faChartLine, title: "Monthly Contributions", value: `$${monthlyTotal}` },
  ];

  const handleQuickLinkClick = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
  };

return (
   
    <section id="home" className="page active">
      <div className="hero">
        <div className="hero-text">
          <h3>Transparency, Trust, Togetherness</h3>
          <p>
            Manage group finances with ease. Track contributions, monitor
            funds, and keep everyone informed in one place.
          </p>
        </div>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <FontAwesomeIcon icon={stat.icon} className="icon" />
            <h3>{stat.title}</h3>
            <div className="value">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="quick-links">
        {quickLinks.map((link, index) => (
          <div
            className="link-card"
            key={index}
            onClick={() => handleQuickLinkClick(link.id)}
          >
            <FontAwesomeIcon icon={link.icon} className="icon" />
            <h3>{link.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
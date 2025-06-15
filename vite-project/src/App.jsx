// src/App.js
import { useState } from "react";
import Header from "./component/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import "./App.css";
import Home from "./component/Home";
import Membeer from "./component/Membeer";
import Footert from "./component/Footert";
import Contract from "./component/Contract";
import Gallery from "./component/Gallery";
import Contribution from "./component/Contibution"; // FIXED SPELLING HERE

const membersData = [
  {
    id: 1,
    name: "Alex Johnson",
    joinDate: "Jan 15, 2023",
    status: "active",
    contributions: "$1,200",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 2,
    name: "Maria Garcia",
    joinDate: "Feb 02, 2023",
    status: "active",
    contributions: "$950",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "David Smith",
    joinDate: "Mar 10, 2023",
    status: "active",
    contributions: "$1,050",
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 4,
    name: "Sarah Williams",
    joinDate: "Apr 22, 2023",
    status: "pending",
    contributions: "$250",
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 5,
    name: "James Brown",
    joinDate: "Jan 15, 2023",
    status: "inactive",
    contributions: "$700",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 6,
    name: "Emily Chen",
    joinDate: "May 05, 2023",
    status: "active",
    contributions: "$1,800",
    photo: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    id: 7,
    name: "Michael Taylor",
    joinDate: "Jun 12, 2023",
    status: "pending",
    contributions: "$500",
    photo: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    joinDate: "Jul 04, 2023",
    status: "active",
    contributions: "$1,100",
    photo: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    id: 9,
    name: "Daniel Lee",
    joinDate: "Aug 20, 2023",
    status: "active",
    contributions: "$1,300",
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    id: 10,
    name: "Sophia Davis",
    joinDate: "Sep 14, 2023",
    status: "pending",
    contributions: "$400",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: 11,
    name: "Matthew Wilson",
    joinDate: "Oct 01, 2023",
    status: "inactive",
    contributions: "$600",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 12,
    name: "Isabella Moore",
    joinDate: "Nov 09, 2023",
    status: "active",
    contributions: "$1,900",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 13,
    name: "Ethan Anderson",
    joinDate: "Dec 05, 2023",
    status: "active",
    contributions: "$1,400",
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

const contributionsData = [
  {
    date: "2023-01-15",
    member: "Alex",
    amount: "$1200",
    remarks: "Full monthly payment",
  },
  {
    date: "2023-02-10",
    member: "Maria",
    amount: "$950",
    remarks: "Late by 3 days",
  },
  {
    date: "2023-02-20",
    member: "David",
    amount: "$1050",
    remarks: "Paid in two parts",
  },
  {
    date: "2023-03-05",
    member: "Sarah",
    amount: "$700",
    remarks: "Partial contribution",
  },
];

const folders = {
  Folder1: [
    {
      img: "https://picsum.photos/id/1015/400/300",
      title: "Mountain View",
      date: "2023-01-01",
    },
    {
      img: "https://picsum.photos/id/1016/400/300",
      title: "Forest Path",
      date: "2023-01-05",
    },
    {
      img: "https://picsum.photos/id/1018/400/300",
      title: "Beach Sunset",
      date: "2023-01-10",
    },
    {
      img: "https://picsum.photos/id/1019/400/300",
      title: "City Skyline",
      date: "2023-01-12",
    },
    {
      img: "https://picsum.photos/id/1020/400/300",
      title: "Foggy Trees",
      date: "2023-01-15",
    },
    {
      img: "https://picsum.photos/id/1024/400/300",
      title: "Desert Dunes",
      date: "2023-01-20",
    },
    {
      img: "https://picsum.photos/id/1025/400/300",
      title: "Snowy Mountain",
      date: "2023-01-25",
    },
    {
      img: "https://picsum.photos/id/1027/400/300",
      title: "River Stream",
      date: "2023-01-30",
    },
    {
      img: "https://picsum.photos/id/1035/400/300",
      title: "Sunflower Field",
      date: "2023-02-01",
    },
    {
      img: "https://picsum.photos/id/1037/400/300",
      title: "Ocean Waves",
      date: "2023-02-05",
    },
  ],
  Folder2: [
    {
      img: "https://picsum.photos/id/1040/400/300",
      title: "Starry Night",
      date: "2023-02-10",
    },
    {
      img: "https://picsum.photos/id/1041/400/300",
      title: "Golden Gate",
      date: "2023-02-12",
    },
    {
      img: "https://picsum.photos/id/1042/400/300",
      title: "Autumn Leaves",
      date: "2023-02-15",
    },
    {
      img: "https://picsum.photos/id/1043/400/300",
      title: "Snow Forest",
      date: "2023-02-18",
    },
    {
      img: "https://picsum.photos/id/1044/400/300",
      title: "City Bridge",
      date: "2023-02-20",
    },
    {
      img: "https://picsum.photos/id/1045/400/300",
      title: "Waterfall",
      date: "2023-02-22",
    },
    {
      img: "https://picsum.photos/id/1046/400/300",
      title: "Rocky Coast",
      date: "2023-02-25",
    },
    {
      img: "https://picsum.photos/id/1047/400/300",
      title: "Foggy Morning",
      date: "2023-02-28",
    },
    {
      img: "https://picsum.photos/id/1048/400/300",
      title: "Sunset Glow",
      date: "2023-03-01",
    },
    {
      img: "https://picsum.photos/id/1049/400/300",
      title: "City Lights",
      date: "2023-03-05",
    },
  ],
};

function App() {
  const [activePage, setActivePage] = useState("home");

  const monthlyTotal = contributionsData
    .filter((item) => item.date.startsWith("2023-02"))
    .reduce((sum, item) => sum + parseInt(item.amount.replace("$", "")), 0);

  // Render only the active page
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <Home
            contributionsData={contributionsData}
            memberCount={membersData.length}
            monthlyTotal={monthlyTotal}
            setActivePage={setActivePage}
          />
        );
      case "members":
        return <Membeer membersData={membersData} />;
      case "contributions":
        return (
          <Contribution
            contributionsData={contributionsData}
            membersData={membersData}
          />
        );
      case "gallery":
        return <Gallery folders={folders} />;
      case "contact":
        return <Contract />;
      default:
        return (
          <Home
            contributionsData={contributionsData}
            memberCount={membersData.length}
            monthlyTotal={monthlyTotal}
            setActivePage={setActivePage}
          />
        );
    }
  };

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="page-container">{renderPage()}</main>
      <Footert />
    </>
  );
}

export default App;

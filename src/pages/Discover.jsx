import React, { useState } from "react";
import DiscoverHeader from "../comp_anurag/DiscoverHeader.jsx"; // Import
import { X } from "lucide-react";
import Footer from "../comp_vishnu/AppFooter.jsx";

export default function Discover() {
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("Music");

  const profiles = [
    {
      name: "Halima",
      age: 19,
      city: "BERLIN",
      distance: "16 km Away",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vanessa",
      age: 18,
      city: "MUNICH",
      distance: "4.8 km Away",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James",
      age: 20,
      city: "HANOVER",
      distance: "2.2 km Away",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Clara",
      age: 21,
      city: "HAMBURG",
      distance: "6 km Away",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Alex",
      age: 23,
      city: "FRANKFURT",
      distance: "3 km Away",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const interests = [
    { name: "Football", icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png" },
    { name: "Nature", icon: "https://cdn-icons-png.flaticon.com/512/427/427735.png" },
    { name: "Language", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png" },
    { name: "Photography", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png" },
    { name: "Music", icon: "https://cdn-icons-png.flaticon.com/512/727/727245.png" },
    { name: "Writing", icon: "https://cdn-icons-png.flaticon.com/512/1828/1828911.png" },
  ];

  return (
    <div className="page">
      
      {/* ✅ NEW NAV HEADER */}
      <DiscoverHeader
        title="Discover"
        location="Germany"
        onSearch={() => setShowSearch(true)}
        onFilter={() => setShowFilter(true)}
        onProfileClick={() => console.log("Go to profile")}
      />

      {/* SEARCH */}
      {showSearch && (
        <div className="overlayBox">
          <div className="searchBox">
            <input placeholder="Search people..." />
            <X onClick={() => setShowSearch(false)} />
          </div>
        </div>
      )}

      {/* FILTER */}
      {showFilter && (
        <div className="overlayBox">
          <div className="filterBox">
            <div className="filterHeader">
              <h3>Filters</h3>
              <X onClick={() => setShowFilter(false)} />
            </div>

            <div className="filterSection">
              <p>Location</p>
              <label><input type="checkbox" /> Nearby (10km)</label>
              <label><input type="checkbox" /> Same City</label>
            </div>

            <div className="filterSection">
              <p>Interests</p>
              <label><input type="checkbox" /> Music</label>
              <label><input type="checkbox" /> Sports</label>
              <label><input type="checkbox" /> Travel</label>
            </div>

            <button className="applyBtn">Apply Filters</button>
          </div>
        </div>
      )}

      {/* PROFILE CARDS */}
      <div className="cardWrapper">
        <div className="cardGrid">
          {profiles.map((p, i) => (
            <div className="card" key={i}>
              <img src={p.image} alt="" />
              <span className="badge">NEW</span>

              <div className="overlay">
                <span className="distance">{p.distance}</span>
                <div className="name">
                  {p.name}, {p.age}
                </div>
                <div className="city">{p.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTEREST */}
      <div className="interestHeader">
        <h3>Interest</h3>
      </div>

      <div className="interestGrid">
        {interests.map((item, i) => (
          <button
            key={i}
            className={
              selectedInterest === item.name
                ? "interest active"
                : "interest"
            }
            onClick={() => setSelectedInterest(item.name)}
          >
            <img src={item.icon} alt="" />
            {item.name}
          </button>
        ))}
      </div>

      {/* AROUND ME */}
      <div className="around">
        <h3>Around me</h3>
        <p>
          People with <b>"{selectedInterest}"</b> interest around you
        </p>

        <div className="map">
          <div className="bubble">Connect with Clara 👋</div>

          {profiles.slice(0, 3).map((p, i) => (
            <div className={`avatar a${i + 1}`} key={i}>
              <img src={p.image} alt="" />
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* ✅ STYLES */}
      <style>{`
*{ box-sizing:border-box; }

body{
  margin:0;
  background:#f7f7fb;
}

.page{
  padding:40px 60px;
  max-width:1400px;
  margin:auto;
  font-family:sans-serif;
  padding-bottom:110px;
}

/* OVERLAY */
.overlayBox{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:1000;
}

/* SEARCH */
.searchBox{
  background:white;
  padding:15px;
  border-radius:12px;
  width:300px;
  display:flex;
  justify-content:space-between;
}

.searchBox input{
  border:none;
  outline:none;
  width:90%;
}

/* FILTER */
.filterBox{
  background:white;
  padding:20px;
  border-radius:16px;
  width:320px;
}

.filterHeader{
  display:flex;
  justify-content:space-between;
}

.filterSection{
  margin-top:15px;
}

.applyBtn{
  margin-top:20px;
  width:100%;
  padding:10px;
  border:none;
  border-radius:10px;
  background:#d06bb0;
  color:white;
}

/* CARDS */
.cardWrapper{
  overflow-x:auto;
  padding-bottom:10px;
}

.cardGrid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
  gap:20px;
}

.card{
  position:relative;
  border-radius:18px;
  overflow:hidden;
  height:280px;
  transition:0.3s;
}

.card:hover{
  transform:scale(1.05);
}

.card img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.badge{
  position:absolute;
  top:12px;
  left:12px;
  background:#a24bbf;
  color:white;
  padding:4px 10px;
  border-radius:12px;
  font-size:12px;
}

.overlay{
  position:absolute;
  bottom:0;
  width:100%;
  padding:16px;
  color:white;
  background:linear-gradient(transparent,rgba(70,0,70,0.9));
}

/* INTEREST */
.interestGrid{
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  margin-bottom:35px;
}

.interest{
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 16px;
  border-radius:25px;
  border:1px solid #ddd;
  background:white;
  cursor:pointer;
}

.interest img{
  width:18px;
  height:18px;
}

.interest.active{
  background:#d06bb0;
  color:white;
  border:none;
}

.interest.active img{
  filter:brightness(0) invert(1);
}

/* MAP */
.map{
  margin-top:15px;
  height:260px;
  border-radius:20px;
  background:#e9e9e9;
  position:relative;
}

.bubble{
  position:absolute;
  top:30px;
  left:30px;
  background:#5a1c5e;
  color:white;
  padding:10px 18px;
  border-radius:20px;
}

/* AVATAR */
.avatar{
  position:absolute;
  width:50px;
  height:50px;
  border-radius:50%;
  overflow:hidden;
  border:3px solid white;
}

.avatar img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.a1{ bottom:40px; left:50px; }
.a2{ top:80px; right:60px; }
.a3{ bottom:30px; right:120px; }

/* RESPONSIVE */
@media(max-width:768px){
  .page{ padding:20px; }

  .cardGrid{
    display:flex;
  }

  .card{
    min-width:180px;
    height:240px;
  }
}

@media(max-width:480px){
  .card{
    min-width:150px;
    height:220px;
  }
}
`}</style>
    </div>
  );
}
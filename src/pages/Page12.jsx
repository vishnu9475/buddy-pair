import React from "react";
import { Menu, Bell } from "lucide-react";
import BottomNavigationBar from "../comp_anurag/BottomNavigationBar";

const cards = [
  { img: "https://i.pravatar.cc/300?img=32", name: "Swathi" },
  { img: "https://i.pravatar.cc/300?img=47", name: "Priya Sharma" },
  { img: "https://i.pravatar.cc/300?img=48", name: "Srathi Kapoor" },
  { img: "https://i.pravatar.cc/300?img=26", name: "Ananya Reddy" },
  { img: "https://i.pravatar.cc/300?img=25", name: "Shifali Verma" },
  { img: "https://i.pravatar.cc/300?img=45", name: "Isha Patel" },
];

const stories = [
  { name: "My Story", img: "https://i.pravatar.cc/100?img=1" },
  { name: "Selena", img: "https://i.pravatar.cc/100?img=5" },
  { name: "Clara", img: "https://i.pravatar.cc/100?img=6" },
  { name: "Fabian", img: "https://i.pravatar.cc/100?img=12" },
  { name: "George", img: "https://i.pravatar.cc/100?img=15" },
];

function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.headerLeft}>
        <Menu size={22} />
        <h2 style={styles.logo}>BuddyPair</h2>
      </div>

      <div style={styles.headerRight}>
        <div style={styles.iconCircle}>
          <Bell size={18} />
        </div>

        <img
          src="https://i.pravatar.cc/100?img=3"
          style={styles.avatar}
        />
      </div>
    </div>
  );
}

function Stories() {
  return (
    <div style={styles.storyContainer}>
      {stories.map((story, i) => (
        <div key={i} style={styles.storyItem}>
          <div style={styles.storyRing}>
            <img src={story.img} style={styles.storyImg} />
          </div>
          <span style={styles.storyText}>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

function ProfileCard({ img, name }) {
  return (
    <div style={{ ...styles.card, backgroundImage: `url(${img})` }}>
      <div style={styles.online}>Online</div>

      <div style={styles.cardBottom}>
        <h4 style={styles.name}>{name}</h4>
        <span style={styles.details}>DEVELOPER · HYDERABAD</span>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <div style={styles.grid}>
      {cards.map((c, i) => (
        <ProfileCard key={i} img={c.img} name={c.name} />
      ))}
    </div>
  );
}

export default function Page12() {
  return (
    <div style={styles.container}>
      <Header />
      <Stories />
      <CardGrid />

      {/* Bottom Navigation Component */}
      <BottomNavigationBar />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "1440px",
    margin: "auto",
    padding: "15px 30px",
    fontFamily: "sans-serif",
    background: "#f6f3f7",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    margin: 0,
    fontWeight: 600,
    fontSize: 22,
    color: "#5e2b66",
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
  },

  storyContainer: {
    display: "flex",
    gap: 18,
    overflowX: "auto",
    padding: "12px 0",
  },

  storyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  storyRing: {
    padding: 4,
    borderRadius: "50%",
    background: "linear-gradient(45deg,#ff7ecb,#ffb199)",
  },

  storyImg: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    border: "3px solid white",
  },

  storyText: {
    marginTop: 6,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
    paddingBottom: 120,
  },

  card: {
    height: 220,
    borderRadius: 18,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
  },

  online: {
    background: "rgba(0,0,0,0.5)",
    color: "white",
    fontSize: 12,
    padding: "4px 10px",
    borderRadius: 10,
    margin: 10,
  },

  cardBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "linear-gradient(transparent,rgba(0,0,0,0.7))",
    color: "white",
    padding: 12,
  },

  name: {
    margin: 0,
  },

  details: {
    fontSize: 12,
  },
};
import React from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";

const groups = [
  {
    name: "Team Align",
    time: "Today, 09:30 AM",
    img1: "https://i.pravatar.cc/100?img=12",
    img2: "https://i.pravatar.cc/100?img=13",
  },
];

const personals = [
  {
    name: "Jhon Abraham",
    time: "Today, 07:30 AM",
    img: "https://i.pravatar.cc/100?img=11",
    color: "#22C55E",
  },
  {
    name: "Sabila Sayma",
    time: "Yesterday, 07:35 PM",
    img: "https://i.pravatar.cc/100?img=5",
    color: "#EF4444",
  },
  {
    name: "Alex Linderson",
    time: "Monday, 09:30 AM",
    img: "https://i.pravatar.cc/100?img=8",
    color: "#6366F1",
  },
  {
    name: "Jhon Abraham",
    time: "03/07/22, 07:30 AM",
    img: "https://i.pravatar.cc/100?img=14",
    color: "#EF4444",
  },
  {
    name: "John Borino",
    time: "Monday, 09:30 AM",
    img: "https://i.pravatar.cc/100?img=17",
    color: "#6366F1",
  },
];

const ContactList = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* GROUPS */}
        <p style={styles.sectionTitle}>Groups</p>

        {groups.map((item, index) => (
          <div key={index} style={styles.row}>
            <div style={styles.groupAvatar}>
              <img src={item.img1} style={styles.avatar} />
              <img src={item.img2} style={styles.avatarOverlap} />
            </div>

            <div style={styles.info}>
              <p style={styles.name}>{item.name}</p>
              <p style={styles.time}>{item.time}</p>
            </div>

            <div style={styles.actions}>
              <FaPhoneAlt style={styles.icon} />
              <FaVideo style={styles.icon} />
            </div>
          </div>
        ))}

        {/* PERSONALS */}
        <p style={styles.sectionTitle}>Personals</p>

        {personals.map((item, index) => (
          <div key={index} style={styles.row}>
            <img src={item.img} style={styles.avatar} />

            <div style={styles.info}>
              <p style={styles.name}>{item.name}</p>

              <p style={styles.time}>
                <FaPhoneAlt
                  style={{
                    marginRight: 6,
                    fontSize: 11,
                    color: item.color,
                  }}
                />
                {item.time}
              </p>
            </div>

            <div style={styles.actions}>
              <FaPhoneAlt style={styles.icon} />
              <FaVideo style={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;

const styles = {
  wrapper: {
    background: "#5B1A57",
    paddingTop: 20,
    minHeight: "100vh",
  },

  container: {
    background: "#F3F3F3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: "20px",
  },

  sectionTitle: {
    fontWeight: "600",
    color: "#555",
    marginBottom: 10,
    marginTop: 15,
  },

  row: {
    display: "flex",
    alignItems: "center",
    padding: "14px 0",
    borderBottom: "1px solid #E5E5E5",
  },

  groupAvatar: {
    position: "relative",
    width: 55,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: "50%",
    objectFit: "cover",
  },

  avatarOverlap: {
    width: 45,
    height: 45,
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    left: 20,
    border: "2px solid #F3F3F3",
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    margin: 0,
    fontWeight: 600,
    fontSize: 15,
    color: "#333",
  },

  time: {
    margin: 0,
    fontSize: 12,
    color: "#888",
    marginTop: 4,
    display: "flex",
    alignItems: "center",
  },

  actions: {
    display: "flex",
    gap: 18,
  },

  icon: {
    color: "#9B9B9B",
    cursor: "pointer",
  },
};
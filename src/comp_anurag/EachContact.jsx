import React, { useState } from "react";
import { Heart, X } from "lucide-react";

const EachContact = ({ name, bio, image, onClick, showActions = true }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleReject = (e) => {
    e.stopPropagation();
    alert(`${name} rejected`);
  };

  return (
    <div style={styles.card} onClick={onClick}>
      <div style={styles.left}>
        <img src={image} alt={name} style={styles.avatar} />

        <div>
          <div style={styles.name}>{name}</div>
          <div style={styles.bio}>{bio}</div>
        </div>
      </div>

      {/* Buttons (optional) */}
      {showActions && (
        <div style={styles.actions}>
          <Heart
            size={20}
            onClick={handleLike}
            style={{
              ...styles.icon,
              color: liked ? "#ff4d6d" : "#bbb",
              fill: liked ? "#ff4d6d" : "none",
            }}
          />

          <X size={20} style={styles.icon} onClick={handleReject} />
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: "50%",
    objectFit: "cover",
  },

  name: {
    fontWeight: 600,
    fontSize: 16,
    color: "#333",
  },

  bio: {
    fontSize: 13,
    color: "#777",
  },

  actions: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },

  icon: {
    cursor: "pointer",
    color: "#bbb",
  },
};

export default EachContact;
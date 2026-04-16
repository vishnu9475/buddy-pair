import React, { useMemo, useRef, useState } from "react";
import AppFooter from "../comp_anurag/AppFooter";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Page43 = () => {
  const navigate = useNavigate();
  const messageItemRefs = useRef({});
  const [highlightedChatId, setHighlightedChatId] = useState(null);

  const recentProfiles = useMemo(
    () => [
      {
        id: 0,
        name: null,
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop",
        likes: 32, // heart card like in the photo
      },
      {
        id: 1,
        name: "Alfredo",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 2,
        name: "Clara",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 3,
        name: "Brandon",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
      },
      {
        id: 4,
        name: "Amina",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ],
    []
  );

  const messages = useMemo(
    () => [
      {
        id: 1,
        name: "Alfredo Calzoni",
        message: "What about that new jacket if I ...",
        time: "09:18",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        unread: true,
      },
      {
        id: 2,
        name: "Clara Hazel",
        message: "I know right 😉",
        time: "12:44",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        unread: true,
      },
      {
        id: 3,
        name: "Brandon",
        message: "Already registered, can’t wai...",
        time: "08:06",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        unread: true,
      },
      {
        id: 4,
        name: "Amina Mina",
        message: "It will have two lines of heading ...",
        time: "09:32",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        unread: true,
      },
      {
        id: 5,
        name: "Savanna Hall",
        message: "Let’s catch up later this eve...",
        time: "09:21",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        unread: false,
      },
    ],
    []
  );

  const focusChat = (chatId) => {
    setHighlightedChatId(chatId);
    const el = messageItemRefs.current[chatId];
    if (el?.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    window.setTimeout(() => setHighlightedChatId(null), 900);
  };

  const openChat = (chatId) => {
    focusChat(chatId);
  };

  return (
    <>
      <div style={styles.screen}>
        {/* Header (purple) */}
        <div style={styles.header}>
          <button
            type="button"
            style={styles.headerIconBtn}
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft size={20} color="#fff" />
          </button>

          <h2 style={styles.headerTitle}>Messages</h2>

          <button
            type="button"
            style={styles.headerIconBtn}
            onClick={() => {}}
            aria-label="More"
          >
            <span style={{ color: "#fff", fontSize: 18 }}>⋯</span>
          </button>
        </div>

        {/* Recent Messages (profile list style) */}
        <div style={styles.recentSection}>
          <h4 style={styles.recentTitle}>Recent Messages</h4>
          <div style={styles.profileRow}>
            {recentProfiles.map((profile) => (
              <button
                key={profile.id}
                type="button"
                style={styles.profileCardBtn}
                onClick={() => focusChat(profile.id)}
                aria-label={`Open recent messages for ${profile.name}`}
              >
                <img src={profile.image} alt={profile.name} style={styles.profileImage} />
                {typeof profile.likes === "number" && (
                  <div style={styles.likeBadge}>❤️ {profile.likes}</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Message list (curved card start) */}
        <div style={styles.messageContainer}>
          {messages.map((chat) => (
            <button
              key={chat.id}
              type="button"
              ref={(el) => {
                if (el) messageItemRefs.current[chat.id] = el;
              }}
              style={{
                ...styles.messageItem,
                ...(highlightedChatId === chat.id ? styles.messageItemHighlighted : {}),
              }}
              onClick={() => openChat(chat.id)}
              aria-label={`Open chat with ${chat.name}`}
            >
              <img src={chat.image} alt={chat.name} style={styles.chatImage} />

              <div style={styles.chatInfo}>
                <div style={styles.chatHeader}>
                  <h4 style={styles.chatName}>{chat.name}</h4>
                  <span style={styles.chatTime}>{chat.time}</span>
                </div>
                <p style={styles.chatMessage}>{chat.message}</p>
              </div>

              {chat.unread && <div style={styles.unreadDot} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>

      <AppFooter />
    </>
  );
};

export default Page43;

const styles = {
  screen: {
    fontFamily: "sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingBottom: 110,
  },

  header: {
    backgroundColor: "#5A1E5C",
    padding: "18px 16px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
  },

  headerTitle: {
    margin: 0,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: 0.2,
  },

  headerIconBtn: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.35)",
    borderRadius: "999px",
    width: 38,
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  recentSection: {
    padding: "8px 16px 16px",
    backgroundColor: "#5A1E5C",
    color: "#fff",
  },

  recentTitle: {
    margin: "0 0 10px",
    fontWeight: 600,
  },

  profileRow: {
    display: "flex",
    gap: 12,
    overflowX: "auto",
    paddingBottom: 4,
  },

  profileCardBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    position: "relative",
    padding: 0,
    flex: "0 0 auto",
  },

  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    objectFit: "cover",
    display: "block",
  },

  likeBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    padding: "2px 6px",
    borderRadius: 8,
    fontSize: 12,
  },

  messageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -16,
    padding: 16,
    paddingTop: 20,
    overflowY: "auto",
    boxShadow: "0 -12px 25px rgba(0,0,0,0.18)",
  },

  messageItem: {
    display: "flex",
    alignItems: "center",
    border: "none",
    background: "transparent",
    width: "100%",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    position: "relative",
    transition: "background 0.2s ease",
  },

  messageItemHighlighted: {
    background: "rgba(197, 89, 178, 0.10)",
    borderRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },

  chatImage: {
    width: 55,
    height: 55,
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: 12,
  },

  chatInfo: {
    flex: 1,
    textAlign: "left",
    minWidth: 0,
  },

  chatHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  chatName: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  chatTime: {
    fontSize: 12,
    color: "#999",
    flexShrink: 0,
  },

  chatMessage: {
    margin: "4px 0 0",
    fontSize: 14,
    color: "#666",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  unreadDot: {
    width: 10,
    height: 10,
    backgroundColor: "#C559B2",
    borderRadius: "50%",
    marginLeft: 8,
    flexShrink: 0,
  },
};


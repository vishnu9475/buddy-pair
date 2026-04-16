import React from "react";
import EachContact from "./EachContact";

const defaultContacts = [
  {
    section: "A",
    data: [
      {
        name: "Afrin Sabila",
        bio: "Life is beautiful 👌",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Adil Adnan",
        bio: "Be your own hero 💪",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ],
  },
  {
    section: "B",
    data: [
      {
        name: "Bristy Haque",
        bio: "Keep working 🧑‍💻",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "John Borino",
        bio: "Make yourself proud 😍",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      {
        name: "Borsha Akther",
        bio: "Flowers are beautiful 🌸",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    ],
  },
  {
    section: "S",
    data: [
      {
        name: "Sheik Sadi",
        bio: "Life is beautiful 🙏",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
      },
    ],
  },
];

const ContactList = ({ contacts = defaultContacts, showActions = true }) => {
  const handleContactClick = (person) => {
    console.log("Clicked:", person);
    alert(`You clicked on ${person.name}`);
  };

  return (
    <div style={styles.container}>
      {contacts.map((group, index) => (
        <div key={index}>
          <div style={styles.section}>{group.section}</div>

          {group.data.map((person, i) => (
            <EachContact
              key={i}
              {...person}
              showActions={showActions}
              onClick={() => handleContactClick(person)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    paddingBottom: 100,
    marginTop: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: "100vh",
  },

  section: {
    fontWeight: "bold",
    margin: "15px 0 5px",
    color: "#444",
  },
};

export default ContactList;
import { useState } from "react";

export function BusinessCard(props) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.description}>{props.description}</p>
      <h3 style={styles.interestsHeader}>Interests</h3>
      <ul style={styles.interestsList}>
        {props.interests.map((interest) => (
          <li key={interest} style={styles.interestItem}>
            {interest}
          </li>
        ))}
      </ul>
      <div style={styles.socialLinks}>
        <a
          href={props.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, marginLeft: "0px" }}
        >
          LinkedIn
        </a>
        <br />
        <a
          href={props.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Twitter
        </a>
        {props.otherSocialMedia && (
          <a
            href={props.otherSocialMedia}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            {props.otherSocialMedia.label}
          </a>
        )}
      </div>
    </div>
  );
}

//Add card form
export default function AddCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState([]);
  const [interests, setInterests] = useState([]);

  const [cardData, setCardData] = useState([]);

  function addData(e) {
    e.preventDefault();
    const newCard = {
      name,
      description,
      linkedin: links,
      interests: interests.split(",").map((i) => i.trim()),
    };

    // 2. Use the spread operator [...] to keep previous cards and add the new one
    setCardData([...cardData, newCard]);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "40px",
        padding: "40px",
      }}
    >
      <form
        onSubmit={addData}
        style={{
          width: "300px",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        <h2>Form Add Business Cards</h2>
        <input
          style={{ margin: "12px" }}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br></br>
        <input
          style={{ margin: "12px" }}
          type="text"
          placeholder="Enter short description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />{" "}
        <br></br>
        <input
          style={{ margin: "12px" }}
          type="text"
          placeholder="Enter your Linkedin link"
          onChange={(e) => {
            setLinks(e.target.value);
          }}
        />{" "}
        <br></br>
        <input
          style={{ margin: "12px" }}
          type="text"
          placeholder="Enter Interests"
          onChange={(e) => {
            setInterests(e.target.value);
          }}
        />{" "}
        <br></br>
        <button style={{ margin: "12px" }}>Add Data</button>
        <br></br>
      </form>
      <div style={{ display: "flex", flexWrap:"wrap",flexDirection:"row", gap: "20px" }}>
        {cardData.map((item, index) => (
          <div key={index} style={{ width: "300px" }}>
            <BusinessCard
              name={item.name} // Use 'item' from map
              description={item.description}
              linkedin={item.linkedin}
              interests={item.interests}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  socialLinks: {
    display: "flex",
    marginBottom: "15px",
  },
  link: {
    textDecoration: "none",
    color: "#fff", // Text color
    padding: "10px 15px", // Padding for the button
    borderRadius: "5px", // Border radius for rounded corners
    backgroundColor: "#007BFF", // Background color for the button
    display: "inline-block", // Display as inline-block to be side by side
    margin: "10px", // Margin between buttons
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle lift
    cursor: "pointer",
  },
  interestsHeader: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  interestsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  interestItem: {
    fontSize: "14px",
    marginBottom: "5px",
    color: "#555",
  },
};

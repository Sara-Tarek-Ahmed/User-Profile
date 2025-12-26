const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const users = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    bio: "Passionate web developer.",
  },
  {
    id: 2,
    name: "Sara Mahmoud",
    email: "sara@example.com",
    bio: "UI/UX designer.",
  },
  {
    id: 3,
    name: "Khaled Hassan",
    email: "khaled@example.com",
    bio: "Software engineer.",
  },
  {
    id: 4,
    name: "Omar Salah",
    email: "omar@example.com",
    bio: "Backend developer.",
  },
  {
    id: 5,
    name: "Mona Adel",
    email: "mona@example.com",
    bio: "Frontend developer.",
  },
  {
    id: 6,
    name: "Youssef Ibrahim",
    email: "youssef@example.com",
    bio: "Full-stack developer.",
  },
  {
    id: 7,
    name: "Nour Ahmed",
    email: "nour@example.com",
    bio: "Computer science graduate.",
  },
  {
    id: 8,
    name: "Hala Mostafa",
    email: "hala@example.com",
    bio: "Junior software developer.",
  },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

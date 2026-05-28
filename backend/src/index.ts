import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from Grocery Guru API!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

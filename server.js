import express, { json } from "express";
import cors from "cors";
import categoryRoutes from "./src/routes/Categories.route.js"; 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api", categoryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

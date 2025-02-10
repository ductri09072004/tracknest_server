import express, { json } from "express";
import cors from "cors";

import categoryRoutes from "./src/routes/Categories.route.js"; 
import extractbillRoutes from "./src/routes/ExtractBill.route.js"; 
import groupmemRoutes from "./src/routes/GroupMem.route.js"; 
import grouptranRoutes from "./src/routes/GroupTrans.route.js"; 
import transactionRoutes from "./src/routes/Transactions.route.js"; 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api", categoryRoutes);
app.use("/api", extractbillRoutes);
app.use("/api", groupmemRoutes);
app.use("/api", grouptranRoutes);
app.use("/api", transactionRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

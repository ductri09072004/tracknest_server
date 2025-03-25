import express, { json } from "express";
import cors from "cors";

import categoryRoutes from "./src/routes/Categories.route.js"; 
import groupmemRoutes from "./src/routes/GroupMem.route.js"; 
import grouptranRoutes from "./src/routes/GroupTrans.route.js"; 
import transactionRoutes from "./src/routes/Transactions.route.js"; 
import accountRoutes from "./src/routes/Account.route.js"; 
import mempayRoutes from "./src/routes/Mempay.route.js"; 
import languageRoutes from "./src/routes/Language.route.js"; 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api", categoryRoutes);
app.use("/api", groupmemRoutes);
app.use("/api", grouptranRoutes);
app.use("/api", transactionRoutes);
app.use("/api", accountRoutes);
app.use("/api", mempayRoutes);
app.use("/api", languageRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

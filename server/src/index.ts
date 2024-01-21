import express from "express";
import type { Application } from "express";

import startServer from "server";
import routes from "routes";

const app: Application = express();

// Routes
routes(app);

// Start Server
startServer(app);

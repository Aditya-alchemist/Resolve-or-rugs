import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGameResultSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/game-results - Save a game result
  app.post("/api/game-results", async (req, res) => {
    try {
      const validatedData = insertGameResultSchema.parse(req.body);
      const result = await storage.saveGameResult(validatedData);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid game result data" });
    }
  });

  // GET /api/leaderboard - Get top game results
  app.get("/api/leaderboard", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const results = await storage.getTopGameResults(limit);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

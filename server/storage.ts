import { type User, type InsertUser, type GameResult, type InsertGameResult } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveGameResult(result: InsertGameResult): Promise<GameResult>;
  getTopGameResults(limit: number): Promise<GameResult[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private gameResults: Map<string, GameResult>;

  constructor() {
    this.users = new Map();
    this.gameResults = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveGameResult(insertResult: InsertGameResult): Promise<GameResult> {
    const id = randomUUID();
    const result: GameResult = {
      ...insertResult,
      playerEmail: insertResult.playerEmail ?? null,
      id,
      createdAt: new Date(),
    };
    this.gameResults.set(id, result);
    return result;
  }

  async getTopGameResults(limit: number): Promise<GameResult[]> {
    const results = Array.from(this.gameResults.values());
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }
}

export const storage = new MemStorage();

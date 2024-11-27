import express from "express";
import cors from "cors";
import {Connection, clusterApiUrl} from "@solana/web3.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Solana connection
const connection = new Connection(clusterApiUrl('devnet'));

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get Solana network status
app.get('/network-status', async (req, res) => {
  try {
    const version = await connection.getVersion();
    res.json({ 
      status: 'online',
      version 
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to get network status' 
    });
  }
});

export default app;
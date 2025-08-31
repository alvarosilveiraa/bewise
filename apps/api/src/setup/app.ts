import { clerkMiddleware } from "@clerk/express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { app } from "@/app";

export const setupApp = () => {
  app.use(cors());
  app.use(express.text());
  app.use(express.json({ limit: "50mb" }));
  app.use(cookieParser());
  app.use(clerkMiddleware());
  app.set("trust proxy", 1);
};

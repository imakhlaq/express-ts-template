/**
 * Load the environment variables in an object here.
 */

import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
};

export default config;

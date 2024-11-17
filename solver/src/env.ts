import dotenv from "dotenv";

dotenv.config();

export const env = {
  ORDER_CHAIN_ID: Number(process.env.CHAIN_ID ?? 31337),
  ORDER_CHAIN_RPC_URL:
    process.env.ORDER_CHAIN_RPC_URL ?? "http://localhost:8545",
  FILL_CHAIN_ID: Number(process.env.CHAIN_ID ?? 31338),
  FILL_CHAIN_RPC_URL: process.env.FILL_CHAIN_RPC_URL ?? "http://localhost:8546",
  ROUTER_ADDRESS: process.env.ROUTER_ADDRESS,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
};

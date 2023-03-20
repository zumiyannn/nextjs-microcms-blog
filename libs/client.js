import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "zumi-dolphin",
    apiKey: process.env.API_KEY,
});

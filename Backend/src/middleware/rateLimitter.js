import ratelimit from "../config/upstash.js";

const ratelimtter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit-key");

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    console.error("Ratelimit error:", error);
    res.status(500).json({ message: "Ratelimit error", error });
  }
};

export default ratelimtter;

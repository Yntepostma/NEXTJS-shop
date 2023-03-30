import { NextApiRequest, NextApiResponse } from "next";
import { fetchJSON } from "../../../lib/api";

const handleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJSON(`http:/localhost:1337/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password }),
    });

    res.status(200).json({ id: user.id, username: user.username });
  } catch (e) {
    res.status(401).end();
  }
};

export default handleLogin;

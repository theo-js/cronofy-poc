import type { NextApiRequest, NextApiResponse } from "next";

const CRONOFY_API_TOKEN_ENDPOINT = "https://api.cronofy.com/v1/element_tokens";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "GET":
      try {
        const tokenResponse = await fetch(CRONOFY_API_TOKEN_ENDPOINT, {
          method: "POST",
          body: JSON.stringify({
            version: "1",
            permissions: ["agenda"],
            origin: process.env.CRONOFY_TOKEN_ORIGIN,
          }),
          headers: {
            Authorization: `Bearer ${process.env.CRONOFY_CLIENT_SECRET}`,
            "Content-Type": "application/json",
          },
        });
        const tokenResponseJson = await tokenResponse.json();
        return res.status(tokenResponse.status).json(tokenResponseJson);
      } catch (e) {
        return res.status(404).json({ errors: [e] });
      }
  }
  return res
    .status(404)
    .json({ errors: ["Méthode non prise en charge par cet endpoint"] });
}

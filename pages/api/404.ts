import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const site = req.query.site as string;
  console.log({ site });
  const response = await fetch(`${process.env.BASE_URL}/${site}/404`);
  const html = await response.text();

  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.status(404).send(html);
}

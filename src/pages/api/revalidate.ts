import { NextApiRequest, NextApiResponse } from "next";

// const handleRevalidate = async (req: NextApiRequest, res: NextApiResponse) => {
//   const event = req.body;
//   if (event.model === "product") {
//     const id = event.entry.id;
//     await Promise.all([res.revalidate("/"), res.revalidate(`/products/${id}`)]);
//     console.log(`revalidated and updated product with id ${id}`);
//   }
//   res.status(204).end();
// };

// export default handleRevalidate;

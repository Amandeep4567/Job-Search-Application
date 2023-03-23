import express from "express";
import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";
const app = express();

const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.get("/jobs", async (req: Request, res: Response) => {
  const jobs = await prisma.job.findMany().catch((err) => {
    console.log(err);
  });
  res.json(jobs);
});

app.post("/get-job-by-title/", async (req: Request, res: Response) => {

  const jobTitle = req.body.title;

  const job = await prisma.job.findFirst({
    where: {
      title: jobTitle,
    },
  }).catch((err) => {
    console.log(err);
  });
  res.json(job);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

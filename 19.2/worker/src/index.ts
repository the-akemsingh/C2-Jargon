import { createClient } from "redis";

const redisclient = createClient();

async function processCode(submission: { key: string; element: string }) {
  const { problemId, code, language } = JSON.parse(submission.element);

  console.log(submission);
  //logic for solving or processing code

  //artificial delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("finished processing");
  //send it to pub-sub
}

async function startServer() {
  try {
    await redisclient.connect();
    console.log("worker connected");

    while (1) {
      try {
        const submission = await redisclient.brPop("problems", 0);
        await processCode(submission!);
      } catch (e) {
        console.error("Error processing submission:", e);
      }
    }
  } catch (e) {
    console.log("error occured at worker server : ", e);
  }
}

startServer();

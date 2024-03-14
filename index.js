import express from "express";
import cors from "cors";
import { Instagram } from "social-downloader-cherry";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  let data = {
    name: "Express API for Video Downloader",
    version: "v 1.0.0",
    project: "testing",
  };
  res.send(data);
});

// app.get("/fetch", async (req, res) => {
//   let { url, site } = req.query;

//   try {
//     const videodata = await getdata(url, site);
//     let mystatus = videodata.status;

//     const responseObject = {
//       videodata: videodata,
//       media: site,
//       status: mystatus,
//     };

//     res.json(responseObject);
//   } catch (error) {
//     console.error("Error:", error);

//     // Send an error response
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.listen(3434, () => {
  console.log("Server is Live!");
});

app.use("/", (req, res) => {
  res.send("ok");
});

// async function getdata(url, media) {
//   switch (media) {
//     case "youtube":
//       let youtube = await ytdown(url);
//       console.log(youtube);
//       return youtube;
//       break;
//     case "facebook":
//       let facebook = await ndown(url);
//       //  console.log(facebook);
//       return facebook;
//       break;
//     case "instagram":
//       let instagram = await ndown(url);
//       //  console.log(instagram);
//       return instagram;
//       break;
//     case "tiktok":
//       let tiktok = await tikdown(url);
//       //   console.log(tiktok);
//       return tiktok;
//       break;
//     case "twitter":
//       let twitter = await twitterdown(url);
//       //  console.log(twitter);
//       return twitter;
//       break;

//     default:
//       return null;
//       break;
//   }
// }

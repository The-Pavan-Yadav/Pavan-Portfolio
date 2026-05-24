import https from "https";
https.get("https://certain-neural-archive-labs.base44.app", (res) => {
  let data = "";
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => console.log(data));
});

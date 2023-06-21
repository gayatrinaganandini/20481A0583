const express = require("express");
const axios = require("axios");
const app = express();
app.get("/numbers", async (req, res) => {
  res.send(req.params);
  const urls = req.query.url;
  const numbers = [];
  for (const url of urls) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        if (data.number) {
          numbers.push(data.number);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  res.json(numbers);
});

app.listen(8008, () => {
  console.log("Server running on port 8008");
});
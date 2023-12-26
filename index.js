const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
    // Read links from the txt file
    const links = fs.readFileSync('links.txt', 'utf-8').split('\n').filter(Boolean);

    // Return the first link and remove it from the txt file
    if (links.length > 0) {
      const link = links.shift();
      fs.writeFileSync('links.txt', links.join('\n'));

      res.json({ link });
    } else {
      res.status(404).json({ error: 'No links available' });
    };
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

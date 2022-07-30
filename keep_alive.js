const express = require('express');
const app = express();
const port = 1111;
app.get('/', (req, res) => res.send('Nightcorer is Currently Working.'));

app.listen(port, () => console.log(`Nightcorer is listening to http://localhost:${port}`));
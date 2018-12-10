const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(PORT, () => console.log('Listening on port 8080!'))
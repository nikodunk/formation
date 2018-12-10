const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const bodyParser = require("body-parser");
const pdf = './public/prenatal.pdf'


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));



app.get('/api/getUsername', (req, res) => {
	res.send({ username: os.userInfo().username })
});


app.post('/api/makepdf', (req, res) => {
	console.log(req.body.input)
	res.send({ pdf: req.body.input })
	//res.sendfile(pdf)
});

app.listen(PORT, () => console.log('Listening on port 8080!'))
const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));



app.get('/api/getUsername', (req, res) => {
	res.send({ username: os.userInfo().username })
});


app.post('/api/makepdf', (req, res) => {
	console.log(req.body.uid, req.body.name)
	res.send({ pdf: req.body.uid })
});

app.get('/api/pdf/:uid', (req, res) => {
	console.log(req.params.uid)
	res.download('./public/prenatal.pdf');
});


app.listen(PORT, () => console.log('Listening on port 8080!'))
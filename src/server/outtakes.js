app.get('/api/getUsername', (req, res) => {
	res.send({ username: os.userInfo().username })
});


app.post('/api/makepdf', (req, res) => {
	console.log(req.body.uid, req.body.name)
	res.send({ pdf: req.body.name })
});
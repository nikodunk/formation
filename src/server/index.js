const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const HummusRecipe = require('hummus-recipe');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));



app.get('/api/pdf/:uid/:name', (req, res) => {
	const pdfDoc = new HummusRecipe('./public/prenatal.pdf', 'output.pdf');

	pdfDoc
	    // edit 1st page
	    .editPage(1)
	    .text(req.params.name, 100, 87)
	    .text(req.params.uid, 480, 105)
	    .endPage()
	    .endPDF();

	res.download('output.pdf');
});


app.listen(PORT, () => console.log('Listening on port 8080!'))
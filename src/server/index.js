const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const HummusRecipe = require('hummus-recipe');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));



app.post('/api/pdf', (req, res) => {
	const pdfDoc = new HummusRecipe('./public/inputs/prenatal.pdf', './public/outputs/prenatal.pdf');
	
	pdfDoc
	    // edit 1st page
	    .editPage(1)
	    .text(req.body.name, 100, 87)
	    .text(req.body.uid, 480, 105)
	    .endPage()
	    .endPDF();

	res.download('./public/outputs/prenatal.pdf');
});


app.listen(PORT, () => console.log('Listening on port 8080!'))
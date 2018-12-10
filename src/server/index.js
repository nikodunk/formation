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
	console.log(req.body.age, req.body.name)
	pdfDoc
	    // edit 1st page
	    .editPage(1)
	    
	    .text(req.body.name ? req.body.name : ' ', 100, 87)
	    
	    .text(req.body.uid ? req.body.uid : ' ', 480, 105)
	    
	    .text(req.body.age === 'Less than 12 years' ? 'x' : ' ', 44, 201)
	    .text(req.body.age === '12-17 years' ? 'x' : ' ', 44, 211)
	    .text(req.body.age === '18-34 years' ? 'x' : ' ', 44, 222)
	    .text(req.body.age === '35 years or older' ? 'x' : ' ', 44, 232)

	    .text(req.body.stayinthisarea === 'Yes' ? 'x' : ' ', 44, 402)
	    .text(req.body.stayinthisarea === 'No' ? 'x' : ' ', 44, 412)
	    .text(req.body.stayinthisarea === 'Unsure' ? 'x' : ' ', 44, 422)

	    .endPage()
	    .endPDF();

	res.download('./public/outputs/prenatal.pdf');
});


app.listen(PORT, () => console.log('Listening on port 8080!'))
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
	console.log(req.body.areyoumarried, req.body.howlongcurrenthome)
	pdfDoc
	    // edit 1st page
	    .editPage(1)
	    
	    .text(req.body.name ? req.body.name : ' ', 100, 87)
	    
	    .text(req.body.uid ? req.body.uid : ' ', 480, 105)
		
		// 1. client age	    
	    .text(req.body.age === 'Less than 12 years' ? 'x' : ' ', 44, 201)
	    .text(req.body.age === '12-17 years' ? 'x' : ' ', 44, 211)
	    .text(req.body.age === '18-34 years' ? 'x' : ' ', 44, 222)
	    .text(req.body.age === '35 years or older' ? 'x' : ' ', 44, 232)

	    // 2. are you married
	    .text(req.body.areyoumarried === 'Married' ? 'x' : ' ', 89, 288)
	    .text(req.body.areyoumarried === 'Living with partner' ? 'x' : ' ', 89, 298)
	    .text(req.body.areyoumarried === 'In a relationship' ? 'x' : ' ', 89, 310)
	    .text(req.body.areyoumarried === 'Single' ? 'x' : ' ', 183, 288)
	    .text(req.body.areyoumarried === 'Divorced/Separated' ? 'x' : ' ', 183, 298)
	    .text(req.body.areyoumarried === 'Widowed' ? 'x' : ' ', 183, 310)

	    // 3. how long have you lived
	    .text(req.body.howlongcurrenthome === 'Over one year' ? 'x' : ' ', 43, 346)
	    .text(req.body.howlongcurrenthome === 'Under one year, previously lived:' ? 'x' : ' ', 43, 356)
	    
	    // 4. do you plan to stay
	    .text(req.body.stayinthisarea === 'Yes' ? 'x' : ' ', 44, 402)
	    .text(req.body.stayinthisarea === 'No' ? 'x' : ' ', 44, 412)
	    .text(req.body.stayinthisarea === 'Unsure' ? 'x' : ' ', 44, 422)

	    .endPage()
	    .endPDF();

	res.download('./public/outputs/prenatal.pdf');
});


app.listen(PORT, () => console.log('Listening on port 8080!'))
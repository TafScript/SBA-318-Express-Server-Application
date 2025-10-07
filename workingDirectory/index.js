const app = require('express')(); //express is a function
const PORT = 3000;                //use parenthese to initialize 
                                 // (not necessary but good to know)
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

app.get('/data', (req, res) => {
    
})
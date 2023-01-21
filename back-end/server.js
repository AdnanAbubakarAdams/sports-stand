// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATIION
require("dotenv").config();

// PORT 
const PORT = process.env.PORT || 1988

// LISTEN 
app.listen(PORT, () => {
    console.log(`⛹🏿‍♀️ ⚽️  Balling on port ${PORT} 🎾 🏀`);
})


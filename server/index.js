const express = require('express');
var cors = require('cors');
const app = express();
const port = 3001

app.use(cors())
app.use(express.static('../temp_audio'))

app.listen(port, () => console.log(`Application listening on port ${port}`))

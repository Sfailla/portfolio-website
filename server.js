const express = require('express');
const path = require('path');

const app = express();

const CLIENT_DIR = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3000;

app.use(express.static(CLIENT_DIR));

app.get('*', (req, res) => {
	res.sendFile(path.join(CLIENT_DIR, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`listening on Port ${PORT}`);
});

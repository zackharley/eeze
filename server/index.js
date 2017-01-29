const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 8000 || process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../client/dist/public')));


// var Pusher = require('pusher');

// var pusher = new Pusher({
//   appId: '295570',
//   key: 'c03051eb0a3fa6afbd64',
//   secret: '7bbf11cfe16e1de1e607',
//   encrypted: true
// });

// pusher.trigger('my-channel', 'my-event', {
//   "message": "hello world"
// });



app.listen(port, () => {
	console.log(`Eeze listening on port ${port}`);
});
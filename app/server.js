let express = require('express');
const cors=require('cors');
let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json([
      { id: 1, title: 'Title 1' },
      { id: 2, title: 'Title 2' },
      { id: 3, title: 'Title 3' },
      { id: 4, title: 'Title 4' },
      { id: 5, title: 'Title 5' },
    ]);
  });

app.listen(5000, function () {
  console.log("app listening on port 5000!");
});



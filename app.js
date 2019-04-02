const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project')

app.use(mainRoutes);
app.use('/project', projectRoutes);


app.listen(3000, () => {
    console.log('The application is running on localhost 3000');
})
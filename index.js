const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
const port = process.env.PORT || 3000


const usersRoute = require('./routes/users-route');
app.use('/api/users', usersRoute);

app.get('/', (req, res) => res.send('Hello World!'));

const db = require('./models');
db.users.hasMany(db.posts, {
    foreignKey: "userId",
});

db.posts.belongsTo(db.users, {
    foreignKey: "userId",
});
const postsRoute = require('./routes/posts-route');
app.use('/api/posts', postsRoute);
db.sequelize.sync().then((req) => {
    console.log('Database connected...');
    app.listen(port, () => console.log(`Server listening on port ${port}`))
}).catch((err) => {
    console.log('Error connecting to database: ', err);
}
);


const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const cors=require('cors');
const videoRoutes = require('./routes/videoRoutes');
const questionRoutes=require("./routes/mockTestRoutes");
const authRoutes=require('./routes/authRoutes');
const notifyRoutes=require('./routes/notifyRoutes');
const fileRoutes=require('./routes/fileRoutes');
env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vvju9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');
});

app.use(cors());
app.use(express.json())
app.use('/api', videoRoutes);
app.use('/api', questionRoutes);
app.use('/api',authRoutes);
app.use('/api',notifyRoutes);
app.use('/api',fileRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
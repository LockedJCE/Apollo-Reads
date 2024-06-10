const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://lockinjce:QbOfsKS3Jahe15Kt@cluster0.go6anse.mongodb.net/ApolloDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports = mongoose.connection;

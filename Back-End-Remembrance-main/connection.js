const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://isaac:NVRmHIXtIlXitAd2@remembrance.zs2qm.mongodb.net/RemembranceDatabase?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
})

module.exports = mongoose



var app = require('./config/express')();

app.listen(3000, () => {
    console.log("server is runing");
});

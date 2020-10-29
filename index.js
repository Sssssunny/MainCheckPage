const express = require("express");
const odbc = require("odbc")
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));


app.get("/", function (req, res) {

    async function connectToDatabase() {
        const connection1 = await odbc.connect('DRIVER = filemaker odbc ,', (error, connection) => {
            if (error) {
                console.log('데이터베이스에 연결하지 못했습니다.')
            } else if (connection) {
                connection.query("select * from CS_web where ")
            }
        });
    }
    res.render('index.ejs')
});

app.listen(3000, () => {
    console.log("서버오픈")
})
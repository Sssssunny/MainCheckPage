const express = require("express");
const { promises } = require("fs");
const odbc = require("odbc")
const app = express()

app.set('view engine','ejs');
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));

  var cnt_total = 0
  var cnt_c = 0
  var cnt_cancel = 0
  var cnt_change = 0
  var cnt_yet = 0
  var CS_data = []

async function connectToDatabase(brandCode) {
  var brandCode = brandCode
  var query = "SELECT * FROM Popup WHERE brandCode='"+brandCode+"'";
    await odbc.connect('DSN=mydsn2;UID=st01;PWD=qawsedr',(error,connection)=>{
    connection.query(query,(error,result)=>{

      cnt_total = (result[0].cnt_total==null ? 0 : result[0].cnt_total)
      cnt_c = (result[0].cnt_c==null ? 0 : result[0].cnt_c) 
      cnt_cancel = (result[0].cnt_cancel==null ? 0 : result[0].cnt_cancel)
      cnt_change = (result[0].cnt_change==null ? 0 : result[0].cnt_change)
      cnt_yet = (result[0].cnt_yet==null ? 0 : result[0].cnt_yet)

      console.log("신규주문:"+cnt_c)
      console.log("총주문:"+cnt_total)
      console.log("미발송:"+cnt_yet)
      console.log("취소:"+cnt_cancel)
      console.log("변경:"+cnt_change)
    })
  });
}
async function CSload(brandCode) {
  var brandCode = brandCode
  var query = "SELECT * FROM Popup_CS_data WHERE brandCode='"+brandCode+"'";
  console.log(brandCode)
    await odbc.connect('DSN=mydsn2;UID=st01;PWD=qawsedr',(error,connection)=>{
    connection.query(query,(error,result)=>{
      CS_data = result
      console.log('CS_data로딩완료')
    })
  });
}
 app.get("/", function (req, res) {
  console.clear()
  var brandCode = req.params.brandCode||"ZZ"
  if(!brandCode){
    res.send("<script>alert('브랜드코드가 존제하지 않습니다');self.close()</script>")
  }else{
    connectToDatabase(brandCode)
    .then(CSload(brandCode))
    .then(setTimeout(() => {
      res.render('index.ejs',{
            CS_data:CS_data,
            cnt_c:cnt_c,
            cnt_cancel:cnt_cancel,
            cnt_change:cnt_change,
            cnt_total:cnt_total,
            cnt_yet:cnt_yet
    })}, 2000));
  }
});

app.get("/popup",(req,res)=>{
  var idx = req.param('idx') 
  res.render('popup.ejs',{
    idx:idx,
    CS_data:CS_data
  })
})
 
app.listen(8000,()=>{
    console.log("http://localhost:8000")  
})
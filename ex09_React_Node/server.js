const express = require('express')
const app = express();

// 모든 주소(출처)에 대해서 통신할 수 있게 허용 
const cors = require('cors')
app.use(cors())

// DB연결 모듈 가져오기
const conn = require('./config/db')

// body 데이터 사용
app.use(express.urlencoded({extended:true}))
app.use(express.json())



// :'http://localhost:3001/join'
app.post('/join',(req,res)=>{
    console.log('Node 서버 접근완료')
    console.log(req.body)
    let id=req.body.id
    let pw=req.body.pw
    let nick=req.body.nick

    let sql='insert into nodejs_member values(?,?,?)'
    conn.query(sql,[id,pw,nick],(err,rows)=>{

        console.log(err)
    //  회원가입 -> 1
    //  rows.affectedRows>0 : 영향을 받은 행의 갯수
    if(rows.affectedRows>0){
        res.send(1)
    }
    //  회원가입 실패 ->0
    else{
        res.send(0)
    }
    })
        })

    // res.send('응답값')
    app.post('/login', (req, res) => {
    let { id, pw } = req.body

 let sql = "SELECT * FROM nodejs_member WHERE ID=? AND PW=?"

    conn.query(sql, [id, pw], (err, rows) => {
        if (err) {
            console.log(err)
            res.send(0)
        } else {
            if (rows.length > 0) {
                res.send(1) // 로그인 성공
            } else {
                res.send(0) // 로그인 실패
            }
        }
})
})

app.listen(3001);
// express를 사용하기 위한 과정

// 1. npm init -y => 프로젝트에 대한 설정 파일을 생성!
//  => package.json 파일이 생성된다!
// => 해당 파일에는 프로젝트에 대한 전반적인 사항이 기재된디ㅏ
//    (프로젝트의 이름,버전,설치된 라이브러리,...)

// 2. npm install express => express를 쓰기위한 모듈 설치!
//  => node_modules 폴더 생성된다!
//  => express가 제공하는 기능들이 만들어 진다!

// 3. 필요에 따라 폴더를 생성할 수 있다!
//  - config : DB값, API 값 설정하는 폴더
//  - public : 이미지,비디오,문서 같은 정적인 파일을 관리하는 폴더
//  - routes : 경로를 지정해주는 폴더
//  - views  : 동적인 페이지를 관리하는 폴더

// 4. express의 메인이 될수 있는 js 파일 생성
// => server.js / app.js 이름으로 사용!

const express = require('express')
// 모듈 불러오는 작업

// 불러온 express 모듈 실행하기
const app = express()

// path에 해당하는 모듈 불러오기
const path = require('path')

// 정적인 파일에 이미지를 추가하여 클라이언트에게 응답을 위한 미들웨어 설정!
app.use(express.static(__dirname + '/public'))

// 기본 요청('/')에 대한 과정 설정하기
// localhost : 3000/
app.get('/', (req, res)=> {
    console.log('서버 접근 완료')
    // 서버 요청에 대한 응답을 연결해보기! => 제대로된 응답을 위해선 절대경로를 사용해야한다!
    // => html파일을 생성해서 작업!
    // join : 경로를 안전하게 조합하기 위한 기능
    // __dirname : 현재 내가 있는 파일의 위치 의미
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// 2. get방식의 요청을 받을수 있는 구조
app.get('/getkeyword',(req, res)=>{
    console.log('사용자가 검색을 요청했습니다!', req.query)
})

// 컴퓨터의 기본 포트번호를 확인해서 연결하는 방법
app.set('port', process.env.PORT || 3000)

// 포트번호 설정
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + '포트에서 대기중..')
})
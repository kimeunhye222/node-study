# 1. 사용할 데이터베이스 생성
create database nodejs;

# 2. 사용할 데이터베이스 선택(필수)
# !!) 워크벤치를 사용할 때 마다 필수적으로 진행해야 하는 명령어
use nodejs;

# 3. 사용할 테이블 생성
CREATE TABLE NODEJS_MEMBER(
	ID varchar(100),
    PW varchar(100),
    NICK varchar(100)
);

#4. 테이블 확인해보기
select * FROM NODEJS_MEMBER;

#5. 테이블 데이터 추가하기
insert INTO NODEJS_MEMBER values('TEST1','123','TEST1');

# 6. 데이터 수정하기
update NODEJS_MEMBER SET NICK='TEST2' WHERE NICK='TEST';

# 데이터 삭제하기
delete FROM NODEJS_MEMBER WHERE ID='TEST1';

#8. 테이블 삭제하기 
drop TABLE NODEJS_MEMBER;


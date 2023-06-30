# beb-09-first-04
![atomy_4](https://github.com/codestates-beb/beb-09-atomy/assets/65144253/e9e005ba-f550-4e8e-8a07-71e2a71e69d9)



## ✏️프로젝트 Atomy 컨셉 소개
팀명: 2311_4_Atomy_Sea

프로젝트명: Atomy

프로젝트 설명: Atomy는 이더리움 기반의(ERC-721) NFT 거래소 입니다. 
              사용자는 Atomy에서 ERC-721 기술로 생성된 NFT를 지갑을 연결하고 민팅, 거래를 할 수 있습니다.

## 🕵개발 기술 스택

### 백엔드
node.js /
express.js /
JWT /
mongo DB 

### 프론트엔드
javascript /
React /
CSS /
HTML /
Axios 

### 블록체인
Ethereum /
web3.js /
IPFS

### 스마트계약
Solidity /
Remix /
OpenZeppelin /
Metamask

## 👬팀 멤버
| 포지션 | 이름 | 기술파트 |
|--------|------|---------|
| 팀장 | 이효확 | full stack |
| 팀원 | 이승민 | fron-end, back-end |
| 팀원 | 한재경 | fron-end, UI&UX |
| 팀원 | 이동욱 | wireframe, flowchart |



## ✏️서비스 개요

![schedule](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/45dccf1f-7d68-48b7-b3c7-621b3cd2f8e3)

## ✏️서비스 흐름

![service-logic2](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/c31505c7-1d66-40b2-a9cd-410ad36fcc65)

## ✏️기술 아키텍쳐

![system-architecture](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/3d9e66d8-68a8-4285-938e-13be897f155b)

## ✏️메인페이지

![main-page](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/331b6bdd-0bf3-48ec-be63-eeba1752124d)
![서버연동전-후](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/d4ac16e4-0ced-40ff-9d21-b63d6c1a13f0)

## ✏️지갑 연결

![connect-wallet2](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/1e28fa99-f8e2-4235-bdab-8f35501e3132)

## ✏️로그 아웃

![log-out](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/09b2aa7d-a799-47a8-afa5-944031f6b4c9)

## ✏️컬렉션 페이지

![collection-page](https://github.com/codestates-beb/beb-09-first-04/assets/110643793/5ad1ddd6-9afb-4956-8a9d-5cc24a1755ba)


## API endpoint

[API Endpoint]

<헬스 체크>
GET api/v1/healthcheck

<랜덤 콜렉션 정보 조회>
GET api/v1/collections?size=number

query parameters
size (not required) - 가져올 콜렉션 정보의 개수 (default 100)

<slug값이 일치하는 콜렉션 정보 조회>
GET api/v1/collections/:slug

<사용자 로그인>
POST api/v1/user/login

body
address (required) - 메타마스크 지갑 주소

<access token 갱신>
POST api/v1/user/refresh

<사용자 로그아웃>
POST api/v1/user/logout

<사용자 정보 조회>
GET /user/profile

Authorization 헤더 필요 (Bearer + access_token)
body
address (required) - 메타마스크 지갑 주소

[공통 응답 코드]
200 - 성공
401 - 인증 오류
500 - 서버 오류



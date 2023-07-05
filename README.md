# beb-09-first-04
![atomy_NFT](https://github.com/codestates-beb/beb-09-atomy/assets/65144253/a1b24f4d-f023-4b92-b7c6-5322bd738a6b)



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
![schedule](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/7e56e602-a586-42ee-b3b4-84f1ec1b7691)

## ✏️서비스 흐름
![service-logic2](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/769c1619-8ff8-4889-af0c-8cd3e99d19e2)

## ✏️기술 아키텍쳐
![system-architecture](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/eec5d107-eecf-44db-a2a4-f64f12998a0e)

## ✏️ 리엑트 플로우
![react-flow](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/991d39fe-b28d-4e7e-9568-1072b52de7a1)

## ✏️메인페이지

![main-page](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/2f263b6f-afc3-4a06-93f2-ed1edeab161a)

![서버연동전-후](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/f5c134d5-2fc6-4a2c-9f7e-1d79e0be2b50)


## ✏️지갑 연결
![connect-wallet2](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/0efb6a8a-88f3-4ada-a65d-83cc6ad6817d)

## ✏️로그 아웃
![log-out](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/13be7a01-afd3-41b4-be2f-22c90a967200)


## ✏️컬렉션 페이지
![collection-page](https://github.com/codestates-beb/beb-09-atomy/assets/110643793/24dbd114-00a2-444c-b152-0acbbcfe713d)



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



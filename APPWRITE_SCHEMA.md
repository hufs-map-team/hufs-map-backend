# Appwrite Schema

## users Collection

사용자 인증 후 서비스에서 필요한 추가 사용자 정보를 저장하는 컬렉션이다.

| Field | Type | Required | Description |
|---|---|---|---|
| email | string | yes | 학교 이메일 |
| username | string | yes | 로그인 아이디 |
| nickname | string | yes | 서비스 닉네임 |
| authUserId | string | yes | Appwrite Auth 사용자 ID |
| favoriteBuildings | string[] | no | 즐겨찾기한 건물 목록 |
| deleted | boolean | no | 탈퇴 처리 여부 |
| deletedAt | string | no | 탈퇴 처리 시간 |

## users Collection 설명

`authUserId`는 Appwrite Authentication에서 생성되는 사용자 고유 ID와 연결된다.  
프론트엔드에서는 `account.get()`으로 현재 로그인한 사용자의 ID를 가져오고, users 컬렉션에서 `authUserId`가 같은 row를 조회하여 사용자 정보를 불러온다.
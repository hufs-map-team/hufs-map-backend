import { Client, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite 기본 엔드포인트
    .setProject('6a0bd3c70007637f5038'); // 회원님의 실제 프로젝트 ID

// 프론트엔드에서 가져다 쓸 수 있도록 내보내기
export const databases = new Databases(client);
export const storage = new Storage(client);
export default client;

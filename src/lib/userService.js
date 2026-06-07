import {
  account,
  tablesDB,
  functions,
  Query,
  DATABASE_ID,
  USERS_TABLE_ID,
  DELETE_USER_FUNCTION_ID,
} from "./appwrite";

export const getCurrentUserRow = async () => {
  const currentUser = await account.get();

  const result = await tablesDB.listRows({
    databaseId: DATABASE_ID,
    tableId: USERS_TABLE_ID,
    queries: [Query.equal("authUserId", currentUser.$id)],
  });

  const rows = result.rows || result.documents || [];

  if (rows.length === 0) {
    throw new Error("사용자 정보를 찾을 수 없습니다.");
  }

  return rows[0];
};
export const updateFavoriteBuildings = async (buildingKey) => {
  const userRow = await getCurrentUserRow();
  const currentFavorites = userRow.favoriteBuildings || [];

  const nextFavorites = currentFavorites.includes(buildingKey)
    ? currentFavorites.filter((building) => building !== buildingKey)
    : [...currentFavorites, buildingKey];

  return tablesDB.updateRow({
    databaseId: DATABASE_ID,
    tableId: USERS_TABLE_ID,
    rowId: userRow.$id,
    data: {
      favoriteBuildings: nextFavorites,
    },
  });
};
export const getMyProfile = async () => {
  const userRow = await getCurrentUserRow();

  return {
    email: userRow.email,
    username: userRow.username,
    nickname: userRow.nickname,
    favoriteBuildings: userRow.favoriteBuildings || [],
    deleted: userRow.deleted || false,
  };
};
export const validateActiveUser = async () => {
  const userRow = await getCurrentUserRow();

  if (userRow.deleted === true) {
    await account.deleteSession({
      sessionId: "current",
    });

    throw new Error("탈퇴 처리된 계정입니다.");
  }

  return userRow;
};
export const deleteCurrentUser = async () => {
  const currentUser = await account.get();

  const result = await functions.createExecution({
    functionId: DELETE_USER_FUNCTION_ID,
    body: JSON.stringify({
      userId: currentUser.$id,
    }),
    async: false,
  });

  const response = JSON.parse(result.responseBody || "{}");

  if (!response.ok) {
    throw new Error(response.message || "회원 탈퇴에 실패했습니다.");
  }

  return response;
};
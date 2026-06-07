import { Client, Users, TablesDB, Query } from "node-appwrite";

export default async ({ req, res, log, error }) => {
  try {
    const endpoint = process.env.APPWRITE_ENDPOINT;
    const projectId = process.env.APPWRITE_PROJECT_ID;
    const apiKey = process.env.APPWRITE_API_KEY;
    const databaseId = process.env.APPWRITE_DATABASE_ID;
    const usersTableId = process.env.APPWRITE_USERS_TABLE_ID;

    const payload = req.bodyJson || JSON.parse(req.body || "{}");
    const { userId } = payload;

    if (!userId) {
      return res.json({ ok: false, message: "userId is required." }, 400);
    }

    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId)
      .setKey(apiKey);

    const users = new Users(client);
    const tablesDB = new TablesDB(client);

    const result = await tablesDB.listRows({
      databaseId,
      tableId: usersTableId,
      queries: [Query.equal("authUserId", userId)],
    });

    const rows = result.rows || result.documents || [];

    if (rows.length > 0) {
      await tablesDB.updateRow({
        databaseId,
        tableId: usersTableId,
        rowId: rows[0].$id,
        data: {
          deleted: true,
          deletedAt: new Date().toISOString(),
        },
      });
    }

    try {
      await users.deleteSessions({ userId });
    } catch (sessionError) {
      log("deleteSessions failed: " + sessionError.message);
    }

    await users.delete({ userId });

    return res.json({
      ok: true,
      message: "User deleted successfully.",
    });
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, message: err.message }, 500);
  }
};
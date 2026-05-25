{
    "projectId": "6a0bd3c70007637f5038",
    "projectName": "New project",
    "endpoint": "https://fra.cloud.appwrite.io/v1",
    "settings": {
        "services": {
            "account": true,
            "avatars": true,
            "databases": true,
            "locale": true,
            "health": true,
            "storage": true,
            "teams": true,
            "users": true,
            "sites": true,
            "functions": true,
            "graphql": true,
            "messaging": true
        },
        "protocols": {
            "rest": true,
            "graphql": true,
            "websocket": true
        },
        "auth": {
            "methods": {
                "jwt": true,
                "phone": true,
                "invites": true,
                "anonymous": true,
                "email-otp": true,
                "magic-url": true,
                "email-password": true
            },
            "security": {
                "duration": 31536000,
                "limit": 0,
                "sessionsLimit": 0,
                "passwordHistory": 0,
                "passwordDictionary": false,
                "personalDataCheck": false,
                "sessionAlerts": false,
                "mockNumbers": []
            }
        }
    },
    "tablesDB": [
        {
            "$id": "post",
            "name": "hufs-board",
            "enabled": true
        }
    ],
    "tables": [
        {
            "$id": "post",
            "$permissions": [
                "create(\"users\")",
                "read(\"users\")",
                "update(\"users\")",
                "delete(\"users\")"
            ],
            "databaseId": "post",
            "name": "post",
            "enabled": true,
            "rowSecurity": false,
            "columns": [
                {
                    "key": "building",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "title",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 100,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "content",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 1000,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "imageId",
                    "type": "string",
                    "required": false,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "authorId",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "likes",
                    "type": "integer",
                    "required": false,
                    "array": false,
                    "default": 0,
                    "min": -9223372036854775808,
                    "max": 9223372036854775807
                }
            ],
            "indexes": [
                {
                    "key": "building",
                    "type": "key",
                    "status": "available",
                    "columns": [
                        "building"
                    ],
                    "orders": [
                        "asc"
                    ]
                }
            ]
        },
        {
            "$id": "comments",
            "$permissions": [
                "create(\"users\")",
                "read(\"users\")",
                "update(\"users\")",
                "delete(\"users\")"
            ],
            "databaseId": "post",
            "name": "comments",
            "enabled": true,
            "rowSecurity": false,
            "columns": [
                {
                    "key": "postId",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "content",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 500,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "authorId",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                }
            ],
            "indexes": []
        },
        {
            "$id": "repost",
            "$permissions": [
                "create(\"users\")"
            ],
            "databaseId": "post",
            "name": "repost",
            "enabled": true,
            "rowSecurity": false,
            "columns": [
                {
                    "key": "targetType",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 20,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "targetId",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "reason",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 200,
                    "default": null,
                    "encrypt": false
                },
                {
                    "key": "reporterId",
                    "type": "string",
                    "required": true,
                    "array": false,
                    "size": 50,
                    "default": null,
                    "encrypt": false
                }
            ],
            "indexes": []
        }
    ]
}

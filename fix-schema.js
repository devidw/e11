import fs from "fs"

const raw = fs.readFileSync("./openapi.json")

let json = JSON.parse(raw)

json = {
    ...json,
    servers: [{ url: "https://api.elevenlabs.io" }],
    "security": [
        {
            "apiKeyAuth": []
        }
    ],
    "components": {
        ...json["components"],
        "securitySchemes": {
            "apiKeyAuth": {
                "type": "apiKey",
                "in": "header",
                "name": "xi-api-key"
            }
        }
    }
}


fs.writeFileSync("openapi.fix.json", JSON.stringify(json, null, 4))
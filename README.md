# elf ~ e11

fully typed js/ts openapi client for elevenlabs api

- https://api.elevenlabs.io/docs

```bash
pnpm add e11
```

```ts
import { Configuration, TextToSpeechApi } from "e11"
import fs from "fs"

console.assert(process.env.SOME_SECRET)

const apiConfig = new Configuration({
  apiKey: process.env.SOME_SECRET,
})

const tts = new TextToSpeechApi(apiConfig)

const res = await tts.textToSpeechV1TextToSpeechVoiceIdPost(
  {
    voiceId: "21m00Tcm4TlvDq8ikWAM",
    bodyTextToSpeechV1TextToSpeechVoiceIdPost: {
      text: "helllo babeee",
      modelId: "eleven_multilingual_v2",
    },
  },
  {
    responseType: "arraybuffer",
  }
)

console.log(res.statusText)

fs.writeFileSync("output.mp3", Buffer.from(res.data))
```

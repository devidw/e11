import { TextToSpeechApi, Configuration } from "./dist/index.js"
import fs from "fs"

console.assert(process.env.SOME_SECRET)

const apiConfig = new Configuration({
    apiKey: process.env.SOME_SECRET,
})
const tts = new TextToSpeechApi(apiConfig)

const res = await tts.textToSpeechV1TextToSpeechVoiceIdPost(
    {
        voiceId: "21m00Tcm4TlvDq8ikWAM",
        // voiceId: "M4S31aOB9yV0JSy1XX3B",
        optimizeStreamingLatency: 0,
        bodyTextToSpeechV1TextToSpeechVoiceIdPost: {
            text: "helllo babeee",
            modelId: "eleven_multilingual_v2",
            voice_settings: {
                stability: 0.35,
                similarity_boost: 0.75, // clarity
                style: 0.25,
                use_speaker_boost: true,
            },
        }
    },
    {
        responseType: "arraybuffer",
    }
)

console.log(res.statusText)

fs.writeFileSync("output.mp3", Buffer.from(res.data))
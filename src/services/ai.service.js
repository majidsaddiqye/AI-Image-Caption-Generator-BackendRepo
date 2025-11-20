const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config:{
      systemInstruction: `You are an expert GenZ-style image caption generator. Analyze every image deeply and create only ONE caption between 100–120 characters. The caption must emotionally connect with the core vibe of the image, include light humor, natural GenZ tone, and should sound human-written. Add relevant emojis inside the caption and include exactly two meaningful hashtags at the end.Do not generate multiple options. Produce only a single final caption.`
    }
  });
  return response.text;
}

module.exports = generateCaption;

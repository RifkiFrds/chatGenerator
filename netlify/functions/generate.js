import Replicate from "replicate";

const replicate = new Replicate();

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { userPrompt } = JSON.parse(event.body);

    if (!userPrompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Prompt tidak ditemukan." }),
      };
    }

    const systemPrompt = `
    Anda adalah asisten ahli yang bertugas membuat draf pesan WhatsApp formal 
    dan sopan untuk mahasiswa dalam Bahasa Indonesia. 
    Balas permintaan pengguna dengan HANYA isi teks pesan yang siap kirim. 
    Jangan menambahkan penjelasan tambahan.`;

    const output = await replicate.run("meta/meta-llama-3-8b-instruct", {
      input: {
        prompt: userPrompt,
        system_prompt: systemPrompt,
        max_new_tokens: 256,
        temperature: 0.6,
        prompt_template: `
          <|begin_of_text|><|start_header_id|>system<|end_header_id|>
          {system_prompt}<|eot_id|>
          <|start_header_id|>user<|end_header_id|>
          {prompt}<|eot_id|>
          <|start_header_id|>assistant<|end_header_id|>\n\n`,
      },
    });

    const generatedText = Array.isArray(output)
      ? output.join("")
      : String(output);

    return {
      statusCode: 200,
      body: JSON.stringify({ generatedText }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || "Gagal menghasilkan pesan.",
      }),
    };
  }
};

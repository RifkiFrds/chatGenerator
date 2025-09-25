const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.handler = async function (event, context) {
  //mengizikan metode POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { template, inputs } = JSON.parse(event.body);
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt;

    switch (template) {
      case 'izin_sakit':
        prompt = `
          Anda adalah asisten mahasiswa yang cerdas dan sopan. 
          Buatkan sebuah pesan WhatsApp formal untuk dosen bernama ${inputs.namaDosen} untuk meminta izin tidak dapat mengikuti kelas mata kuliah ${inputs.matkul} pada hari ${inputs.hariTanggal} karena sakit. 
          Gunakan bahasa yang sopan, jelas, dan singkat.
          Sebutkan juga nama mahasiswa yaitu ${inputs.namaMahasiswa} dengan NIM ${inputs.nim}.
        `;
        break;
      case 'ingatkan_jadwal':
        prompt = `
          Anda adalah perwakilan kelas ${inputs.namaMahasiswa} (ketua kelas) yang sopan.
          Buatkan sebuah pesan WhatsApp untuk mengingatkan dosen bernama ${inputs.namaDosen} mengenai jadwal kelas mata kuliah ${inputs.matkul} yang akan diadakan pada hari ${inputs.hariTanggal}, jam ${inputs.jam}, di ruangan ${inputs.ruangan}.
          Gunakan bahasa yang sangat sopan dan tidak terkesan menuntut.
        `;
        break;
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid template type.' }),
        };
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      body: JSON.stringify({ generatedText: text }),
    };

  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate content from AI.' }),
    };
  }
};
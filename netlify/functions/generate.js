import Replicate from "replicate";

const replicate = new Replicate();

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { template, inputs } = JSON.parse(event.body);
    let userPrompt;

    switch (template) {
      case 'izin_sakit':
        userPrompt = `Tuliskan draf pesan WhatsApp yang sangat sopan dan formal dari seorang mahasiswa bernama ${inputs.namaMahasiswa} (NIM: ${inputs.nim}) kepada dosennya, ${inputs.namaDosen}. Tujuan pesan ini adalah untuk memberitahukan dengan penuh rasa hormat bahwa mahasiswa tersebut berhalangan hadir pada kelas mata kuliah '${inputs.matkul}' pada hari ${inputs.hariTanggal} dikarenakan sakit. Pastikan pesan ini singkat, jelas, mencerminkan permohonan maaf atas ketidakhadirannya, dan diakhiri dengan ucapan terima kasih yang tulus.`;
        break;
      case 'ingatkan_jadwal':
        userPrompt = `Sebagai perwakilan kelas, buatkan draf pesan WhatsApp yang bahasanya sangat halus dan sopan kepada dosen ${inputs.namaDosen}. Tujuan pesan ini adalah untuk melakukan konfirmasi secara hati-hati mengenai jadwal perkuliahan '${inputs.matkul}' yang akan berlangsung pada ${inputs.hariTanggal}, pukul ${inputs.jam} di ${inputs.ruangan}. Pastikan gaya bahasanya tidak terkesan menuntut atau menggurui, melainkan sebagai bentuk konfirmasi dengan niat baik. Akhiri dengan ucapan terima kasih.`;
        break;
      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid template type.' }),
        };
    }
    
    // System prompt disempurnakan agar AI memberikan output langsung.
    const systemPrompt = "Anda adalah asisten ahli yang bertugas membuat draf pesan WhatsApp formal dan sopan untuk mahasiswa dalam Bahasa Indonesia. Balas permintaan pengguna dengan langsung memberikan HANYA isi teks pesan yang lengkap dan siap kirim. Jangan menambahkan kalimat atau komentar apa pun di luar isi pesan itu sendiri.";
    
    const output = await replicate.run(
      "meta/meta-llama-3-8b-instruct",
      {
        input: {
          prompt: userPrompt,
          system_prompt: systemPrompt,
          max_new_tokens: 256,
          temperature: 0.6,
          prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\n{system_prompt}<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n"
        }
      }
    );

    // Hasil dari replicate.run() adalah array of strings
    const generatedText = output.join("");

    return {
      statusCode: 200,
      body: JSON.stringify({ generatedText }),
    };

  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Gagal menghasilkan konten dari AI.' }),
    };
  }
};
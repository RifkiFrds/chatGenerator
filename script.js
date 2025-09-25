document.addEventListener('DOMContentLoaded', () => {
    const templates = {
        izin_sakit: {
            title: 'Minta Izin Sakit/Keperluan Mendesak',
            inputs: [
              { name: 'namaMahasiswa', label: 'Nama Lengkap Anda', type: 'text', placeholder: 'cth: Budi Sanjaya' },
              { name: 'nim', label: 'NIM Anda', type: 'text', placeholder: 'cth: 202312345' },
              { name: 'namaDosen', label: 'Nama Dosen', type: 'text', placeholder: 'cth: Dr. Indah Permata, M.Kom.' },
              { name: 'matkul', label: 'Mata Kuliah', type: 'text', placeholder: 'cth: Pemrograman Web Lanjut' },
              { name: 'hariTanggal', label: 'Hari & Tanggal Izin', type: 'text', placeholder: 'cth: Senin, 25 September 2025' },
            ],
        },
        ingatkan_jadwal: {
            title: 'Mengingatkan Jadwal Kuliah',
            inputs: [
              { name: 'namaMahasiswa', label: 'Nama Lengkap Anda', type: 'text', placeholder: 'cth: Budi Sanjaya' },
              { name: 'nim', label: 'NIM Anda', type: 'text', placeholder: 'cth: 202312345' },
              { name: 'namaDosen', label: 'Nama Dosen', type: 'text', placeholder: 'cth: Prof. Dr. Ahmad Subarjo' },
              { name: 'matkul', label: 'Mata Kuliah', type: 'text', placeholder: 'cth: Kecerdasan Buatan' },
              { name: 'hariTanggal', label: 'Hari & Tanggal Kelas', type: 'text', placeholder: 'cth: Selasa, 26 September 2025' },
              { name: 'jam', label: 'Jam Kelas', type: 'text', placeholder: 'cth: 10:00 WIB' },
              { name: 'ruangan', label: 'Ruangan Kelas', type: 'text', placeholder: 'cth: Gedung C Ruang 301' },
            ],
        },
    };

    const form = document.getElementById('generator-form');
    const templateSelect = document.getElementById('template-select');
    const dynamicInputsContainer = document.getElementById('dynamic-inputs');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const resultTextarea = document.getElementById('result-textarea');
    const copyBtn = document.getElementById('copy-btn');
    const copySuccess = document.getElementById('copy-success');

    templateSelect.addEventListener('change', (e) => {
        const selectedTemplateKey = e.target.value;
        renderInputs(selectedTemplateKey);
        submitBtn.disabled = selectedTemplateKey === 'none';
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = 'Membuat Pesan...';
        resultContainer.style.display = 'none';

        const formData = new FormData(form);
        const inputs = Object.fromEntries(formData.entries());
        const template = templateSelect.value;

        try {
            // Panggil Netlify Function
            const response = await fetch('/.netlify/functions/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ template, inputs }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Terjadi kesalahan pada server.');
            }

            const data = await response.json();
            resultTextarea.value = data.generatedText;
            resultContainer.style.display = 'block';

        } catch (error) {
            resultTextarea.value = `Error: ${error.message}`;
            resultContainer.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = '✨ Generate Pesan';
        }
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(resultTextarea.value).then(() => {
            copySuccess.textContent = 'Pesan berhasil disalin!';
            setTimeout(() => { copySuccess.textContent = ''; }, 2000);
        });
    });

    function renderInputs(templateKey) {
        dynamicInputsContainer.innerHTML = '';
        if (templateKey === 'none' || !templates[templateKey]) {
            return;
        }

        const template = templates[templateKey];
        template.inputs.forEach(input => {
            const group = document.createElement('div');
            group.className = 'form-group';

            const label = document.createElement('label');
            label.htmlFor = input.name;
            label.textContent = input.label;

            const inputEl = document.createElement('input');
            inputEl.type = input.type;
            inputEl.id = input.name;
            inputEl.name = input.name;
            inputEl.placeholder = input.placeholder;
            inputEl.required = true;

            group.appendChild(label);
            group.appendChild(inputEl);
            dynamicInputsContainer.appendChild(group);
        });
    }
});
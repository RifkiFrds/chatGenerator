import { templates } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("generator-form");
  const templateSelect = document.getElementById("template-select");
  const dynamicInputsContainer = document.getElementById("dynamic-inputs");
  const submitBtn = document.getElementById("submit-btn");
  const resultContainer = document.getElementById("result-container");
  const resultTextarea = document.getElementById("result-textarea");
  const copyBtn = document.getElementById("copy-btn");
  const copySuccess = document.getElementById("copy-success");

  // form input
  templateSelect.addEventListener("change", (e) => {
    const selectedTemplateKey = e.target.value;
    renderInputs(selectedTemplateKey);
    submitBtn.disabled = selectedTemplateKey === "none";
    resultContainer.style.display = "none";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Membuat Pesan...";
    resultContainer.style.display = "none";
    copySuccess.textContent = "";

    const formData = new FormData(form);
    const inputs = Object.fromEntries(formData.entries());

    const templateKey = templateSelect.value;
    const template = templates[templateKey];

    if (!template) return;

    // gaya dropdown
    const style = inputs.gayaPesan || "formal";

    // kirim prompt dengan style
    const userPrompt = template.prompt(inputs, style);

    try {
      const response = await fetch("/.netlify/functions/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Terjadi kesalahan pada server.");
      }

      const data = await response.json();
      resultTextarea.value = data.generatedText;
      resultContainer.style.display = "block";
    } catch (error) {
      resultTextarea.value = `Error: ${error.message}`;
      resultContainer.style.display = "block";
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "✨ Generate Pesan";
    }
  });

  // Tombol salin
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultTextarea.value).then(() => {
      copySuccess.textContent = "Pesan berhasil disalin!";
      setTimeout(() => {
        copySuccess.textContent = "";
      }, 2000);
    });
  });

  // Render input dinamis
  function renderInputs(templateKey) {
    dynamicInputsContainer.innerHTML = "";
    if (templateKey === "none" || !templates[templateKey]) return;

    const template = templates[templateKey];
    template.inputs.forEach((input) => {
      const group = document.createElement("div");
      group.className = "form-group";

      const label = document.createElement("label");
      label.htmlFor = input.name;
      label.textContent = input.label;

      let inputEl;

      if (input.type === "select") {
        inputEl = document.createElement("select");

        // Placeholder default
        if (input.placeholder) {
          const defaultOpt = document.createElement("option");
          defaultOpt.value = "";
          defaultOpt.textContent = input.placeholder;
          defaultOpt.disabled = true;
          defaultOpt.selected = true;
          inputEl.appendChild(defaultOpt);
        }

        input.options.forEach((opt) => {
          const optionEl = document.createElement("option");
          optionEl.value = opt;
          optionEl.textContent = opt;
          inputEl.appendChild(optionEl);
        });
      } else {
        inputEl = document.createElement("input");
        inputEl.type = input.type || "text";
        inputEl.placeholder = input.placeholder || `Masukkan ${input.label}...`;
      }

      inputEl.id = input.name;
      inputEl.name = input.name;
      inputEl.required = true;

      group.appendChild(label);
      group.appendChild(inputEl);
      dynamicInputsContainer.appendChild(group);
    });
  }
});

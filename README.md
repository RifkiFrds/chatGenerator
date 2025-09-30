# 🎓 Student Chat Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deployed with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://chatgenai.netlify.app/)

A web app that helps students write polite and professional chat messages to their lecturers using AI-powered templates.

**Live Demo:** **[https://chatgenai.netlify.app/](https://chatgenai.netlify.app/)**

---

## ✨ Features

* **Categorized Templates:** Perkuliahan & Kelas, Administrasi Akademik, dan Bimbingan Skripsi/TA.
* **Flexible Tone:** Choose between Formal, Semi-Formal, or Casual (but still polite) writing styles.
* **AI-Powered:** Uses Llama 3 via the Replicate API to generate human-like text.
* **Responsive Design:** Looks great on both desktop and mobile devices.

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Backend:** Netlify Functions (Serverless)
* **AI:** Llama 3 8B Instruct via [Replicate API](https://replicate.com/meta/meta-llama-3-8b-instruct)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

**1. Clone the Repository**
```bash
git clone [https://github.com/RifkiFrds/chatGenerator](https://github.com/RifkiFrds/chatGenerator)
```

**2. Navigate to the Directory**
```bash
cd chatGenerator
```

**3. Install Dependencies**
```bash
npm install
```

**4. Set Up Environment Variables**
Create a new file named `.env` in the root of your project and add your Replicate API Token.

```env
REPLICATE_API_TOKEN="r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```
*(Get your token from the [Replicate API Tokens page](https://replicate.com/account/api-tokens))*

**5. Run the Development Server**
```bash
netlify dev
```
The app will be available at `http://localhost:8888`.

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ♥ by <b>rifkifrds</b>
</p>
# 📋 Osumare Landing Page Task

A modern and responsive landing page built using **React** and **Tailwind CSS**, featuring a modal form that collects user information and dynamically displays submissions in a table without page reload.

---
## Live Link
osumare-azure.vercel.app

## 🚀 Features

- **🖱️ Modal Form on Button Click**  
  - Clicking the **"Get Started"** button opens a centered pop-up form.

- **📝 Form Fields**  
  - Name  
  - Email  
  - Gender
  - Languages
  *(Additional fields can be added easily)*

- **✅ Validation**
  - Mandatory fields must be filled
  - Proper email format required
  - Displays error messages on invalid input

- **📩 Thank You Confirmation**
  - After submitting the form, a pop-up message confirms:
    > _"Thank you for your interest! We’ll get back to you soon."_

- **📊 Live Submission Table**
  - Submitted data instantly appears in a table at the bottom of the page
  - Columns:
    - Name
    - Email
    - Submission Timestamp
  - No page refresh required

- **💻 Responsive Design**
  - Fully mobile-friendly
  - Styled using **Tailwind CSS** as per Figma design

---

## 🛠️ Tech Stack

- **Frontend**: React.js  
- **Styling**: Tailwind CSS  
- **State Management**: React `useState`  
- **Date Handling**: JavaScript `Date.toLocaleString()`  

---

## 📦 Installation & Setup

```bash
npm install
npm start

# Assignment 1: Responsive Personal Portfolio Website

A modern, responsive personal portfolio website developed using clean, semantic **HTML5** and **CSS3**.

- 🌐 **Live Website (GitHub Pages):** [https://aahelgupta.github.io/personal-portfolio/](https://aahelgupta.github.io/personal-portfolio/)
- 🐙 **GitHub Repository:** [https://github.com/AahelGupta/personal-portfolio](https://github.com/AahelGupta/personal-portfolio)

---

## 🚀 How to Run in VS Code with `npm run dev`

1. Open this folder in **Visual Studio Code** (`File` > `Open Folder...`).
2. Open the VS Code integrated terminal (`Ctrl + \`` or `Terminal` > `New Terminal`).
3. Run the development command:
   ```bash
   npm run dev
   ```
4. The server will start and automatically open your portfolio at **`http://localhost:3000/`**!

---

## 📁 Project Structure

```text
personal-portfolio/
├── package.json          # npm configuration script ("dev": "node server.js")
├── server.js             # Zero-dependency local dev server (auto-opens browser)
├── index.html            # Main HTML document with all 5 required sections
├── README.md             # Project documentation & instructions
├── css/
│   └── style.css         # External stylesheet (Flexbox, Responsive, Hover Effects)
└── images/
    ├── profile.svg       # Profile vector illustration
    ├── project1.svg      # Preview thumbnail 1 (Analytics Dashboard)
    ├── project2.svg      # Preview thumbnail 2 (E-Commerce Storefront)
    └── project3.svg      # Preview thumbnail 3 (Kanban Planner)
```

---

## 📋 Requirements & Features Checklist

| # | Requirement | Status | Implementation Details |
|---|---|---|---|
| 1 | **Sections** | ✅ Complete | Includes **Home**, **About Me**, **Skills**, **Projects**, and **Contact** sections with smooth-scrolling IDs (`#home`, `#about`, `#skills`, `#projects`, `#contact`). |
| 2 | **Required Elements** | ✅ Complete | <ul><li>**Headings:** `<h1>` to `<h4>` hierarchy</li><li>**Paragraphs:** `<p>` tags for descriptions & bios</li><li>**Hyperlinks:** `<a>` tags in navbar, buttons, projects, contact, and footer</li><li>**Images:** `<img>` tags for avatar and project previews with descriptive `alt` tags</li><li>**Lists:** Both unordered (`<ul>`) and ordered (`<ol>`) lists</li><li>**Table:** Structured `<table>` with `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` for the Skills Matrix</li><li>**Form:** Complete `<form>` with text/email inputs, textarea, labels, and submit button</li></ul> |
| 3 | **CSS Styling** | ✅ Complete | External CSS file (`css/style.css`) using universal, element, class, ID, attribute selectors, pseudo-classes (`:hover`, `:focus`, `:nth-child()`), and pseudo-elements. |
| 4 | **Color & Typography** | ✅ Complete | Modern Dark Slate aesthetic (`#0a0f1d`, `#111827`, `#1f293d`) with vibrant Indigo/Violet accents, high-contrast text, and Google Fonts (*Space Grotesk* and *Plus Jakarta Sans*). |
| 5 | **Flexbox Layout** | ✅ Complete | Applied Flexbox to the navigation bar, hero container, stats bar, about lists, project cards grid, contact wrapper, and footer. |
| 6 | **Responsive Design** | ✅ Complete | Includes viewport meta tag and media queries (`@media (max-width: 992px)`, `@media (max-width: 768px)`, and `@media (max-width: 480px)`). |
| 7 | **Hover Effects & Transitions** | ✅ Complete | Smooth transitions (`transition: all 0.3s`) on button elevations, navbar animated underline, project card hover lifts, image zoom, table row highlights, and form focus glow. |

---

## 📤 Submission Instructions

1. Ensure all files are inside the `personal-portfolio` folder.
2. Upload the `personal-portfolio` folder (or `personal-portfolio.zip`) to your **Google Drive**.
3. Right-click the folder in Google Drive, select **Share**, and set access to:
   - **"Anyone with the link can view"**
4. Copy the link and submit it as required before the deadline.

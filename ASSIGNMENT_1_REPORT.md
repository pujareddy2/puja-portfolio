# STANLEY COLLEGE OF ENGINEERING & TECHNOLOGY FOR WOMEN
### (Autonomous) — Abids, Hyderabad - 500 001, Telangana
### Department of Computer Science & Engineering
## **ASSIGNMENT - 1 REPORT**
**Subject:** Full Stack Development `[SPC0701CS]`  
**Assignment:** Personal Portfolio Web Application  

---

## **Student Details**

| Field | Detail |
| :--- | :--- |
| **Name** | **Puja Midde** |
| **Roll No.** | **160623733160** |
| **Semester** | **VII Semester** |
| **Section** | **Section C** |
| **GitHub Repository URL** | `https://github.com/pujareddy2/puja-portfolio` |
| **Live Portfolio URL** | `https://pujaportfolio-m.vercel.app/` |
| **Contact Phone** | `(+91) 9121290915` |

---

## **1. Objective**
Design and develop an original, responsive, and accessible **Personal Portfolio Web Application** using **HTML5, CSS3, Bootstrap 5, and JavaScript (ES6+)**, demonstrating concepts covered in **Unit I and Unit II**. The application showcases personal profile, academic background, technical skills, research & work experience, projects, achievements, and contact information with client-side interactivity.

---

## **2. Technologies Used**

| Technology | Concepts / Features Used |
| :--- | :--- |
| **HTML5** | Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`), forms (`<form>`, `<input>`, `<textarea>`), lists (`<ul>`, `<ol>`), structured tables (`<table>`, `<thead>`, `<tbody>`), links (`<a>`), media icons, and accessibility tags. |
| **CSS3** | Custom variables/properties (`:root`, `[data-theme]`), box model, CSS Flexbox, CSS Grid layout, typography (Google Fonts *Inter* & *Outfit*), linear/radial gradients, transitions, and mobile-first responsive media queries (`@media`). |
| **Bootstrap 5** | Responsive 12-column Grid (`container`, `row`, `col-*`), Navbar with mobile collapse toggle, Cards (`card`, `card-body`), Badges, Buttons, Tables (`table-hover`, `table-striped`), Alerts (`alert-success`, `alert-danger`), and Modal dialogs (`modal-lg`). |
| **JavaScript (ES6+)** | `const`/`let` block scoping, arrow functions, template literals, array methods (`.filter()`, `.forEach()`, `.map()`, `.find()`), conditional branching, and objects. |
| **DOM & Events** | `document.getElementById()`, `querySelector()`, `addEventListener('click')`, `addEventListener('submit')`, `addEventListener('input')`, dynamic class manipulation (`classList.toggle`, `classList.add`), and modal instantiation. |
| **Validation** | Client-side form validation handling real-time inputs with Regular Expressions (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), length constraints, visual validation feedback (`is-valid` / `is-invalid`), and dynamic alert popups. |
| **Web Storage / APIs** | `localStorage` API for theme preference persistence across browser sessions, and Web Speech / Browser DOM APIs. |

---

## **3. Portfolio Features**

- **Home / Profile:** Hero landing area with interactive animated typing effect displaying multiple technical roles, student profile highlights, direct CTA buttons for project discovery, and social profiles (GitHub, LinkedIn).
- **About Me:** Comprehensive engineering biography, college affiliation, current semester, CGPA (8.75/10), and core strengths summary.
- **Education:** A structured, responsive HTML5 and Bootstrap striped table (`<table>`) presenting formal degrees (B.E CSE 2024–2027, Intermediate 2021–2023, SSC 2020–2021) with institutions, university boards, years of completion, and percentage/CGPA scores (8.75 CGPA).
- **Skills:** Categorized technical skill matrices (Languages, Web & Backend, AI & Machine Learning, Data Analytics & Cloud Tools) displayed using modern badge tags and card containers.
- **Experience / Internships:** Timeline showcasing research and software development internships at **Alonzo AI** (FastAPI workflows), **DRDO** (Intrusion Detection ML), **Lunabers** (Space-tech research), **Viswam.AI @ IIT Hyderabad** (LLM & RAG), **ApexPlanet**, **Edunet / Shell India**, and **Microsoft AI**.
- **Projects:** Interactive categorized grid showcasing 8 detailed engineering projects (Udaan AI, Legal Guardian AI, CareerPilot, AyuCare, MSME Platform, VeriMark, Visual Pattern Classifier, and ProductHub) with real-time browser preview frames.
- **Achievements / Certifications:** Recognition timeline including hackathon wins (AIHackDays Runner-Up, Infinity 2K25 3rd Place, Winovax 2026 Winner, Flipkart GRiD) and verified industry certifications (Oracle, Microsoft, IBM, Google, Deloitte).
- **Contact:** Contact card details (Email, Location, GitHub, LinkedIn) alongside an accessible contact form with real-time validation feedback.
- **JavaScript Interactive Features:**
  1. *Dark / Light Mode Theme Switcher* with `localStorage` persistence.
  2. *Dynamic Project Category Filtering* (`All`, `AI & GenAI`, `Full Stack Web`, `ML & Data Science`, `Automation & Agents`).
  3. *Interactive Project Details Modal* loading deep technical features dynamically into a Bootstrap modal.
  4. *Live Typing Animation* in the Hero section.
  5. *Real-Time Client-Side Form Validation* with dynamic dismissible success/error alerts.

---

## **4. Implementation Details**

### **HTML5 & CSS3**
- **Semantic HTML5 Structure:** Used `<header>`, `<nav>`, `<main>`, `<section id="...">`, `<article>`, and `<footer>` containers instead of unsemantic nested divs to ensure strict document outline and accessibility compliance.
- **CSS Flexbox / Grid:** Flexbox is utilized for navbar alignment, button groups, badge chips, and timeline items (`display: flex; align-items: center; justify-content: space-between;`). CSS Grid and Bootstrap rows are utilized for responsive 4-column and 2-column card layouts.
- **Styling and Layout:** Custom design system implemented in `css/style.css` using CSS custom properties (`--bg-body`, `--text-primary`, `--primary-color`, `--shadow-glow`) enabling instant zero-lag theme toggling.
- **Responsive Design & Media Queries:** Built with mobile-first breakpoints:
  ```css
  @media (max-width: 992px) { .hero-title { font-size: 2.4rem; } }
  @media (max-width: 768px) { section { padding: 3.5rem 0; } .custom-table { font-size: 0.85rem; } }
  @media (max-width: 576px) { .hero-title { font-size: 1.85rem; } }
  ```
- **Accessibility Features:** Implemented semantic labels (`<label for="...">`), ARIA attributes (`aria-label`, `role="alert"`), color contrast ratios exceeding WCAG AA standards, and visible keyboard focus states.

### **Bootstrap 5 UI**
- **Navbar:** Sticky responsive navigation bar with `.navbar-expand-lg`, `.navbar-brand`, `.navbar-nav`, and mobile collapse toggler.
- **Grid System:** 12-column responsive grid container with `.container`, `.row`, `.col-lg-4`, `.col-md-6`, `.g-4`.
- **Cards & Badges:** Clean card components with `.custom-card`, `.badge bg-primary`, and `.badge bg-secondary-subtle`.
- **Forms & Inputs:** Modern form controls using `.form-label`, `.form-control`, `.invalid-feedback`, `.is-valid`, and `.is-invalid`.
- **Tables:** Academic qualifications table structured with `.table`, `.table-hover`, and `.table-striped`.
- **Alerts & Modals:** Dynamic alert banners (`.alert .alert-success`) and responsive Bootstrap modal dialog (`#projectModal`).

### **JavaScript (ES6+)**
- **Variables / Data Types:** Used `const` for immutable objects/arrays and `let` for iteration state.
- **Functions / Arrow Functions:** Arrow functions implemented for array filtering and event callbacks:
  ```javascript
  const filtered = projectsData.filter(p => p.category === selectedCategory);
  ```
- **Arrays / Objects:** Comprehensive `projectsData` array of objects storing project metadata, technical features, and links.
- **DOM Manipulation:** Elements dynamically generated and injected using `document.getElementById()`, `createElement()`, `appendChild()`, and `innerHTML`.
- **Event Handling:** Click events for theme switching and category filtering; input events for real-time validation; submit event for form submission.
- **Form Validation Logic:**
  ```javascript
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(value)) {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
  }
  ```

---

## **5. Screenshots of Completed Application**

| Screenshot # | Description | Target View |
| :---: | :--- | :--- |
| **Screenshot 1** | **Desktop / Home Page View** | Full desktop view showing Navbar, Hero section with typing effect, and About Me section. |
| **Screenshot 2** | **Mobile / Responsive View** | Mobile viewport (e.g. iPhone / Android layout) showing mobile collapsed navbar and responsive cards. |
| **Screenshot 3** | **JavaScript Interactive Feature** | Dynamic project filtering tabs in action and Dark Mode active state. |
| **Screenshot 4** | **Form Validation & Dynamic Alerts** | Contact form displaying green `.is-valid` / red `.is-invalid` borders and the dynamic alert banner. |

---

## **6. Testing Table**

| Test Case | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :---: |
| **Navigation links** | Clicking on navbar links smoothly scrolls to the exact respective section on the page. | Page smoothly scrolls to section with navbar offset. | **PASS** |
| **Contact form with valid data** | Form validates all inputs, clears inputs, and displays green success alert banner. | Form accepted, inputs reset, success alert rendered dynamically. | **PASS** |
| **Contact form with invalid data** | Invalid fields highlighted in red with feedback messages; error alert displayed. | Red border feedback displayed, submission blocked, danger alert shown. | **PASS** |
| **JavaScript interactive features** | Theme button toggles between Light/Dark modes instantly; filter buttons dynamically filter project cards. | Theme transitions smoothly and projects filter instantly using DOM manipulation. | **PASS** |
| **Mobile responsive layout** | Layout collapses into a single fluid column without horizontal scrolling on mobile viewports. | Layout adapts cleanly with responsive typography and collapsible mobile menu. | **PASS** |

---

## **7. Learning Outcomes**
1. **Mastery of Semantic HTML5 & Structure:** Gained hands-on experience in organizing complex web content into accessible, search-engine-friendly semantic document structures.
2. **Responsive CSS3 & Design Systems:** Learned to build scalable design tokens using CSS variables, custom Flexbox/Grid layouts, and mobile-first media queries.
3. **Component-Driven UI with Bootstrap 5:** Effectively integrated Bootstrap's grid, responsive components, tables, and modal dialogs to build polished interfaces quickly.
4. **Client-Side ES6+ Interactivity:** Implemented modern JavaScript programming including array manipulation (`.filter()`, `.map()`), DOM event handling, `localStorage` state persistence, and dynamic content injection.
5. **Form Validation & User Feedback:** Developed robust client-side validation logic using Regular Expressions and dynamic visual feedback to elevate user experience.

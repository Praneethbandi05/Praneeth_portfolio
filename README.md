# Bandi Praneeth — Personal Developer Portfolio

Welcome! This repository contains the source code for my personal developer portfolio website. I built this project to showcase my engineering journey, hands-on projects, cloud and DevOps experience, competitive coding milestones, and research work in a clean, modern, and interactive format.

I am preparing to deploy this live with a custom `.tech` domain (such as `bandipraneeth.tech`).

---

## 👨‍💻 About Me

I am a Computer Science & Engineering undergraduate at **Vasireddy Venkatadri Institute of Technology (VVIT)**, passionate about:
- **Cloud & DevOps**: AWS (Certified Cloud Practitioner CLF-C02), Linux (Red Hat/APSSDC), Docker, and infrastructure automation.
- **Full-Stack & Mobile Development**: React, TypeScript, Tailwind CSS, Flutter, Python, and Java.
- **Problem Solving & Algorithms**: 600+ problems solved on CodeChef and competitive coding platforms.
- **Applied AI & Medical Imaging**: Deep learning classification using retinal fundus photography and Grad-CAM explainability.

---

## ✨ Features & Architecture

- **Dedicated Page Navigation**: Clean page architecture with routes for:
  - `Home`: Introduction, headline, quick-jump cards, and profile overview.
  - `About`: Engineering philosophy, academic background at VVIT, and recognitions.
  - `Skills Matrix`: Categorized proficiencies across Programming, Cloud/DevOps, Databases, and Tools.
  - `Projects`: Deep-dive case studies for **Rythu Nestham** (Flutter mobile app), **Trust Chit** (financial management system), and **Cardiovascular Fundus AI** (deep learning vision).
  - `Experience`: Internship timeline covering roles at **Gloom Dev** and **APSSDC**.
  - `Certifications`: Accredited certifications from AWS, Salesforce, NPTEL, and freeCodeCamp.
  - `Research Blog`: In-depth research writeup on Retinal Fundus AI biomarkers and explainable heatmaps.
  - `Contact`: Interactive inquiry form with celebration confetti and direct contact details.
- **Alternating Dark & Light Themes**: Dynamic theme transitions between pages with a tech-grid background.
- **High-Contrast Light Theme**: Custom high-contrast typography, crisp card borders, and clear elevation.
- **Ambient Mouse Blur Light**: Smooth, GPU-accelerated cursor lighting effect with an enhanced light-mode pointer follower.
- **Top Taskbar Quick Action**: Dedicated "View Resume" button in the navigation header that directly downloads my latest resume PDF.
- **Command Palette (`Ctrl + K` / `Cmd + K`)**: Quick keyboard-driven spotlight search to jump across sections, copy contact info, or toggle sound effects.
- **Centralized Data File**: All personal details, projects, contacts, and credentials live in a single file (`src/data/portfolioData.ts`), making future updates effortless.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + custom responsive utilities
- **Icons**: Lucide React + custom SVGs
- **Interactive Effects**: HTML5 Canvas, Web Audio API, Canvas Confetti

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18 or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Praneethbandi05/Praneeth_portfolio.git
   cd Praneeth_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled, optimized production files will be generated in the `dist/` directory.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to a Custom `.tech` Domain

This portfolio is configured as a static Vite Single-Page Application (SPA) ready to deploy on any modern hosting provider:

### Option A: Vercel (Recommended)
1. Push this repository to GitHub (`Praneethbandi05/Praneeth_portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.
6. Once deployed, navigate to **Settings > Domains** and enter your custom `.tech` domain (e.g. `yourname.tech`).
7. Update the DNS records in your domain registrar (Namecheap, GoDaddy, Hostinger, etc.):
   - **Type**: `CNAME` | **Name**: `@` or `www` | **Value**: `cname.vercel-dns.com`

### Option B: Netlify
1. Connect the GitHub repo to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Under **Domain Management**, add your custom `.tech` domain and configure the provided DNS records.

### Option C: GitHub Pages
1. Install `gh-pages` or set up GitHub Actions with the Vite build workflow.
2. Under **Repository Settings > Pages**, configure your custom domain and add a `CNAME` file pointing to it.

---

## 📁 Project Structure

```text
Portfolio/
├── public/                      # Static assets (Resume PDF, profile images)
│   ├── Bandi_Praneeth_Resume.pdf
│   └── favicon.svg
├── src/
│   ├── components/              # Reusable UI sections and components
│   │   ├── About.tsx            # About & education section
│   │   ├── Certifications.tsx   # Verified credentials & achievements
│   │   ├── CommandPalette.tsx   # Ctrl+K spotlight search modal
│   │   ├── Contact.tsx          # Contact form & social coordinates
│   │   ├── Experience.tsx       # Internship timeline
│   │   ├── Footer.tsx           # Page footer with navigation links
│   │   ├── Hero.tsx             # Home hero with circular portrait
│   │   ├── MouseBlurLight.tsx   # Ambient mouse blur light tracker
│   │   ├── Navbar.tsx           # Fixed top taskbar with "View Resume" button
│   │   ├── Projects.tsx         # Verified project showcase
│   │   ├── Skills.tsx           # Technical skills matrix
│   │   └── Toast.tsx            # Notification system
│   ├── data/
│   │   └── portfolioData.ts     # Central source of truth for resume & content
│   ├── utils/
│   │   ├── confetti.ts          # Particle celebration animations
│   │   └── sound.ts             # Web Audio API sound synthesizer
│   ├── App.tsx                  # Main application orchestrator & theme router
│   ├── index.css                # Global styles, fonts, and light/dark themes
│   └── main.tsx                 # React application entry point
├── package.json                 # Project dependencies and npm scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
└── README.md                    # Project documentation
```

---

## 📬 Connect With Me

- **Email**: [praneethb523@gmail.com](mailto:praneethb523@gmail.com)
- **GitHub**: [github.com/Praneethbandi05](https://github.com/Praneethbandi05)
- **LinkedIn**: [linkedin.com/in/bandi-praneeth-1a535031b](https://www.linkedin.com/in/bandi-praneeth-1a535031b)
- **CodeChef**: [codechef.com/users/vvit23bq1a6106](https://www.codechef.com/users/vvit23bq1a6106)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

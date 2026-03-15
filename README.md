# 📄 Free Worksheet Generator

> AI-powered printable worksheets for UK primary school children — Maths, English & Science, Years 1–6.
> **Completely free. No subscription. No ads. No account needed.**

---

## ✨ What it does

- Generates **fresh, unique worksheets** every time using Claude AI
- Covers the full **UK National Curriculum** for Years 1–6
- **3 subjects**: Maths, English, Science
- **8 topics per subject per year** = 144 topic areas total
- **3 difficulty levels**: Gentle intro / Standard / Challenging
- Choose **10, 15 or 20 questions** per worksheet
- Personalised with the **child's name** printed on every sheet
- Includes **answer key + parent tips** on every worksheet
- **Star rating** so children can reflect after each session
- **Progress tracker** to tick off completed topics
- Clean **print layout** — print from browser or save as PDF
- Works without an API key in **Free Mode** (built-in question banks)

---

## 🚀 Deploy to GitHub Pages (free, 5 minutes)

GitHub Pages hosts your site for free at `https://your-username.github.io/worksheet-generator`

### Step 1 — Create a GitHub account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click **Sign up** in the top right
3. Enter your email, create a password, and choose a username
4. Verify your email address

### Step 2 — Create a new repository

1. Once logged in, click the **+** icon in the top right corner
2. Select **New repository**
3. Fill in the details:
   - **Repository name**: `worksheet-generator`
   - **Description**: Free AI-powered worksheet generator for UK primary schools
   - **Visibility**: Select **Public** *(required for free GitHub Pages)*
4. Click **Create repository**

### Step 3 — Upload the file

1. On your new repository page, click **Add file**
2. Select **Upload files**
3. Drag and drop the `index.html` file, or click **choose your files** to browse for it
4. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages

1. Click the **Settings** tab at the top of your repository
2. In the left sidebar, scroll down and click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** from the dropdown
5. Leave the folder as **/ (root)**
6. Click **Save**

### Step 5 — Get your link

1. Wait **1–2 minutes** for GitHub to build your site
2. Refresh the Settings → Pages page
3. You will see a green banner with your URL:
   `https://your-username.github.io/worksheet-generator`
4. Click **Visit site** to confirm it is working

### Step 6 — Share it!

Copy your link and share with family, teachers, and friends. Anyone can use it immediately in Free Mode with no setup.

---

## 🔑 Setting up an API key (unlocks unlimited AI worksheets)

The app works straight away in **Free Mode** without any setup. To unlock **unlimited AI-generated worksheets unique every time**, follow these steps:

### Getting your API key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Click **Sign up** and create a free account
3. Verify your email address
4. In the left sidebar, click **API Keys**
5. Click **+ Create Key**
6. Give your key a name, for example: `Worksheet Generator`
7. Click **Create Key**
8. ⚠️ **Copy the key immediately** — it starts with `sk-ant-` and will only be shown once
9. Save it somewhere safe such as your phone Notes app or a password manager

### Adding your key to the app

1. Visit your deployed site
2. Click the **Add API key** button in the top right corner of the page
3. Paste your key into the box
4. Click **Save and activate**
5. The button turns green and shows **API key active**

### How much does it cost?

- New Anthropic accounts receive **free starter credits** to get going
- After that, generating one worksheet costs approximately **£0.001** (less than a tenth of a penny)
- No monthly fees — you only pay for what you use
- You can set a spending limit at [console.anthropic.com](https://console.anthropic.com) for peace of mind

### Changing or removing your key

- Click the **API key active** button in the header at any time
- Paste a new key to replace the current one
- Or click **Remove key** to switch back to Free Mode
- Your key is stored only in **your browser** — it is never sent to anyone except Anthropic's servers

---

## 🆓 Free Mode vs AI Mode

| Feature | Free Mode | AI Mode |
|---|---|---|
| Requires sign-up | No | No (API key only) |
| Costs anything | Never | Less than £0.001 per sheet |
| Works immediately | Yes | After pasting API key |
| Question variety | Built-in bank, shuffled randomly | Unique every time |
| Topics covered | All 144 topics | All 144 topics |
| Personalised with child's name | Yes | Yes |
| Answer key included | Yes | Yes |
| Parent tips included | Basic upgrade note | Full AI-generated tips |
| Print and PDF | Yes | Yes |

---

## ❓ Troubleshooting

### "Could not generate worksheet" error

- Click the **API key** button in the header and check your key is correct
- Make sure it starts with `sk-ant-`
- Check you have credits remaining at [console.anthropic.com](https://console.anthropic.com)
- Try removing and re-adding your key

### I forgot to copy my API key when I created it

- API keys can only be viewed once at the moment of creation
- Go to [console.anthropic.com](https://console.anthropic.com) and click **API Keys**
- Click the three dots next to your old key and select **Delete**
- Click **+ Create Key** to create a fresh one
- Copy it immediately this time and add it to the app

### I entered the wrong API key

- Click the **Add API key** or **API key active** button in the top right of the app header
- Clear the field and type or paste your correct key
- Click **Save and activate**
- If you are unsure of your key, create a new one at [console.anthropic.com](https://console.anthropic.com)

### The site is not loading after deployment

- Wait 2–3 minutes — GitHub Pages can take a moment to go live the first time
- Make sure you uploaded `index.html` directly, not a folder containing it
- Check Settings → Pages shows your URL in a green banner
- Try opening the URL in a private or incognito browser window

### Progress is not saving between visits

- Progress is stored in your browser's local storage
- It will not transfer between different devices or different browsers
- Clearing your browser data will reset your progress

### The app looks broken or unstyled

- Make sure you downloaded the complete `index.html` file
- Try a hard refresh: hold **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac)
- Try a different browser such as Chrome or Firefox

---

## 🗺️ Roadmap — coming soon

- [ ] Tricky concept deep-dives (equivalent fractions, fronted adverbials, circuit symbols)
- [ ] Download directly as a PDF file without printing
- [ ] Multiple children profiles to track progress separately
- [ ] Timed quiz and test mode
- [ ] Image-based Science questions with diagrams to label
- [ ] Welsh curriculum option
- [ ] Weekly challenge mode
- [ ] Parent dashboard to view progress across all topics

---

## 🤝 For teachers and schools

This tool is completely free to use in classrooms and schools. If you are a teacher and would like to suggest additional topics, curriculum corrections, or new question formats, please open an **Issue** on GitHub. Contributions are very welcome.

---

## 🛠️ Technical notes (for developers)

- **Pure HTML, CSS and JavaScript** — no build tools, no frameworks, no dependencies to install
- Single `index.html` file — easy to host anywhere, not just GitHub Pages
- Uses [Claude AI](https://anthropic.com) (`claude-sonnet-4` model) via the Anthropic API
- API calls are made directly from the browser using the `anthropic-dangerous-direct-browser-access` header
- The API key is stored only in browser `localStorage` — never transmitted to any third-party server
- Google Fonts (Nunito) loaded from CDN — works offline if cached
- Dark mode supported automatically via `prefers-color-scheme` media query
- Print stylesheet built in — no extra tools needed for clean PDF export

### How to update the app after deployment

1. Make your changes to `index.html` on your computer
2. Go to your GitHub repository
3. Click on `index.html` in the file list
4. Click the **pencil / edit icon** in the top right
5. Select all the existing code and replace it with your updated code
6. Click **Commit changes**
7. GitHub Pages redeploys automatically within 1–2 minutes

---

## 📄 Licence

MIT Licence — free to use, modify, and share for any purpose.

---

## 💬 Credits

Built with love for families and schools everywhere.
Powered by [Claude AI](https://anthropic.com) by Anthropic.

*"Education should be free to all."*

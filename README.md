# PYKE Website — v1

## What's here
- `index.html` — homepage: hero, mission statement, three ski mask feature sections, story, email signup
- `style.css` — all styling, dark theme, responsive
- `script.js` — GSAP ScrollTrigger scroll animations + simple SVG mask graphics

## Preview it locally
Just open `index.html` in a browser. No build step needed, it's plain HTML/CSS/JS.

## Push to GitHub + deploy on Vercel
1. Create a new GitHub repo (e.g. `pyke-site`)
2. From this folder, run:
   ```
   git init
   git add .
   git commit -m "PYKE homepage v1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/pyke-site.git
   git push -u origin main
   ```
3. In Vercel: "Add New Project" → import the `pyke-site` repo → Deploy
4. In Vercel project settings → Domains → add `ridepyke.com`
5. Copy the DNS records Vercel gives you into Porkbun's DNS settings for ridepyke.com

## Next steps
- Swap the placeholder SVG mask graphics for real product photos once the sample arrives
- Wire the email signup form to an actual mailing list tool (Mailchimp, ConvertKit, etc.) instead of the placeholder button
- Add real copy/photos to the Story section

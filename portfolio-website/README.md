# Aayush Gupta Portfolio Website

This is a static portfolio website for Aayush Gupta. It is designed to be hosted on GitHub Pages and built with HTML, CSS, and JavaScript.

## Website structure

```
portfolio-website/
  index.html
  style.css
  script.js
  assets/
    images/
      profile-placeholder.png
      banner-placeholder.png
    resume/
      Aayush_Gupta_Resume.pdf
  README.md
```

## Deploy to GitHub Pages

1. Create a new GitHub repository named:

```
aayush-gupta-portfolio
```

2. Add the generated files:

```
index.html
style.css
script.js
assets/
README.md
```

3. Commit and push the code:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/mirorit/portfolio.git
git push -u origin main
```

4. Enable GitHub Pages:

- Go to GitHub repository → Settings → Pages
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/root`
- Click Save

5. Your website will be available at:

```
https://mirorit.github.io/aayush-gupta-portfolio/
```

## Update the website

To update content or styles:

```bash
git add .
git commit -m "Update portfolio website"
git push
```

## Customize this portfolio

- Replace placeholder links with your actual GitHub and LinkedIn
- Update the email address and contact details
- Replace placeholder images in `assets/images/`
- Replace the resume file in `assets/resume/Aayush_Gupta_Resume.pdf`
- Add live project links and GitHub repo URLs in the project cards

## Notes

- This website is fully static and requires no backend server.
- For contact form functionality on GitHub Pages, integrate Formspree or another static form service.

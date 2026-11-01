# Farouk Yartaoui — personal academic website

A small, responsive website for GitHub Pages. Plain HTML and CSS; no installation or build required.

## Personalize

- Home (`index.html`): short bio, photo, and an empty news section. Add entries when ready.
- Research (`research/index.html`): research interests and future papers.
- CV (`cv/index.html`): brief education and experience lists, without detailed job descriptions, projects, or skills.
- Teaching (`teaching/index.html`): teaching roles and courses.
- Your portrait is `photo.jpeg`. It is displayed in its original square proportions and colors.
- Your Inria email, GitHub, and LinkedIn are linked through accessible SVG icons on the homepage.
- Add papers on the Research page with a title, authors, venue/year, and paper/code links. The source marks where they go.
- Education, internships, and teaching are summarized from your supplied CV and corrections. The MVA (2025–2026) and engineering degree (2022–2026) were completed in October 2026; the PhD is listed as November 2026–present. The Inria internship ran from April to October 2026. Bachelor’s teaching comprised two mathematics tutorials in the 2023–2024 academic year, likely March 2024; the page uses the academic year because the month is uncertain.
- Add a CV PDF link under Education & CV when available. The current PhD entry describes your research affiliation, without inventing a degree-granting university.
- All four pages share `style.css`. Navigation links explicitly include `index.html` so they work when opened directly from disk as well as on GitHub Pages.
- A sun/moon button in every page’s header switches between light and dark mode. The initial mode follows the device setting; `theme.js` remembers an explicit choice using local storage when available. Storage behavior for pages opened directly from disk depends on the browser; preferences are shared across pages when hosted on GitHub Pages.
- Both themes use neutral backgrounds and restrained red accents. The portrait has no border or shadow. Change colors and spacing in `style.css`.
- Linked Inria and SODA logos appear above the introduction. Local files are in `assets/`; original logo colors are preserved. Inria’s logo comes from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Inr_logo_rouge.svg), and SODA’s logo from [the team’s GitHub profile](https://github.com/soda-inria).

## Preview

Open `index.html` in your browser. Relative paths also work if this is hosted as a project site under a subdirectory.

## Publish on GitHub Pages

1. Create a GitHub repository named `Farouc.github.io` in your `Farouc` account.
2. Upload `index.html`, `style.css`, `theme.js`, `.nojekyll`, `photo.jpeg`, and the `assets/`, `research/`, `cv/`, and `teaching/` folders to the repository's `main` branch. Keep each page folder's `index.html` inside that folder. Include your CV PDF if you add one.
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. After the GitHub deployment completes, visit `https://farouc.github.io/`.

Later edits pushed to `main` update the website automatically.

See the official [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) and [publishing source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

GitHub Pages address: https://farouc.github.io/

Run the theme behavior check with `node tests/theme.test.cjs`.

## Search visibility

`sitemap.xml` lists the four pages, `robots.txt` advertises the sitemap and permits crawling, and each page declares its canonical URL. Keep the sitemap and canonical links in sync when adding or renaming pages. Include both files when uploading manually.

For Google, add `https://farouc.github.io/` as a URL-prefix property in [Search Console](https://search.google.com/search-console/). Verify ownership using Google's HTML tag or file, submit `sitemap.xml`, and inspect the homepage URL to request indexing. Verification must use the token issued for your own Google account. Discovery and indexing are controlled by Google and are not immediate or guaranteed.

# Next.Js Portfolio Website with Nextjs, Tailwind CSS and Framer-motion

Generated following the tutorial below👇: <br />
https://youtu.be/Yw7yWHigGKI <br />
[![YouTube Video Views](https://img.shields.io/youtube/views/Yw7yWHigGKI?style=social)](https://youtu.be/Yw7yWHigGKI)<br />


### Resources Used in This Project

- Profile image in the home and about pages created by using https://www.midjourney.com/ tool.
- Fonts from https://fonts.google.com/ <br />
- Icons from https://iconify.design/ <br />

### External Libraries used in this project:

- [framer-motion](https://www.framer.com/motion/) <br />
- [Tailwind css](https://tailwindcss.com/) <br />

## Run Locally With Docker + Conda

Build the image:

```bash
docker build -t ian-portfolio .
```

Run the app on `http://localhost:3000`:

```bash
docker run --rm -it -p 3000:3000 ian-portfolio
```

Or with Docker Compose:

```bash
docker compose up --build
```

Optional (live-reload with local source mounted):

```bash
docker run --rm -it -p 3000:3000 -v "$PWD":/app -v /app/node_modules ian-portfolio
```

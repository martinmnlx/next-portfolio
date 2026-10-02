# Project Media (Screenshots & Demo Videos)

Place project media files in their respective directories below:

- `public/projects/soa-manager/`
- `public/projects/talentados/`
- `public/projects/taftics/`
- `public/projects/callbot/`
- `public/projects/eventbuddy/`
- `public/projects/digital-loveprint/`
- `public/projects/sword-of-vengeance/`

### Aspect Ratio Recommendation
Recommended screenshot and video aspect ratio is **16:10** (e.g., `1920x1200`, `2560x1600`, or `1440x900`), which matches modern display viewports and the showcase card container. Standard 16:9 (`1920x1080`) videos are also supported and letterbox cleanly.

---

### Option 1: Single Demo Video
To display a single demo video in the showcase section instead of multiple screenshots, configure `video` on the project in `src/data/projects.ts`:

```ts
video: {
  src: "/projects/eventbuddy/eventbuddy.mp4",
  title: "Interactive Hall Reservation Demo",
  description: "Walkthrough of calendar availability checks and reservation flow.",
}
```
Or simply:
```ts
video: "/projects/eventbuddy/eventbuddy.mp4"
```

---

### Option 2: Sequential Screenshots
To display sequential feature screenshots with subtext, configure `showcase` in `src/data/projects.ts`:

```ts
showcase: [
  {
    title: "Live Statement Editor",
    description: "Cloud-based editor featuring live auto-save and PDF export.",
    media: {
      type: "image",
      src: "/projects/soa-manager/editor.png",
      alt: "Statement Editor interface screenshot",
    },
  },
]
```
If `src` is omitted, the card gracefully displays an interactive placeholder window with the feature's title.

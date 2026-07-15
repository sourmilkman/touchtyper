# TouchTyper

TouchTyper is an installable, portrait-first touch-typing course designed for a physical keyboard connected to a phone. It begins with the F and J home keys, teaches the correct finger for each reach, and gradually unlocks lessons and games when both accuracy and speed targets are met.

## Features

- 18 progressive lessons from home-row placement to full fluency
- Live WPM, accuracy, elapsed time, finger guidance, and an on-screen keyboard
- Three games that unlock as the course progresses
- Adaptive reporting of keys that need more practice
- Local progress, lesson mastery, streaks, daily goals, and recent session history
- JSON export/import for moving progress between browsers or devices
- Offline service worker and installable PWA manifest
- Portrait mobile layout, high-contrast option, reduced-motion support, sound and haptic feedback

## Run locally

The app has no build step or dependencies. Serve the repository over HTTP:

```bash
npx serve .
```

Then open the displayed URL. Service workers and installation require HTTP(S), not a direct `file://` URL.

## GitHub Pages

In the repository settings, choose **Pages → Deploy from a branch → main / root**. The app uses only relative asset paths and works from the repository subpath.

## Progress model

Progress is stored in `localStorage` under `touchtyper-progress-v1`. A lesson unlocks the next lesson only when its accuracy and WPM thresholds are both reached. Settings contains export, import, and reset controls.

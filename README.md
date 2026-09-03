# Digital ID Flip

In this existing Student Profile HTML page (Vriddhi), I want to add a "Digital ID" flip-to-fullscreen QR effect, similar to how DigiLocker's Aadhaar card works when you tap the QR code.

Trigger: Tapping the QR widget (.prof-qr) in the hero header.

Effect sequence:

On tap, the three main content cards currently stacked in the scroll area — the vitals trio card (.prof-vitals-pin), the Institution card (.prof-inst), and the Student Information card (.prof-sec grid) — should animate together as if they are physical cards being gathered into one stack. They should translate toward the center of the screen and scale/converge into a single unified card shape (as if merging/joining edges), not just fade out.

As they converge, they should flip (3D rotateY, like a card flip) to reveal a "back side."

The back side is a single full-screen (or near-full-screen, edge-to-edge) card showing ONLY a large QR code — big enough for a scanner/examiner to scan easily — centered, on a plain high-contrast background (white QR panel), with the student's name and Member ID shown small below or above it for verification context.

The hero header, bottom nav, and sign-out button should hide or fade out during this fullscreen QR state, so it's a clean distraction-free scan screen.

Add a close/back button (top-left, circular, same style as the existing .prof-nav-btn) on the fullscreen QR view that reverses the whole animation — the QR flips back and the cards un-merge, un-flip, and animate back to their original stacked positions, restoring the normal profile view.

Technical constraints:

Keep this as a single self-contained HTML file — same structure, same CSS variable system (--prof-*), same Inter font and Iconify icons already used in the page.

Use CSS 3D transforms (transform-style: preserve-3d, perspective, rotateY) and transitions/keyframes for the flip — avoid heavy JS animation libraries, plain CSS transitions + a few JS class toggles is preferred.

Animation should feel physical/springy — around 500–700ms, easing like cubic-bezier(.34,1.56,.64,1) for the "merge" and a separate smooth flip easing for the rotateY.

Preserve mobile-first sizing (max-width 480px container) — the fullscreen QR should still respect this container width, not break out to true viewport width.

QR content in fullscreen state should reuse the same QR SVG pattern already in the code, just scaled up significantly (at least 220–260px square) with generous white padding around it for scan reliability.

Everything must degrade gracefully — if animations are disabled/reduced-motion is set, just cut straight to the fullscreen QR view with no visual flipping, using an instant fade instead.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b198935f-534f-42fe-a8b3-44cf28ae58f0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

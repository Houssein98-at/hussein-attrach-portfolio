# Hussein ATTRACH — Portfolio

Personal developer portfolio for Hussein ATTRACH, Senior Flutter Developer and Software Engineer.

## Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Local Development Instructions

### Installation

1. Ensure you have Node.js 18+ installed.
2. Clone the repository and install dependencies:

```bash
npm install
```

### Run Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment.

### Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

1. Push the code to the `main` branch of your repository (`Houssein98-at/hussein-attrach-portfolio`).
2. Go to your repository settings -> Pages.
3. Under "Build and deployment", set the Source to "GitHub Actions".
4. The `.github/workflows/deploy.yml` will automatically build and deploy the site whenever you push to `main`.

## Project Structure

- `src/app/` - Next.js App Router pages and global layout.
- `src/components/` - Reusable UI components and page sections.
- `src/data/` - Content and metadata (profile, experience, skills, clients, CTS data).
- `public/` - Static assets, images, and screenshots.

## Updating Content

### How to update CTS screenshots
1. Place the new images inside the appropriate subfolder in `public/images/cts/` (e.g., `public/images/cts/dashboard/`).
2. Open `src/data/ctsData.ts`.
3. Update the `ctsScreenshots` array with the new image paths, titles, and descriptions.
4. Set `safeForPublic: true` if the image has been verified and sanitized (this will remove the blur and warning overlay).

### How to update clients
1. Open `src/data/clients.ts`.
2. Add or modify the client objects in the `clientsData` array.

### How to update personal information
1. Open `src/data/profile.ts`.
2. Update the contact links, summary, or metrics.

### How to update CV
Currently, contact buttons exist in the Footer and Contact sections. You can add a new button pointing to a PDF (e.g., placed in `public/documents/Hussein_ATTRACH_CV.pdf`) by updating the UI components where appropriate.

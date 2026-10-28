<div align="center">
  <h1>YOLO Detection Frontend</h1>
  <p>An image-upload interface for a separate object-detection API.</p>
  <p>
    <img alt="Next.js 16.1.6" src="https://img.shields.io/badge/Next.js-16.1.6-18181b">
    <img alt="React 19.2.3" src="https://img.shields.io/badge/React-19.2.3-147ca4">
  </p>
  <p>
    <a href="#workflow">Workflow</a> &nbsp;·&nbsp; <a href="#run-locally">Run locally</a> &nbsp;·&nbsp; <a href="#notes">Notes</a>
  </p>
</div>

## Workflow

1. Select or drop a PNG or JPEG image, up to 10 MB.
2. The browser sends the file as multipart form data to `POST /predict`.
3. The interface displays the returned annotated image and detection labels with confidence values.

The API is not included in this repository. The client expects a response containing `detections` (each with `class` and `conf`) and `imagedetect` (a base64-encoded JPEG). A compatible API must also allow browser requests from the frontend's origin.

## Run locally

With Node.js and npm installed:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The API base URL defaults to `http://localhost:5000`; set `NEXT_PUBLIC_API_URL` in your local Next.js environment to use a different compatible backend. The page can load without that service, but prediction requires it.

Other package-manager commands from the original starter README are `yarn dev`, `pnpm dev`, and `bun dev`; the checked-in lockfile is for npm.

## Project structure

- [`app/page.tsx`](app/page.tsx) coordinates the upload and results.
- [`components/ImageUploader.tsx`](components/ImageUploader.tsx) validates files and calls the API.
- [`components/DetectionResults.tsx`](components/DetectionResults.tsx) renders the response.

## Notes

This project was bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and uses `next/font` for Geist. See the [Next.js documentation](https://nextjs.org/docs), [Next.js tutorial](https://nextjs.org/learn), and [deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

The frontend, deployment, and model inference were not run during this README update.

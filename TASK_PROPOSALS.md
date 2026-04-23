# Codebase task proposals

## 1) Typo fix task
**Task:** Correct user-facing typo in upload success toast from `successfull` to `successful` (and optionally simplify punctuation).

- **Location:** `app/(app)/video-upload/page.tsx`
- **Why:** This is visible UI copy and looks unpolished.
- **Acceptance criteria:** Success toast reads `Video uploaded successfully!`.

## 2) Bug fix task
**Task:** Fix broken download handler on Home page so download clicks actually trigger file download/open.

- **Location:** `app/(app)/home/page.tsx`
- **Why:** `handleDownload` currently defines an inner function but never executes it, so button clicks appear to do nothing.
- **Acceptance criteria:** Clicking download in `VideoCard` creates and clicks anchor element and user gets download/open behavior.

## 3) Comment / docs discrepancy task
**Task:** Replace stale/incorrect inline comment and align error message with endpoint behavior in video upload API.

- **Location:** `app/api/video-upload/route.ts`
- **Why:** The catch block returns `Upload Image Failed` for a video endpoint, and comments like `to do stated earlier` are unclear/no longer accurate.
- **Acceptance criteria:** Error message references video upload failure; comments are concise and accurate, or removed where redundant.

## 4) Test improvement task
**Task:** Add API route tests for `/api/videos` and `/api/video-upload` covering success and error paths.

- **Location:** Add test files (e.g., `app/api/videos/route.test.ts`, `app/api/video-upload/route.test.ts`) with Prisma/Cloudinary/auth mocking.
- **Why:** Core data flow currently has no automated checks; regressions in auth, response shape, or upload failure handling are easy to miss.
- **Acceptance criteria:**
  - `GET /api/videos` test validates sorting and 500 error handling.
  - `POST /api/video-upload` test validates 401 unauthorized, 400 missing file, and successful persistence mapping (`publicId`, `compressedSize`, `duration`).

# Pevona Images

This folder contains all the images extracted from the Pevona design assets ZIP file.

## Usage

Images in this folder can be referenced in your Next.js app using:

```jsx
import Image from 'next/image';

<Image 
  src="/images/filename.png" 
  alt="Description" 
  width={1200} 
  height={800}
/>
```

## Image Organization

Images are named with underscores replacing spaces and special characters for web compatibility. The original folder structure from the ZIP has been flattened, and all images are in this single directory.

## Available Images

All images are accessible at: `http://localhost:3000/images/[filename]`

## Notes

- All filenames have been sanitized (spaces and special characters replaced with underscores)
- Images are in PNG format
- Total images extracted: Check the folder for the current count

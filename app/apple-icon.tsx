import { ImageResponse } from 'next/og';
import { FaviconDesign } from '@/components/Favicon';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <FaviconDesign fontSize={120} borderRadius="40px" />
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

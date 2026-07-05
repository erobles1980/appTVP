// src/types/video.ts

export interface VideoFormat {
  adaptive: boolean;
  audioBitrate: number;
  downloadable: boolean;
  mimeType: string;
  totalBitrate: number;
  url: string;
  videoBitrate: number;
  videoPackingPart: string | null;
}

export interface VideoResponse {
  status: string;
  videoId: number;
  title: string;
  duration: number;
  platform: string;
  adaptive: boolean;
  live: boolean;
  mimeType: string;
  url: string;
  formats: VideoFormat[];
  isGeoBlocked: boolean;
  useFormats: boolean; // Campo adicional
  drm: boolean;
}
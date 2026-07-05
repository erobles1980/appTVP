// src/components/VideoPlayer.tsx

import React, { useState } from 'react';

interface VideoPlayerProps {
  src: string | null;
  mimeType?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, mimeType }) => {
  const [videoError, setVideoError] = useState<string | null>(null);

  if (!src) {
    return (
      <section className="video-player">
        <p>⏳ Esperando selección de formato...</p>
      </section>
    );
  }

  return (
    <section className="video-player">
      <video 
        controls 
        onError={() => setVideoError('Error al cargar el video. El token puede haber expirado.')}
        onLoadedData={() => setVideoError(null)}
      >
        <source src={src} type={mimeType} />
        Tu navegador no soporta la reproducción de video.
      </video>
      {videoError && (
        <section className="error-overlay">
          ⚠️ {videoError}
        </section>
      )}
    </section>
  );
};
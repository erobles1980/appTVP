// src/App.tsx

import React from 'react';
import { useVideoData } from './hooks/useVideoData';
import { VideoPlayer } from './components/VideoPlayer';
import { VideoInfo } from './components/VideoInfo';
import { FormatSelector } from './components/FormatSelector';
import './index.css';

const App: React.FC = () => {
  const { data, loading, error, selectedFormat, changeFormat } = useVideoData();
  
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Reproductor TVP</h1>
        <p>Ejercicio didáctico con React, TypeScript y Custom Hooks  </p>
      </header>

      {loading && (
        <div className="status-message loading">
          <div className="spinner"></div>
          Cargando información del video...
        </div>
      )}

      {error && (
        <div className="status-message error">
          ⚠ Error: {error}
        </div>
      )}

      {data && (
        <div className="video-card">
          <VideoPlayer
            src={selectedFormat?.url ?? null}
            mimeType={selectedFormat?.mimeType}
          />
          <VideoInfo video={data} />
          <FormatSelector
            formats={data.formats}
            selected={selectedFormat}
            onSelect={changeFormat}
          />
        </div>
      )}
    </div>
  );
};

export default App;
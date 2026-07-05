// src/hooks/useVideoData.ts

import { useState, useEffect, useCallback } from 'react';
import type { VideoResponse, VideoFormat } from '../types/video';

// Usamos el proxy local en lugar de la URL directa
const API_URL = '/api/tokenizer/token/93573158';

export const useVideoData = () => {
  const [data, setData] = useState<VideoResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<VideoFormat | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_URL);
        
        // Debug: ver qué llega
        //console.log('📡 Status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const json: VideoResponse = await response.json();
        //console.log('✅ Datos recibidos:', json);
        
        setData(json);
        
        // Seleccionar el primer formato MP4 (no adaptativo)
        const mp4Formats = json.formats.filter(f => !f.adaptive && f.mimeType === 'video/mp4');
        //console.log('🎬 Formatos MP4 disponibles:', mp4Formats.length);
        
        if (mp4Formats.length > 0) {
          // Elegir calidad media (índice 2 o 3)
          const defaultFormat = mp4Formats[2] || mp4Formats[0];
          setSelectedFormat(defaultFormat);
          //console.log('▶️ Formato seleccionado:', defaultFormat);
        } else {
          throw new Error('No hay formatos MP4 disponibles');
        }
        
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Error desconocido';
        //console.error('❌ Error:', errorMsg);
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  const changeFormat = useCallback((format: VideoFormat) => {
    setSelectedFormat(format);
  }, []);

  return { data, loading, error, selectedFormat, changeFormat };
};
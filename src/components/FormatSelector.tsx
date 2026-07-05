import React from 'react';
import type { VideoFormat } from '../types/video';

interface FormatSelectorProps {
    formats: VideoFormat[];
    selected: VideoFormat | null;
    onSelect: (format: VideoFormat) => void;
}

export const FormatSelector: React.FC<FormatSelectorProps> = ({ 
    formats, 
    selected, 
    onSelect }) => {
        //filtramos formatos adaptativos y no adaptativos
        const playedFormats = formats.filter(f => !f.adaptive);
    return (
        <>
            <section className="format-section">
                <h3>Selecciona un formato de video:</h3>
                <section className="format-list">
                    {playedFormats.map((format, index) => {
                        const isActive = selected?.url === format.url;
                        const kbps=Math.round(format.totalBitrate/1000);
                        return (
                            <button
                                key={index}
                                className={`format-btn ${isActive ? 'active' : ''}`}
                                onClick={() => onSelect(format)}>
                            <span className="bitrate">{kbps} kbps</span>
                            <span className="type">{format.mimeType}</span> 
                            </button>)
                    })}
                </section>
            </section>
        </>
    );
    }
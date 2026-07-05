import React from 'react';
import type { VideoResponse } from '../types/video';

interface VideoInfoProps {
  video: VideoResponse;
}
//formato mm:ss
const formatDuration = (seconds: number): string => {
    const m=Math.floor(seconds/60);
    const s=seconds%60;
    return `${m}:${s.toString().padStart(2,'0')}`;
}

export const VideoInfo: React.FC<VideoInfoProps> = ({ video }) => {
    return (
        <>
            <section className="video-info">
                <h2>{video.title}   </h2>
                <section className="video-meta">
                    <p>⏱️Duración: {formatDuration(video.duration)}</p>
                    <p> ID {video.videoId}</p>
                    <p>📺Plataforma: {video.platform}</p>
                    <p> {video.live ? '🟢 En vivo' : '🔴 No en vivo'}</p>
                </section>

            </section>
        </>
    )
}
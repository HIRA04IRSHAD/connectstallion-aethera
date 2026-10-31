import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';
const FADE = 0.5; // seconds

// Manual loop: fade in over the first 0.5s, fade out over the last 0.5s,
// then rewind and play again so the seam is never visible.
export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let frame = 0;
    let restartTimer = 0;

    const tick = () => {
      const { currentTime, duration } = video;
      if (duration && !video.paused) {
        let opacity = 1;
        if (currentTime < FADE) opacity = currentTime / FADE;
        else if (duration - currentTime < FADE) opacity = Math.max(0, (duration - currentTime) / FADE);
        video.style.opacity = String(opacity);
      }
      frame = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      video.style.opacity = '0';
      restartTimer = window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };

    video.style.opacity = '0';
    video.addEventListener('ended', onEnded);
    video.play().catch(() => {});
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(restartTimer);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <video
        ref={videoRef}
        className="absolute w-full object-cover"
        style={{ inset: 'auto 0 0 0', top: '300px', height: 'calc(100% - 300px)' }}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}

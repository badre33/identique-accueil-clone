
import { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useSoundEffects = () => {
  const location = useLocation();
  const audioContextRef = useRef<AudioContext | null>(null);
  
  // Désactiver les sons sur la page Inside Link
  const isInsideLinkPage = location.pathname === '/inside-link';
  
  const initAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) throw new Error('Web Audio API unavailable');
      audioContextRef.current = new AudioContextClass();
    }
    return audioContextRef.current;
  }, []);

  const playHoverSound = useCallback(() => {
    if (isInsideLinkPage) return;
    const audioContext = initAudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, [initAudioContext, isInsideLinkPage]);

  const playClickSound = useCallback(() => {
    if (isInsideLinkPage) return;
    const audioContext = initAudioContext();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  }, [initAudioContext, isInsideLinkPage]);

  const playSuccessSound = useCallback(() => {
    if (isInsideLinkPage) return;
    const audioContext = initAudioContext();
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.3);
    oscillator2.stop(audioContext.currentTime + 0.3);
  }, [initAudioContext, isInsideLinkPage]);

  return {
    playHoverSound,
    playClickSound,
    playSuccessSound
  };
};

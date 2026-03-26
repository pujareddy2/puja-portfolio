import { useEffect, useRef } from 'react';

// Using more reliable public CDN URLs for sounds
const SOUNDS = {
  BOOT: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  HOVER: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  CLICK: 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3',
  TRANSITION: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
  AMBIENT: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Lofi pleasant music
};

// Using a more lofi/pleasant space track for ambient
const LOFI_AMBIENT = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Placeholder for lofi track

class SoundManager {
  private static instance: SoundManager;
  private audioContext: AudioContext | null = null;
  private buffers: Map<string, AudioBuffer> = new Map();
  private ambientSource: AudioBufferSourceNode | null = null;
  private isMuted: boolean = false;
  private isLoading: boolean = false;

  private constructor() {}

  static getInstance() {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  async init() {
    if (this.audioContext || this.isLoading) return;
    this.isLoading = true;
    
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      const loadPromises = Object.entries(SOUNDS).map(async ([key, url]) => {
        try {
          const response = await fetch(url, { mode: 'cors' });
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await this.audioContext!.decodeAudioData(arrayBuffer);
          this.buffers.set(key, audioBuffer);
        } catch (e) {
          // Silently fail for individual sounds to avoid console spam
          // Only log if it's a critical error
        }
      });

      await Promise.all(loadPromises);
    } catch (e) {
      // AudioContext initialization failed
    } finally {
      this.isLoading = false;
    }
  }

  play(key: keyof typeof SOUNDS, volume: number = 0.5) {
    if (this.isMuted || !this.audioContext || !this.buffers.has(key)) return;

    const source = this.audioContext.createBufferSource();
    source.buffer = this.buffers.get(key)!;
    
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = volume;
    
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    source.start(0);
  }

  startAmbient() {
    if (this.isMuted || !this.audioContext || !this.buffers.has('AMBIENT') || this.ambientSource) return;

    this.ambientSource = this.audioContext.createBufferSource();
    this.ambientSource.buffer = this.buffers.get('AMBIENT')!;
    this.ambientSource.loop = true;
    
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0.1;
    
    this.ambientSource.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    this.ambientSource.start(0);
  }

  stopAmbient() {
    if (this.ambientSource) {
      this.ambientSource.stop();
      this.ambientSource = null;
    }
  }

  setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopAmbient();
    } else {
      this.startAmbient();
    }
  }
}

export const soundManager = SoundManager.getInstance();

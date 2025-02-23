export interface MusicButtonProps {
    musicUrl: string;
    isPlaying: boolean;
    isVisible: boolean;
    volume: number;
    togglePlay: () => void;
  }
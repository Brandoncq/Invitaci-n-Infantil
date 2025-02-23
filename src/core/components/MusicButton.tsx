import { useEffect, useRef } from "react";
import animationData from "../assets/json/musicaSonar.json";
import Lottie from "lottie-react";
import { MusicButtonProps } from "../interfaces/MusicButton";

const MusicButton: React.FC<MusicButtonProps> = ({
  musicUrl,
  isPlaying,
  volume,
  isVisible,
  togglePlay,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  console.log(!isVisible);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <section className="fixed top-0 right-0 z-50 text-[#303732]">
      <audio ref={audioRef} src={musicUrl} />
      {!isVisible && (
        <div
          className="relative w-20 h-20 lg:w-28 lg:h-28"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Lottie animationData={animationData} loop={true} />
          ) : (
            <img
              src="https://tema-esmeralda.vercel.app/musica.svg"
              alt="Musica"
              className="cursor-pointer w-20 h-20 lg:w-28 lg:h-28"
            />
          )}

          <span className="cursor-pointer absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent rounded-md text-sm uppercase">
            {isPlaying ? "Pausar" : "Escuchar"}
          </span>
        </div>
      )}
    </section>
  );
};

export default MusicButton;

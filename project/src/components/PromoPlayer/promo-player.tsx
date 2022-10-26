import {useEffect, useRef} from 'react';
import {FilmType} from '../../types/film-type';

type PromoPlayerProps = {
  film: FilmType;
  cardActive: boolean
}

export default function PromoPlayer({film, cardActive}: PromoPlayerProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      if (cardActive) {
        ref.current.play();
      } else {
        ref.current.load();
        ref.current.currentTime = 0;
      }
    }
  }, [cardActive]
  );

  return (
    <video ref={ref} src={film.previewVideoLink} muted loop poster={film.previewImage}
      autoPlay={cardActive}
    >
    </video>
  );
}

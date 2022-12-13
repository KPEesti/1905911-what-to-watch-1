import React, {useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/store-hooks';
import {getFilmByID} from '../../store/Slices/Film-Data/selectors';
import {dispatch} from '../../types/state';
import {fetchFilmByIDAction} from '../../store/api-actions';
import {setFilmByID} from '../../store/Slices/Film-Data/film-data';
import Spinner from '../Spinner/spinner';
import {checkFullScreen, exitFullScreen, requestFullScreen} from '../../services/fullscreen-handler';


export default function Player() {
  const navigate = useNavigate();
  const id = Number(useParams().id);
  const film = useAppSelector(getFilmByID);

  const [loading, setLoading] = useState(true);


  const [paused, setPaused] = useState(false);
  const [videoFullTime, setVideoTime] = useState<number>(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState<number | undefined>(0);
  const [videoProgress, setVideoProgress] = useState<number | undefined>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const getVideoTimeLeft = (fullTime: number, currentTime: number) => {
    const timeLeft = fullTime - currentTime;
    return `${Math.floor(timeLeft / 60)}:${(`0${Math.floor(timeLeft % 60)}`).slice(-2)}`;
  };

  const togglePlayer = () => {
    if (paused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }

    setPaused(!paused);
  };

  const toggleFullscreen = () => {
    if (checkFullScreen()) {
      exitFullScreen();
    } else {
      if (playerRef?.current) {
        requestFullScreen(playerRef.current);
      }
    }
  };

  useEffect(
    () => {
      let mounted = true;
      setLoading(true);

      if (mounted) {
        dispatch(fetchFilmByIDAction(id)).then(() => setLoading(false));
      }

      return () => {
        mounted = false;
        dispatch(setFilmByID(null));
      };
    }, [id]
  );

  useEffect(
    () => {
      if (videoRef.current) {
        setVideoTime(videoRef.current.duration);
      }
    }, [paused]
  );

  if (videoRef.current) {
    videoRef.current.ontimeupdate = () => {
      setVideoCurrentTime(videoRef.current?.currentTime);
      setVideoProgress(((videoRef.current?.currentTime !== undefined ? videoRef.current?.currentTime : 1) / videoFullTime) * 100);
    };
  }

  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="player" ref={playerRef}>
      <video ref={videoRef} src={film?.videoLink} className="player__video" poster={film?.previewImage}>
      </video>

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">-
            {
              videoFullTime && videoCurrentTime ? getVideoTimeLeft(videoFullTime, videoCurrentTime) : '0:00:00'
            }
          </div>
        </div>

        <div className="player__controls-row">
          {
            paused ?
              <button type="button" className="player__play" onClick={togglePlayer}>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>
              :
              <button type="button" className="player__play" onClick={togglePlayer}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
          }
          <div className="player__name">{film?.name}</div>

          <button type="button" className="player__full-screen" onClick={toggleFullscreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

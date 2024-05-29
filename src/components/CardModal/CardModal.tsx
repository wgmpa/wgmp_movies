import React from "react";
import IMovies from "../../interfaces/movies.interface";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.css";
const imageUrl = import.meta.env.VITE_IMG;

interface IProps {
  movie: IMovies;
  closeModal: (close: boolean) => void;
}

const CardModal: React.FC<IProps> = ({ movie, closeModal }) => {
  const handleClose = (close: boolean) => {
    closeModal(close);
  };

  return (
    <div className={styles.card_modal}>
      <button
        className={styles.close_modal}
        onClick={() => {
          handleClose(false);
        }}
      >
        X
      </button>
      <div className={styles.container_info}>
        <img
          className={styles.movie_poster}
          src={imageUrl + movie.poster_path}
        />
        <div className={styles.movie_info}>
          <h2>Title: {movie.title}</h2>
          <p className={styles.vote}>
            <FaStar />
            {movie.vote_average}
          </p>
          <p>{movie.popularity}</p>
          <p>{movie.vote_count}</p>
          <p className={styles.movie_overview}>Sinopse: {movie.overview}</p>
          <p>{movie.release_date}</p>
          <p>{movie.original_language}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

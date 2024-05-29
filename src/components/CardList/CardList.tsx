import React from "react";
import IMovies from "../../interfaces/movies.interface";
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.css";

const imageUrl = import.meta.env.VITE_IMG;

interface IProps {
  movie: IMovies;
  handleModal?: (id: number, modal: boolean) => void | undefined;
}

const CardList: React.FC<IProps> = ({ movie, handleModal }) => {
  const getIdItem = (id: number, modal: boolean) => {
    return handleModal(id, modal);
  };

  return (
    <div className={styles.card_modal}>
      <img src={imageUrl + movie.poster_path} />
      <div className={styles.movie_info}>
        <h2>{movie.title}</h2>
        <p className={styles.vote}>
          <FaStar />
          {movie.vote_average}
        </p>
      </div>
      <button
        onClick={() => {
          getIdItem(movie.id, true);
        }}
      >
        Detalhes
      </button>
    </div>
  );
};

export default CardList;

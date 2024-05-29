import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../../components/CardList/CardList";

import styles from "./styles.module.css";
import { api } from "../../services/getMovies";
import IMovies from "../../interfaces/movies.interface";
import CardModal from "../../components/CardModal/CardModal";

const apiKey = import.meta.env.VITE_API_KEY;

const SearchMovie = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [itemModal, setItemModal] = useState<number>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const query = searchParams.get("q");

  const getSearchMovie = async () => {
    try {
      const { data } = await api.get(`/search/movie?${apiKey}&query=${query}`);
      setMovies(data.results);
    } catch (error) {
      throw new Error(`error:${error}`);
    }
  };
  useEffect(() => {
    getSearchMovie();
  }, [query]);

  const handleModal = (id: number, openModal: boolean) => {
    setItemModal(id);
    setOpenModal(openModal);
  };
  const handleCloseModal = (cls: boolean) => {
    setOpenModal(cls);
  };

  return (
    <main>
      <div className={styles.movie_list}>
        {movies.length === 0 && <p>Loading...</p>}

        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <CardList
                key={movie.id}
                movie={movie}
                handleModal={handleModal}
              />
            );
          })}
        {movies.length > 20 && <button>Mais</button>}
      </div>
      <div>
        {openModal === true &&
          movies.map((movie) => {
            return movie.id === itemModal ? (
              <div className={styles.card_modal}>
                <CardModal
                  key={itemModal}
                  movie={movie}
                  closeModal={handleCloseModal}
                />
              </div>
            ) : (
              <></>
            );
          })}
      </div>
    </main>
  );
};

export default SearchMovie;

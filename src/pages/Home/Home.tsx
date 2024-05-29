import { useState, useEffect } from "react";
import { api } from "../../services/getMovies";
import IMovies from "../../interfaces/movies.interface";
import CardList from "../../components/CardList/CardList";
import styles from "./styles.module.css";
import CardModal from "../../components/CardModal/CardModal";
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState<IMovies[]>([]);
  const [itemModal, setItemModal] = useState<number>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const getTopMovies = async (page: number) => {
    try {
      const { data } = await api.get(`/movie/popular?${apiKey}&page=${page}`);

      setTopMovies(data.results);
      setTotalPage(data.total_pages);
    } catch (error) {
      throw new Error(`error:${error}`);
    }
  };
  useEffect(() => {
    getTopMovies(currentPage);
  }, [currentPage]);

  const handleModal = (id: number, openModal: boolean) => {
    setItemModal(id);
    setOpenModal(openModal);
  };
  const handleCloseModal = (cls: boolean) => {
    setOpenModal(cls);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let index = 1; index < totalPage; index++) {
    pages.push(index);
  }

  return (
    <main>
      <div className={styles.movie_list}>
        {topMovies.length === 0 && <p>Loading...</p>}

        {topMovies.length > 0 &&
          topMovies.map((movie) => {
            return (
              <CardList
                key={movie.id}
                movie={movie}
                handleModal={handleModal}
              />
            );
          })}
      </div>
      <div>
        {openModal === true &&
          topMovies.map((movie) => {
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

      <div className={styles.container_button}>
        {pages.map((page, index) => {
          if (
            page <= 5 ||
            page >= totalPage - 3 ||
            (currentPage - 2 <= page && page <= currentPage + 2)
          ) {
            if (
              page === 1 ||
              page === totalPage ||
              page === currentPage ||
              (currentPage - 2 <= page && page <= currentPage + 1)
            ) {
              return (
                <button
                  className={styles.button_load}
                  onClick={() => handlePageClick(page)}
                  key={index}
                >
                  {page}
                </button>
              );
            }
          }
        })}
      </div>
    </main>
  );
};

export default Home;

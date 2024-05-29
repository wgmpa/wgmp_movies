import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container_menu}>
        <Link to="/">Logo</Link>

        <nav className={styles.menu}>
          <ul className={styles.menu_list}>
            <li>
              <Link to="/">Movies</Link>
            </li>
          </ul>
        </nav>
        <form onSubmit={handleSearchMovie}>
          <input
            type="text"
            placeholder="Busque pelo seu filme ou série"
            onChange={(movie) => setSearch(movie.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
    </header>
  );
};

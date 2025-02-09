import { FormEvent, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import customToast from '../ErrorMessages/Toast/ToastMessage';
import s from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (query.trim() === '') {
      customToast({ type: 'warn', message: 'Oops... Enter something' });
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          type="text"
          name="query"
          className={s.searchInput}
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value.toLowerCase())}
        />
        <button type="submit" className={s.searchBtn}>
          <FcSearch size={20} />
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
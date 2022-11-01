'use client';

import { cache, use, useState } from 'react';

import { Game, NBAResponse } from '../domains/nba';

import { api } from '../services/api';

import { GameCard } from './GameCard';

const getGames = cache(
  async (page = 1) =>
    await api<NBAResponse<Game[]>>(
      `/games?page=${page}&per_page=25&seasons[]=2022`
    )
);

export default function Page() {
  const [page, setPage] = useState(1);

  const games = use(getGames(page));

  const nextPage = () => {
    setPage((state) => state + 1);
  };

  const previousPage = () => {
    setPage((state) => state - 1);
  };

  return (
    <div className="py-4 px-6">
      <div className="flex flex-col max-w-[650px] m-auto border-[1px] border-b-0 border-neutral-700">
        {games.data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div>
        <button onClick={previousPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

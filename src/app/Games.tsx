'use client';

import { format } from 'date-fns';
import React, { cache, use, useMemo } from 'react';

import { Game, NBAResponse } from '../domains/nba';

import { api } from '../services/api';

import { GameCard } from './GameCard';

const getGames = cache((page = '') =>
  api<NBAResponse<Game[]>>(
    `/games?page=1&per_page=25&seasons[]=2022&dates[]=${page}`,
  ),
);

export const Games = ({ date }: { date: Date }) => {
  const formattedDate = useMemo(() => format(date, 'yyyy-MM-dd'), [date]);

  const games = use(getGames(formattedDate));

  return (
    <div className="mx-auto flex w-full flex-col border-[1px] border-b-0 border-neutral-700">
      {games.data.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

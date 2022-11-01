'use client';

import { useState } from 'react';

import { getStandings } from '../domains/nba';

import { Games } from './Games';

export default function Page() {
  const [date, setDate] = useState(new Date());

  return (
    <section className="mx-auto flex w-[90%] max-w-[1440px] gap-16">
      <div className="flex w-[50%] max-w-[650px] flex-col gap-4 py-6">
        <h2 className="text-2xl font-medium">Games</h2>

        <Games date={date} />
      </div>

      <div className="flex flex-col gap-4 py-6">
        <h2 className="text-2xl font-medium">Standings</h2>

        {getStandings().west.map(team => (
          <div key={team.abbreviation}>
            {team.name} | {team.wins} - {team.losses}
          </div>
        ))}
      </div>
    </section>
  );
}

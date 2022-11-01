'use client';

import React, { useMemo } from 'react';

import { getStandings } from '../domains/nba';

export const Standings = () => {
  const standings = useMemo(() => getStandings(), []);

  return (
    <div className="mx-auto flex w-full flex-col border-[1px] border-b-0 border-neutral-700">
      {standings.west.map(team => (
        <div key={team.abbreviation}>
          {team.name} | {team.wins} - {team.losses}
        </div>
      ))}
    </div>
  );
};

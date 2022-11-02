import React, { useMemo } from 'react';
import TeamLogo from '../components/Logos';

import { getStandings } from '../domains/nba';

const formatWinPercentage = (percentage: number) =>
  (Math.round(percentage * 1000) / 1000).toFixed(3);

export const Standings = ({ conference }: { conference: 'east' | 'west' }) => {
  const standings = useMemo(() => getStandings(), []);

  return (
    <div className="mx-auto flex w-full flex-col border-[1px] border-b-0 border-neutral-700 bg-neutral-800">
      <div className="flex w-full justify-between border-b-[1px] border-neutral-700 py-2 px-4">
        <div className="flex w-[50%] items-center">
          <p>Team</p>
        </div>

        <div className="flex items-center justify-end">
          <div className="flex w-12 items-center justify-center">
            <p>W</p>
          </div>

          <div className="flex w-12 items-center justify-center">
            <p>L</p>
          </div>

          <div className="flex w-12 items-center justify-center">
            <p>%</p>
          </div>
        </div>
      </div>

      {standings[conference].map((team, index) => (
        <div
          key={team.abbreviation}
          className="flex w-full justify-between border-b-[1px] border-neutral-700 py-1 px-4 hover:cursor-pointer hover:bg-neutral-700"
        >
          <div className="flex w-[50%] items-center gap-2">
            <p className="w-6 font-secondary">{index + 1}</p>
            <div className="w-9">
              <TeamLogo team={team.abbreviation} size={32} />
            </div>
            <p>{team.name}</p>
          </div>

          <div className="flex items-center justify-end font-secondary">
            <div className="flex w-12 items-center justify-center">
              <p>{team.wins}</p>
            </div>

            <div className="flex w-12 items-center justify-center">
              <p>{team.losses}</p>
            </div>

            <div className="flex w-12 items-center justify-center">
              <p>
                {team.losses > 0
                  ? formatWinPercentage(team.wins / (team.wins + team.losses))
                  : '1.000'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

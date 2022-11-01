import { useMemo } from 'react';

import { format } from 'date-fns';

import * as Logos from '../components/Logos';

import { Game } from '../domains/nba';

const LOGOS = {
  ATL: Logos.ATL,
  BKN: Logos.BKN,
  BOS: Logos.BOS,
  CHA: Logos.CHA,
  CHI: Logos.CHI,
  CLE: Logos.CLE,
  DAL: Logos.DAL,
  DEN: Logos.DEN,
  DET: Logos.DET,
  GSW: Logos.GSW,
  HOU: Logos.HOU,
  IND: Logos.IND,
  LAC: Logos.LAC,
  LAL: Logos.LAL,
  MEM: Logos.MEM,
  MIA: Logos.MIA,
  MIL: Logos.MIL,
  MIN: Logos.MIN,
  NOP: Logos.NOP,
  NYK: Logos.NYK,
  OKC: Logos.OKC,
  ORL: Logos.ORL,
  PHI: Logos.PHI,
  PHX: Logos.PHX,
  POR: Logos.POR,
  SAC: Logos.SAC,
  SAS: Logos.SAS,
  TOR: Logos.TOR,
  UTA: Logos.UTA,
  WAS: Logos.WAS,
};

const formatGameDate = (date: Date) => format(date, "eee', 'MMM' 'dd', 'yyyy");

export const GameCard = ({ game }: { game: Game }) => {
  const HomeLogo = useMemo(
    () => LOGOS[game.home_team.abbreviation],
    [game.home_team.abbreviation],
  );

  const AwayLogo = useMemo(
    () => LOGOS[game.visitor_team.abbreviation],
    [game.visitor_team.abbreviation],
  );

  return (
    <div
      key={game.id}
      className="flex w-full items-center justify-between border-b-[1px] border-neutral-700 bg-neutral-800"
    >
      <div className="flex flex-1 flex-col items-stretch justify-center border-r-[1px] border-neutral-700 py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <HomeLogo size={32} />
            <span className="ml-2">{game.home_team.full_name}</span>
          </div>

          <span className="font-regular text-2xl">{game.home_team_score}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AwayLogo size={32} />
            <span className="ml-2">{game.visitor_team.full_name}</span>
          </div>

          <span className="font-regular text-2xl">
            {game.visitor_team_score}
          </span>
        </div>
      </div>

      <div className="flex min-w-[200px] flex-col items-center py-6 px-4">
        <span className="font-regular text-2xl">{game.status}</span>
      </div>
    </div>
  );
};

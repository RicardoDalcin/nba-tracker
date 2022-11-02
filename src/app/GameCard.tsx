import { format } from 'date-fns';

import TeamLogo from '../components/Logos';

import { Game } from '../domains/nba';

const formatGameDate = (date: Date) => format(date, "eee', 'MMM' 'dd', 'yyyy");

export const GameCard = ({ game }: { game: Game }) => {
  return (
    <div
      key={game.id}
      className="flex w-full items-center justify-between border-b-[1px] border-neutral-700 bg-neutral-800"
    >
      <div className="flex flex-1 flex-col items-stretch justify-center border-r-[1px] border-neutral-700 py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TeamLogo team={game.home_team.abbreviation} size={32} />
            <span className="ml-2">{game.home_team.full_name}</span>
          </div>

          <span className="font-regular font-secondary text-2xl">
            {game.home_team_score}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TeamLogo team={game.visitor_team.abbreviation} size={32} />
            <span className="ml-2">{game.visitor_team.full_name}</span>
          </div>

          <span className="font-regular font-secondary text-2xl">
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

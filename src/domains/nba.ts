export interface NBAResponse<T> {
  data: T;
  meta: {
    total_pages: number;
    current_page: number;
    next_page: number;
    per_page: number;
    total_count: number;
  };
}

type TeamAbbreviation =
  | 'ATL'
  | 'BKN'
  | 'BOS'
  | 'CHA'
  | 'CHI'
  | 'CLE'
  | 'DAL'
  | 'DEN'
  | 'DET'
  | 'GSW'
  | 'HOU'
  | 'IND'
  | 'LAC'
  | 'LAL'
  | 'MEM'
  | 'MIA'
  | 'MIL'
  | 'MIN'
  | 'NOP'
  | 'NYK'
  | 'OKC'
  | 'ORL'
  | 'PHI'
  | 'PHX'
  | 'POR'
  | 'SAC'
  | 'SAS'
  | 'TOR'
  | 'UTA'
  | 'WAS';

export interface Team {
  id: number;
  abbreviation: TeamAbbreviation;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Player {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
  team: Team;
}

export interface Game {
  id: number;
  date: string;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
}

interface TeamStats {
  abbreviation: TeamAbbreviation;
  name: string;
  wins: number;
  losses: number;
}

export interface Standings {
  west: TeamStats[];
  east: TeamStats[];
}

interface ConferenceTeam {
  abbreviation: TeamAbbreviation;
  name: string;
}

const WESTERN_CONFERENCE: ConferenceTeam[] = [
  { abbreviation: 'DAL', name: 'Mavericks' },
  { abbreviation: 'DEN', name: 'Nuggets' },
  { abbreviation: 'GSW', name: 'Warriors' },
  { abbreviation: 'HOU', name: 'Rockets' },
  { abbreviation: 'LAC', name: 'Clippers' },
  { abbreviation: 'LAL', name: 'Lakers' },
  { abbreviation: 'MEM', name: 'Grizzlies' },
  { abbreviation: 'MIN', name: 'Timberwolves' },
  { abbreviation: 'NOP', name: 'Pelicans' },
  { abbreviation: 'OKC', name: 'Thunder' },
  { abbreviation: 'PHX', name: 'Suns' },
  { abbreviation: 'POR', name: 'Trail Blazers' },
  { abbreviation: 'SAC', name: 'Kings' },
  { abbreviation: 'SAS', name: 'Spurs' },
  { abbreviation: 'UTA', name: 'Jazz' },
];

const EASTERN_CONFERENCE: ConferenceTeam[] = [
  { abbreviation: 'ATL', name: 'Hawks' },
  { abbreviation: 'BOS', name: 'Celtics' },
  { abbreviation: 'BKN', name: 'Nets' },
  { abbreviation: 'CHA', name: 'Hornets' },
  { abbreviation: 'CHI', name: 'Bulls' },
  { abbreviation: 'CLE', name: 'Cavaliers' },
  { abbreviation: 'DET', name: 'Pistons' },
  { abbreviation: 'IND', name: 'Pacers' },
  { abbreviation: 'MIA', name: 'Heat' },
  { abbreviation: 'MIL', name: 'Bucks' },
  { abbreviation: 'NYK', name: 'Knicks' },
  { abbreviation: 'ORL', name: 'Magic' },
  { abbreviation: 'PHI', name: '76ers' },
  { abbreviation: 'TOR', name: 'Raptors' },
  { abbreviation: 'WAS', name: 'Wizards' },
];

export function getStandings(): Standings {
  const west = WESTERN_CONFERENCE.map(({ abbreviation, name }) => {
    const wins = Math.floor(Math.random() * 50) + 20;
    const losses = 82 - wins;

    return {
      abbreviation,
      name,
      wins,
      losses,
    };
  }).sort((a, b) => b.wins - a.wins);

  const east = EASTERN_CONFERENCE.map(({ abbreviation, name }) => {
    const wins = Math.floor(Math.random() * 50) + 20;
    const losses = 82 - wins;

    return {
      abbreviation,
      name,
      wins,
      losses,
    };
  }).sort((a, b) => b.wins - a.wins);

  return { west, east };
}

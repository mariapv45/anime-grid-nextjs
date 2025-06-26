export type MediaListStatus =
  | 'CURRENT'
  | 'PLANNING'
  | 'COMPLETED'
  | 'DROPPED'
  | 'PAUSED'
  | 'REPEATING';

export type Anime = {
  id: number;
  title: {
    english: string;
    romaji: string;
  };
  description: string;
  coverImage: {
    large: string;
  };
  bannerImage: string;
  averageScore: number;
  episodes: number;
  duration: number;
  genres: string[];
  startDate: {
    month: number;
    year: number;
  };
  endDate: {
    month: number;
    year: number;
  };
  status: MediaListStatus;
}
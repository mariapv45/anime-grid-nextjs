'use client';

import { Grid} from "@chakra-ui/react"
import { useQuery } from "@apollo/client";
import { GET_ANIME_PAGE } from "@/lib/graphql"
import AnimeTile from "./AnimeTile";

export default function AnimeGrid() {
  const { data, loading, error } = useQuery(GET_ANIME_PAGE, {
    variables: { page: 1, perPage: 12 },
  });

  console.log("AnimeGrid data:", data);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Grid>
      {data.Page.media.map((anime: any) => (
        <AnimeTile
          key={anime.id}
          title={anime.title.english || anime.title.romaji}
          coverImage={anime.coverImage.large}
        />
      ))}
    </Grid>
  );
}

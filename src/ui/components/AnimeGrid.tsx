'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { SimpleGrid, Box } from "@chakra-ui/react"
import { useQuery } from "@apollo/client";
import { GET_ANIME_PAGE } from "@/lib/queries"
import type { Anime } from "@/types/queries";

import PaginationBar from "./PaginationBar";
import AnimeTile from "./AnimeTile";
import AnimeDetails from './AnimeDetails';
import Modal from './Modal';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorMessage from './ErrorMessage';

const PAGE_SIZE = 36;

export default function AnimeGrid() {
  const { data, loading, error } = useQuery(GET_ANIME_PAGE, {
    variables: { page: 1, perPage: PAGE_SIZE },
  });

  const totalItems = data?.Page?.pageInfo?.total || 0;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  console.log("AnimeGrid data:", data);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error){
    return <ErrorMessage error={error} />
  }

  return (
    <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }} py={8}>
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
        gap={{ base: 4, md: 6 }}
      >
        {data.Page.media.map((anime: Anime) => (
          <Modal
            key={anime.id}
            title={anime.title.english || anime.title.romaji}
            trigger={
              <Box cursor="pointer">
                <AnimeTile
                  title={anime.title.english || anime.title.romaji}
                  coverImage={anime.coverImage.large}
                />
              </Box>
            }
          >
           <AnimeDetails anime={anime} />
          </Modal>
        ))}
      </SimpleGrid>
      <Box mt={8} display="flex" justifyContent="right">
        <PaginationBar count={totalItems} pageSize={PAGE_SIZE} currentPage={currentPage} setPage={setPage} />
      </Box>
    </Box>
  );
}

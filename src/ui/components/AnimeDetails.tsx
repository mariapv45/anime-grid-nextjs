import { Box, Text, Stack, DataList } from '@chakra-ui/react';
import Image from 'next/image';
import type { Anime } from '@/types/queries';
import { formatDate } from '@/lib/format-date';

type Props = {
  anime: Anime;
}

export default function AnimeDetails({ anime }: Props) {
  const startDate = formatDate(anime.startDate?.month, anime.startDate?.year);
  const endDate = formatDate(anime.endDate?.month, anime.endDate?.year);

  return (
   <Box>
    {!!anime?.bannerImage && (
      <Image
        src={anime?.bannerImage}
        alt={anime?.title?.english || anime?.title?.romaji}
        width={960}
        height={540}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
    )}
    <Stack direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 8 }} my={4}>
      {!!anime?.status && (
        <DataList.Root size="sm" colorPalette={"purple"}>
          <DataList.Item>
            <DataList.ItemLabel>Status</DataList.ItemLabel>
            <DataList.ItemValue>{anime.status}</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      )}

      {!!anime?.episodes && (
        <DataList.Root size="sm">
          <DataList.Item>
            <DataList.ItemLabel>Episodes</DataList.ItemLabel>
            <DataList.ItemValue>{anime.episodes}</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      )}

      {!!anime?.duration && (
        <DataList.Root size="sm">
          <DataList.Item>
            <DataList.ItemLabel>Episode Duration</DataList.ItemLabel>
            <DataList.ItemValue>{anime.duration} min</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      )}

      {!!anime?.startDate && !!anime?.endDate && (
        <DataList.Root size="sm">
          <DataList.Item>
            <DataList.ItemLabel>Air Dates</DataList.ItemLabel>
            <DataList.ItemValue>
              {startDate} - {endDate}
            </DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      )}

      {!!anime?.averageScore && (
        <DataList.Root size="sm">
          <DataList.Item>
            <DataList.ItemLabel>Average Score</DataList.ItemLabel>
            <DataList.ItemValue>{anime.averageScore}%</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      )}
    </Stack>

    {!!anime?.genres && anime.genres.length > 0 && (
      <DataList.Root size="sm" my={4}>
        <DataList.Item>
          <DataList.ItemLabel>Genres</DataList.ItemLabel>
          <DataList.ItemValue>
            {anime.genres.join(', ')}
          </DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
    )}

    {!!anime?.description && (
      <DataList.Root size="md">
        <DataList.Item>
          <DataList.ItemLabel fontWeight={"semibold"} color={"gray.950"}>
            Description
          </DataList.ItemLabel>
          <DataList.ItemValue>
            <Text dangerouslySetInnerHTML={{ __html: anime.description }} />
          </DataList.ItemValue>
        </DataList.Item>  
      </DataList.Root>
    )}
  </Box>
  );
}
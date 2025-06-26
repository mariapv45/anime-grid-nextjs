import { ButtonGroup, IconButton, Pagination as ChakraPagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type Props = {
  count: number;
  pageSize: number;
  currentPage: number;
  setPage: (page: number) => void;
}

export default function Pagination({
  count,
  pageSize,
  currentPage,
  setPage
}: Props) {
  return (
    <ChakraPagination.Root count={count} pageSize={pageSize} page={currentPage}>
      <ButtonGroup variant="ghost" size="sm">
        <ChakraPagination.PrevTrigger asChild>
          <IconButton
            aria-label="Previous page"
            onClick={() => setPage(Math.max(1, currentPage - 1))}
          >
            <LuChevronLeft />
          </IconButton>
        </ChakraPagination.PrevTrigger>

        <ChakraPagination.Items
          render={(page) => (
            <IconButton
              key={page.value}
              aria-label={`Page ${page.value}`}
              onClick={() => setPage(page.value)}
              variant={{ base: "ghost", _selected: "outline" }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <ChakraPagination.NextTrigger asChild>
          <IconButton
            aria-label="Next page"
            onClick={() => setPage(Math.min(currentPage + 1, count))}
          >
            <LuChevronRight />
          </IconButton>
        </ChakraPagination.NextTrigger>
      </ButtonGroup>
    </ChakraPagination.Root>
  )
}

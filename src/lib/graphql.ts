import { gql } from '@apollo/client'

export const GET_ANIME_PAGE = gql`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        chapters
        coverImage {
          large
        }
        description
        duration
        title {
          english
          romaji
        }
        countryOfOrigin
        episodes
        updatedAt
        seasonYear
        siteUrl
        popularity
        genres
      }
    }
  }
`

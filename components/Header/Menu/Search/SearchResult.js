import React from "react"
import {
  resultCount,
  listResults,
  resultsLink,
  resultsExcerpt,
  lineResults,
  algoliaLogo,
} from "./styles"
import { Link } from "gatsby"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"

import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount" css={resultCount}>
      <Typography variant="body2" component="span" color="textSecondary">
        {hitCount} kết quả
      </Typography>
    </div>
  ) : null
})

const PageHit = ({ hit }) => (
  <>
    <Link to={hit.permalink} css={resultsLink}>
      <Typography variant="h6" component="h4" color="textPrimary">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </Typography>
    </Link>
    <Typography color="textSecondary">
      <Snippet
        attribute="excerpt"
        hit={hit}
        tagName="mark"
        css={resultsExcerpt}
      />
    </Typography>
    <Divider variant="middle" css={lineResults} />
  </>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} css={listResults} />
  </Index>
)

const SearchResult = ({ indices }) => {
  return (
    <div>
      {indices.map(index => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      <PoweredBy
        css={algoliaLogo}
        translations={{
          searchBy: "Sức mạnh tìm kiếm từ",
        }}
      />
    </div>
  )
}

export default SearchResult

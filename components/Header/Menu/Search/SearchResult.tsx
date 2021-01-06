import React from 'react';
import PropTypes from 'prop-types';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from 'react-instantsearch-dom';

const HitComponent = ({ hit }: { hit: object }) => {
  console.log(hit);

  return (
    <div className="hit">
      <div>
        <div className="hit-picture">{/* <img src={`${hit.image}`} /> */}</div>
      </div>
      <div className="hit-content">
        <div>
          <Highlight attribute="name" hit={hit} />
          {/* <span> - ${hit.price}</span>
          <span> - {hit.rating} stars</span> */}
        </div>
        <div className="hit-type">
          <Highlight attribute="type" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="description" hit={hit} />
        </div>
      </div>
    </div>
  );
};

type Props = {
  searchState: object;
  resultsState: object | [];
  onSearchStateChange: Function;
  createURL: Function;
  indexName: string;
  searchClient: object;
};

const SearchResult = ({
  searchState,
  resultsState,
  onSearchStateChange,
  createURL,
  indexName,
  searchClient,
}: any) => {
  return (
    <InstantSearch
      searchClient={searchClient}
      resultsState={resultsState}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
      indexName={indexName}
    >
      <Configure hitsPerPage={12} />
      <header>
        <h1>React InstantSearch + Next.Js</h1>
        <SearchBox />
      </header>
      <main>
        <div className="results">
          <Hits hitComponent={HitComponent} />
        </div>
      </main>
      <footer>
        <Pagination />
        <div>
          See{' '}
          <a href="https://github.com/algolia/react-instantsearch/tree/master/examples/next">
            source code
          </a>{' '}
          on github
        </div>
      </footer>
    </InstantSearch>
  );
};

export default SearchResult;

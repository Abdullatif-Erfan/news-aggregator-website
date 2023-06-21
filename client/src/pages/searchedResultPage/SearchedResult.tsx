import Layout from "../../components/frontend/layout/Layout";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { SearchedResultAxiosTypes } from "../../types/Types";
import { SearchByKeywords } from "../../API/Articles";
import { SearchedPageSkeleton } from "../../components/frontend/search_components/SearchedSkeleton";
import { SearchedList } from "../../components/frontend/search_components/SearchedList";
import { useSearchContext } from "../../context/SearchContext";
import Button from "../../components/frontend/form_elements/Button";

const SearchedResultPage: React.FC<{}> = () => {
  const { searchTerm } = useSearchContext();

  const [pageNumber, setPageNumber] = useState(1); // start from first page at the first time
  const recordsPerPage = 6;

  useEffect(() => {
    setPageNumber(1); // for each search term, page number should be started from 1
    refetch();
  }, [searchTerm]);

  const {
    isLoading,
    data: searchedResult,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(
    ["searched-data", pageNumber],
    () => SearchByKeywords(searchTerm, pageNumber, recordsPerPage),
    {
      keepPreviousData: true, // keep previous data till getting the new data
      staleTime: 300000, // for 5 minutes the data should be in stale time
      refetchOnWindowFocus: false,
    }
  );

  /**
   * ----------------------------------------------------------
   * 1. Find total matched records and store into totalResult
   * 2. Findout lastPageNumber, first check if totalRecord is greater than recordsPerPage
   * 3. if recordsPerPage = 6, and totalResult = 263
   *    (263 > 6 ? 263/6 = 43 ). we would have 43 pages
   * ---------------------------------------------------------
   */
  const totalResult = searchedResult?.totalResults | 0;
  const lastPageNumber =
    totalResult > recordsPerPage && Math.floor(totalResult / recordsPerPage);
  const totalRecordsPerPage = searchedResult?.articles.length;

  if (isError)
    return (
      <div className="errorMessage">
        Error Occured :{error instanceof Error && <h6>{error?.message}</h6>}
      </div>
    );

  const previousButtonHandler = () => {
    setPageNumber((page) => page - 1);
  };
  const nextButtonHandler = () => {
    setPageNumber((page) => page + 1);
  };

  return (
    <Layout>
      <section className="section searched-section">
        <div className="searchedpage-wrapper">
          <div className="container">
            <div className="col-12 mesagebox">
              Results were founded for "{searchTerm}"
            </div>

            {isLoading || isFetching ? (
              SearchedPageSkeleton()
            ) : totalRecordsPerPage > 0 ? (
              searchedResult?.articles.map(
                ({
                  author,
                  title,
                  description,
                  content,
                  url,
                  urlToImage,
                  publishedAt,
                  source,
                }: SearchedResultAxiosTypes) => (
                  <SearchedList
                    key={title}
                    author={author}
                    title={title}
                    description={description}
                    content={content}
                    url={url}
                    urlToImage={urlToImage}
                    publishedAt={publishedAt}
                    source={source}
                  />
                )
              )
            ) : (
              <div className="d-flex center width-100 m-t-20 m-b-20">
                <h4>Not Found</h4>
              </div>
            )}
            {/* 3 */}
            <div className="col-12 next-prev-btn">
              {totalResult > recordsPerPage && (
                <>
                  <Button
                    className="btn prev"
                    onClick={previousButtonHandler}
                    disabled={pageNumber === 1}
                  >
                    Previous
                  </Button>
                  <div className="pageNumber">{pageNumber}</div>
                  <Button
                    className="btn next"
                    onClick={nextButtonHandler}
                    disabled={pageNumber === lastPageNumber}
                  >
                    Next
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default SearchedResultPage;

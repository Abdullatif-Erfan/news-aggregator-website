import { NewsLetter } from "./NewsLetter";
import { Gallery } from "./Gallery";
import { DropDownLists } from "./DropDownFiltering/DropDownLists";
import { categoryList, sourcesList } from "./DropDownFiltering/DropDownData";
import { useQuery } from "react-query";
import { useState, ChangeEvent } from "react";
import { fetchTopHeadlineData } from "../../../API/Articles";
import TopHeadlineList from "./TopHeadlinList";
import TopHeadlineSkeleton from "./TopHeadlineSkeleton";
import { TopHeadlinePropType } from "../../../types/Types";
import Button from "../form_elements/Button";

export const TopHeadlineContainer: React.FC<{}> = () => {
  /** ------------ Create State for filtering ------------------- */
  const [filterBaseOn, setFilterBaseOn] = useState("sources");
  const [selectedOptions, setSelectedOptions] = useState("bbc-news");

  /** ------------ Create State For Pagination ----------------------- */
  const [pageNumber, setPageNumber] = useState(1);
  const recordsPerPage = 6;

  /** ------------ Fetch The Data From NewsAPI using useQuery ----------------------- */
  const {
    isLoading,
    isError,
    error,
    data: topHeadlineData,
    isFetching,
    refetch,
  } = useQuery(
    ["top-headline", pageNumber],
    () =>
      fetchTopHeadlineData(
        pageNumber,
        recordsPerPage,
        filterBaseOn,
        selectedOptions
      ),
    {
      keepPreviousData: true, // keep previous data till getting the new data
      staleTime: 60000, // 60,000 mili second / 1 minute -> after one minute this data goes to stale time to be refected on new request
      refetchOnWindowFocus: false,
      // forceFetch: true // Fetch fresh data every time refetch is called
    }
  );

  /**
   * -------------------------- Page Number Calculation -----------------------------
   * 1. Find total records and store into totalResult
   * 2. Findout lastPageNumber, first check if totalRecord is greater than recordsPerPage
   * 3. if recordsPerPage = 6, and totalResult = 263
   *    (263 > 6 ? 263/6 = 43 ). we would have 43 pages
   */

  const totalResult = topHeadlineData?.totalResults | 0;
  const lastPageNumber =
    totalResult > recordsPerPage && Math.ceil(totalResult / recordsPerPage);
  const totalRecordsPerPage = topHeadlineData?.articles.length;

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

  // ============ Filter ===========

  const handleRadioChange = (
    event: ChangeEvent<HTMLInputElement>,
    filterType: string
  ) => {
    setSelectedOptions(event.target.value);
    setFilterBaseOn(filterType);
    setPageNumber(1); // for each filter option, page number should be started from 1
    refetch(); // get updated data
  };

  return (
    <div className="container top-headline-artilce" id="headlines">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <div className="section-title">
            <span className="text-title">Top Headlines</span>

            {/* <!--=========== Filtering Tabs Start ============--> */}
            <span className="filter-options">
              <div className="filter-by-sources dropdown">
                Sources
                <ul className="filter-dropdown">
                  {sourcesList.map((option) =>
                    DropDownLists(
                      option,
                      selectedOptions,
                      handleRadioChange,
                      "sources"
                    )
                  )}
                </ul>
              </div>

              <div className="filter-by-categories dropdown">
                Categories
                <ul className="filter-dropdown">
                  {categoryList.map((option) =>
                    DropDownLists(
                      option,
                      selectedOptions,
                      handleRadioChange,
                      "category"
                    )
                  )}
                </ul>
              </div>
            </span>
            {/* <!--=========== Filtering Tabs Ended ============--> */}
          </div>

          {/* <!--=========== Top Headline Content Starts ============--> */}
          <div className="content m-t-20">
            <div className="row">
              {isLoading || isFetching ? (
                <TopHeadlineSkeleton />
              ) : totalRecordsPerPage > 0 ? (
                topHeadlineData?.articles.map(
                  ({
                    title,
                    url,
                    author,
                    urlToImage,
                    publishedAt,
                    source,
                  }: TopHeadlinePropType) => (
                    <TopHeadlineList
                      key={title}
                      title={title}
                      url={url}
                      author={author}
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
            </div>
            {/* Next and Prev button */}
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
        {/* <!--=========== Top Headline Content Ended ============--> */}

        {/* <!--====== Right Side Starts (NewsLetter and Gallery) =====--> */}
        <div className="col-md-4 col-sm-12 col-xs-12 ">
          <NewsLetter />
          <Gallery />
        </div>
        {/* <!--====== Right Side Ended (NewsLetter and Gallery) =====--> */}
      </div>
    </div>
  );
};

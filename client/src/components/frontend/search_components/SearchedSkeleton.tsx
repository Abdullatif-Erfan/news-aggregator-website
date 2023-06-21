import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function SearchedPageSkeleton() {
  /**
   *  on the searchedPage 6 records will be shown on each page
   *  that is why 6 times this skeleton should be repeated till loading the data
   */
  const items = [1, 2, 3, 4, 5, 6];
  const SearchedLoadingSkeleton = items.map((number) => (
    <div className="col-12" key={number}>
      <div className="row">
        <div className="col-md-3 col-sm-5">
          <div className="single-post-wrap">
            <div className="thumb has-height">
              <Skeleton height="100%" width="100%" baseColor="#dedede" />
            </div>
          </div>
        </div>
        <div className="col-md-9 col-sm-7">
          <div className="media-body">
            <div className="date-content">
              <Skeleton height="100%" width="50%" baseColor="#dedede" />
            </div>
            <h6 className="title">
              <Skeleton
                height="100%"
                width="100%"
                count={7}
                baseColor="#dedede"
              />
            </h6>
          </div>
        </div>
      </div>
    </div>
  ));
  return SearchedLoadingSkeleton;
}

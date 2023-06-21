import Skeleton from "react-loading-skeleton";
export function RightSideSkeleton() {
  /**
   *  on the right side of main slider we have just 4 records
   *  that is why 4 times this skeleton should be shown till loading the data
   */
  const items = [1, 2, 3, 4];
  const loadingSkeleton = items.map((number) => (
    <div className="single-post-list-wrap" key={number}>
      <div className="media">
        <div className="media-left">
          <Skeleton height="100%" width="100%" baseColor="#dedede" />
        </div>
        <div className="media-body">
          <div className="date-content">
            <Skeleton count={1} width="50%" baseColor="#dedede" />
          </div>
          <h6 className="title">
            <a target="_blank" href="#">
                <Skeleton
                  height="100%"
                  count={3}
                  width="100%"
                  baseColor="#dedede"
                />
            </a>
          </h6>
        </div>
      </div>
    </div>
  ));
  return loadingSkeleton;
}

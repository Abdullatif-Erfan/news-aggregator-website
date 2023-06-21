import Skeleton from "react-loading-skeleton";
export function AuthorSkeleton() {
    /**
     *  at first time, 4 articles will be shown in author section
     *  so for the first time instead of 4 articles 4 skeletons should be shown till loading the data
     */
    const items = [1, 2, 3, 4];
    const loadingSkeleton = items.map((number) => <div className="col-12 single-post-wrap" key={number}>
        <div className="author-image-wrapper">
            <div className="author-image">
                <Skeleton height="100%" width="100%" baseColor="#dedede" />
            </div>
            <div className="author-name-wrapper">
                <span className="author-name">
                </span>
                <span className="date">
                </span>
            </div>
        </div>
        <div className="author-details">
            <h6 className="title">
                <Skeleton height="100%" count={3} width="100%" baseColor="#dedede" />
                <Skeleton height="100%" count={1} width="50%" baseColor="#dedede" />
            </h6>
        </div>
    </div>);
    return loadingSkeleton;
}
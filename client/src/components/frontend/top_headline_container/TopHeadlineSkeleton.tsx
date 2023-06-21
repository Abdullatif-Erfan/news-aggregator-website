import Skeleton from "react-loading-skeleton";

const TopHeadlineSkeleton: React.FC<{}> = () => {
    /**
     *  on the top-headline section 6 records will be shown on each page
     *  that is why 6 times this skeleton should be repeated till loading the data
     */
    const items = [1, 2, 3, 4, 5, 6];
    return <>
        {
            items.map((number) => (
                <div className="col-6 top-headline-skeleton" key={number}>
                    <div className="single-post-wrap has-height">
                        <div className="thumb">
                            <Skeleton height="100%" width="100%" baseColor="#dedede" />
                        </div>
                        <div className="details">
                            <div className="date-content">
                                <Skeleton height="100%" width="50%" baseColor="#dedede" />
                            </div>
                            <a href="#">
                                <Skeleton height="100%" count={2} width="100%" baseColor="#dedede" />
                            </a>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
}
export default TopHeadlineSkeleton;
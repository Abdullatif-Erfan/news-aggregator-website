import { SearchedResultAxiosTypes } from "../../../types/Types";

export const SearchedList: React.FC<SearchedResultAxiosTypes> = ({
  author,
  title,
  description,
  content,
  url,
  urlToImage,
  publishedAt,
  source,
}: SearchedResultAxiosTypes) => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-md-3 col-sm-5">
          <div className="single-post-wrap style-overlay">
            <div className="thumb">
              <img
                loading="lazy"
                src={urlToImage}
                alt={title}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "./assets/images/no_image.png";
                }} />
              <a className="tag-base tag-orange" target="_blank" href={url}>
                {source.name}
              </a>
            </div>
            <div className="details">
              <h6 className="title">
                <a target="_blank" href={url}>{author} </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-sm-7">
          <div className="media-body">
            <div className="date-content">
              <i className="fa fa-clock-o" />
              {publishedAt.substring(0, 10)}
            </div>
            <h6 className="title">
              <a target="_blank" href={url}>
                {title}
              </a>
            </h6>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

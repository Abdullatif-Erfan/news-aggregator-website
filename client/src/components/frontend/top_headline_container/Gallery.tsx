export const Gallery: React.FC<{}> = () => {

  /**
   * I Designed a Static Gallery although it is not the main focus
   */
  const imageNames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const imageGalleryList = imageNames.map((number) => {
    return <div className="col-lg-4 col-sm-3 col-xs-2">
      <div className="single-post-wrap gallery">
        <div className="thumb">
          <img src={`assets/images/gallery/${number}.png`} alt="img" />
        </div>
      </div>
    </div>
  })
  return (
    <div className="gallery-wrapper" id="gallery">
      {/* Section Title */}
      <div className="section-title">
        <span className="text-title">Gallery</span>
        <span className="right-icon">
          <i className="fa fa-image"></i>
        </span>
      </div>
      {/* End of Section Title */}

      <div className="container hidden-xs">
        <div className="row">
          {imageGalleryList}
        </div>
      </div>
    </div>
  );
};

import Input from "../form_elements/Input";

export const NewsLetter: React.FC<{}> = () => {
  return (
    <div className="newsletter-wrapper">
      {/* Section Title */}
      <div className="section-title">
        <span className="text-title">News Letter</span>
        <span className="right-icon">
          <i className="fa fa-envelope-o"></i>
        </span>
      </div>
      {/* End of Section Title */}

      <div className="newsletter-content">
        <div className="newsletter-title">
          {" "}
          A weekly recap of the best articles on from different sources
        </div>

        <div className="input-group">
          <Input
            type="text"
            className="form-control"
            placeholder="Email Address"
          />
          <div className="input-group-append">
            <span className="input-group-text" onClick={() => alert('This Feature is not the main focus of this assignment')}>
              <i className="fa fa-location-arrow"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PageNotFound: React.FC<{}> = () => {
  return (
    <>
      <div className="col-lg-12 page-not-found-wrapper">
        <h2 className="x-large text-danger">
          <i className="fa fa-exclamation-triangle"></i> Page Not Found
        </h2>
        <p className="large">Sorry, this page does not exist</p>
      </div>
    </>
  );
};
export default PageNotFound;

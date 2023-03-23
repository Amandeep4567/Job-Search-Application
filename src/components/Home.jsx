const Home = () => {
  return (
    <div className="main-page">
      <div className="main-heading">
        <h1>
          Helping you <span>Land a Job</span> and live your dreams.
        </h1>
        <p>
          Explore new jobs and career opportunities with us. Find the jobs
          aligning with your field of interest here.
        </p>
        <div className="main-details">
          <input
            className="job_title"
            type="search"
            name="job_title"
            id="job-title"
            placeholder="Job Title"
          />
          <button>Search</button>
        </div>
      </div>
      <div className="main-image">
        <img src="./MainImage.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

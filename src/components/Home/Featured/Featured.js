import useFetch from "../../hooks/useFetch";
import Loading from "../../Shared/Loading";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/parking/allParkings/countByCity?cities=gec,khulshi,abashik"
  );

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-8">
          <div className="featuredItem">
            <img
              src="https://i.ibb.co/LPq3QpM/GECjpg.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>GEC</h1>
              <h2>Area</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i.ibb.co/bdBvJJ1/Agrabad.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Agrabad</h1>
              <h2>Area</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i.ibb.co/4Pv1pLX/Chawkbazar.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chawkbazar</h1>
              <h2>Area</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Featured;
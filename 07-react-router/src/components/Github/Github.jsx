// import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

const Github = () => {
  const githubData = useLoaderData();

  const location = useLocation();
  const params = useParams();

  // const [githubData, setGithubData] = useState({});

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Khushwant-Manglani")
  //     .then((response) => response.json())
  //     .then((data) => setGithubData(data));
  // }, [githubData]);

  return params.userId ? (
    <div className="text-3xl mx-28 py-10 text-center bg-gray-700 text-white">
      {location.pathname.split("/")[1]}: {params.userId}
    </div>
  ) : (
    <div className="text-3xl mx-28 py-10 text-center bg-gray-700 text-white">
      Github Followers : {githubData.followers}
      <div className="ml-10">
        <img src={githubData.avatar_url} alt="Avatar" />
      </div>
    </div>
  );
};

export default Github;

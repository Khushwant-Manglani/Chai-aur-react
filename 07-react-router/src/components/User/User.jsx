import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <div className="text-3xl mx-28 py-10 text-center bg-gray-700 text-white">
      User : {userId}
    </div>
  );
};

export default User;

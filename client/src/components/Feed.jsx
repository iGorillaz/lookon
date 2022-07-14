import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { Spinner, MasonryLayout } from "../components";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;
  return <div>Feed</div>;
};

export default Feed;

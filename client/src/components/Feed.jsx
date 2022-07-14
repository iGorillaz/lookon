import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { Spinner, MasonryLayout } from "../components";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message="lookon our spinner :)" />;
  return (
  <div>
	{pins && <MasonryLayout pins={pins} />}
	</div>
  )
};

export default Feed;

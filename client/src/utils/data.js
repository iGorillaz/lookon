export const userQuery = (userId) => {
  const query = `*[_type == 'user' && _id == '${userId}']`;

  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == 'pin' && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
		image {
			asset -> {
				url
			}
		},
		_id,
		destination,
		postedBy -> {
			_id,
			userName,
			image
		},
		save[] {
			_key,
			postedBy -> {
				_id,
				userName,
				image
			},
		},
	}`;

  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
	image{
	  asset->{
		 url
	  }
	},
		 _id,
		 destination,
		 postedBy->{
			_id,
			userName,
			image
		 },
		 save[]{
			_key,
			postedBy->{
			  _id,
			  userName,
			  image
			},
		 },
	  } `;

export const categories = [
  {
    name: "nature",
    image:
      "https://s1.1zoom.ru/big0/893/Norway_Lofoten_Mountains_Clouds_612307_1280x772.jpg",
  },
  {
    name: "space",
    image: "https://s1.1zoom.ru/big0/957/Planets_Earth_588415_1280x720.jpg",
  },
  {
    name: "music",
    image:
      "https://s1.1zoom.ru/big0/761/Musical_Instruments_Wall_Wood_planks_569019_1280x853.jpg",
  },
  {
    name: "cars",
    image:
      "https://s1.1zoom.ru/big0/769/Mountains_Jeep_Jeep_Wrangler_JL_2018_2.0_AT_612103_1280x853.jpg",
  },
  {
    name: "animals",
    image: "https://s1.1zoom.ru/big0/638/Cubs_Brown_Bears_612312_1280x853.jpg",
  },
  {
    name: "games",
    image:
      "https://s1.1zoom.ru/big0/689/Stones_Mikhail_Davydov_photographer_Aion_Tower_of_599460_1280x853.jpg",
  },
  {
    name: "sport",
    image:
      "https://s1.1zoom.ru/big0/920/Men_jiu-jitsu_Two_Lying_down_609939_1280x853.jpg",
  },
  {
    name: "cities",
    image:
      "https://s1.1zoom.ru/big0/84/Russia_Moscow_Panorama_Rivers_Bridges_Moscow_612240_1280x584.jpg",
  },
  {
    name: "people",
    image:
      "https://s1.1zoom.ru/big0/734/Holidays_Men_People_Blonde_girl_Stemware_Smile_Joy_559486_1280x720.jpg",
  },
  {
    name: "other",
    image:
      "https://s1.1zoom.ru/big0/414/Socks_Reflection_Black_background_Heel_611709_1280x720.jpg",
  },
];

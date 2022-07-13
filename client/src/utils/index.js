import jwt_decode from "jwt-decode";

export const createOrGetUser = async (res) => {
	localStorage.setItem('user', JSON.stringify(jwt_decode(res.credential)))
  const { name, picture, sub } = jwt_decode(res.credential);

  const user = {
	_id: sub,
	_type: 'user',
	userName: name,
	image: picture,
  }
};

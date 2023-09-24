const doLogIn = (userEmailId, userData) => {
  localStorage.setItem("userEmailId", userEmailId);
  localStorage.setItem('userToken', JSON.stringify(userData.token));
  localStorage.setItem('userName', JSON.stringify(userData.name));
  localStorage.setItem("isLoggedIn", true);
};

const getUserToken = () => {
  return localStorage.getItem("userToken");
};

const getUserName = () => {
  return localStorage.getItem("userName");
};

const logOut = (props) =>{
  localStorage.removeItem("username");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userToken");
  localStorage.removeItem("userName");
  props.history.push("/login");

};

export default {
  doLogIn,
  getUserToken,
  logOut,
  getUserName
};

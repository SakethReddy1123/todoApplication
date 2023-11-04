function Header({setIsLogin}) {

  function logOutHandler(){
    setIsLogin(false)
  }
  return (
    <div>
      <button onClick={logOutHandler}>Logout</button>
    </div>
  );
}
export default Header;

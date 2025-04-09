import style from "./Navbar.module.css";

function Navbar() {
  //   let parentDivStyle = {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     backgroundColor: "green",
  //   };

  return (
    <div>
      <div className={style.parent}>
        <div className="left">applute</div>
        <div className="right">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Service</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

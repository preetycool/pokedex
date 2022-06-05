import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img
        className='navbar__image'
        src={require("../../images/pokeball.png")}
        alt='pokeball'
      />
      <p className='navbar__paragraph'>PokeDex</p>
      <img
        className='navbar__image'
        src={require("../../images/pokeball.png")}
        alt='pokeball'
      />
    </nav>
  );
};

export default Navbar;

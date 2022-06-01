import lottie from "lottie-web";
import { useEffect } from "react";
import pokeballLoader from "../../animations/pokeballLoader.json";

const Loader = ({ subtitle }) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("pokemon-loader"),
      animationData: pokeballLoader,
    });
  }, []);

  return (
    <div className='loader'>
      <div className='loader__animation' id='pokemon-loader' />
      {subtitle && <p className='loader__subtitle'>{subtitle}</p>}
    </div>
  );
};

export default Loader;

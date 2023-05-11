import { useEffect, useState } from "react";
import Slides from "../../Components/Slides/Slides";
import CardsHome from "../../Components/CardsHome/CardsHome";

function Home() {
  const [isLoadingSlides, setIsLoadingSlides] = useState(true);
  const [isLoadingCards, setIsLoadingCards] = useState(true);

  useEffect(() => {
    // Simulando una carga asincrónica para las Slides
    setTimeout(() => {
      setIsLoadingSlides(false);
    }, 2000);

    // Simulando una carga asincrónica para las CardsHome
    setTimeout(() => {
      setIsLoadingCards(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoadingSlides || isLoadingCards ? (
        <div
          className="flex justify-center items-center h-screen"
          style={{ color: "green" }}
        >
          <div className="inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-8 w-8 align-[-0.125em]">
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-[rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          {!isLoadingSlides && <Slides />}
          {!isLoadingCards && <CardsHome />}
        </>
      )}
    </>
  );
}

export default Home;

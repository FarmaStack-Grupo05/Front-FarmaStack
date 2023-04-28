import Brenda from "../../assets/brenda.jpg";
import Catalina from "../../assets/catalina.jpg";
import Alejo from "../../assets/alejo.jpg";
import David from "../../assets/david.jpg";
import Alejandra from "../../assets/alejandra.jpg";
import Emmanuel from "../../assets/emma.jpg";
import Jersson from "../../assets/jersito.jpg";
import Andres from "../../assets/andres.jpg";

function AboutUs() {
  return (
    <>
      <div className="about-us">
        <h2 className="team-members flex flex-wrap justify-center">Our Team</h2>
        <div className="team-members flex flex-wrap justify-center">
          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Brenda}
              alt="Member 1"
              className="w-full h-full object-cover"
            />
            <h3>Brenda Belén</h3>
            <a
              href="https://www.linkedin.com/in/brenda-de-los-angeles-belen-molina-8772aa211/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Catalina}
              alt="Member 2"
              className="w-full h-full object-cover"
            />
            <h3>Catalina Hernández Mejía</h3>
            <a
              href="https://www.linkedin.com/in/catalina-hernandez-mejia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Alejo}
              alt="Member 3"
              className="w-full h-full object-cover"
            />
            <h3>Alejo Jubany</h3>
            <a
              href="https://www.linkedin.com/in/alejo-jubany-7a707519a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={David}
              alt="Member 4"
              className="w-full h-full object-cover"
            />
            <h3>David Duarte</h3>
            <a
              href="https://www.linkedin.com/in/david-duarte-5756031b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Alejandra}
              alt="Member 5"
              className="w-full h-full object-cover"
            />
            <h3>Alejandra Betancourt</h3>
            <a
              href="https://www.linkedin.com/in/alejandra-betancourt-quiroga-183096177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Emmanuel}
              alt="Member 6"
              className="w-full h-full object-cover"
            />
            <h3>Emmanuel Nuñez</h3>
            <a
              href="https://www.linkedin.com/in/emmanuel-nu%C3%B1ez-b6070a23a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Jersson}
              alt="Member 6"
              className="w-full h-full object-cover"
            />
            <h3>Jersson Gonzalez</h3>
            <a
              href="https://www.linkedin.com/in/jerson-gonz%C3%A1lez-estrada-884399250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="team-member rounded-full overflow-hidden w-32 h-32 flex flex-col items-center">
            <img
              src={Andres}
              alt="Member 6"
              className="w-full h-full object-cover"
            />
            <h3>Andrés Siabato</h3>
            <a
              href="https://www.linkedin.com/in/andres-siabatto-garcia-92149a162"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

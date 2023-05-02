import Brenda from "../../assets/brenda.jpg";
import Catalina from "../../assets/catalina.jpg";
import Alejo from "../../assets/alejo.jpg";
import David from "../../assets/david.jpg";
import Alejandra from "../../assets/alejandra.jpg";
import Emmanuel from "../../assets/emma.jpg";
import Jersson from "../../assets/jersito.jpg";
import Andres from "../../assets/andres.jpg";

function AboutUs() {
  const images = [
    {
      name: "Brenda",
      role: "Developer",
      imageSrc: Brenda,
    },
    {
      name: "Alejo",
      role: "Designer",
      imageSrc: Alejo,
    },
    {
      name: "David",
      role: "Project Manager",
      imageSrc: David,
    },
    {
      name: "Emmanuel",
      role: "Marketing Specialist",
      imageSrc: Emmanuel,
    },
    {
      name: "Andres",
      role: "Quality Assurance",
      imageSrc: Andres,
    },
    {
      name: "Catalina",
      role: "Business Analyst",
      imageSrc: Catalina,
    },
    {
      name: "Alejandra",
      role: "Full-Stack Developer",
      imageSrc: Alejandra,
    },
    {
      name: "Jersson",
      role: "UX/UI Designer",
      imageSrc: Jersson,
    },
  ];

  return (
    <div className="flex flex-wrap">
      {images.map((person, index) => (
        <div
          key={index}
          className="mx-8 w-1/3 m-4 image-container flex justify-center items-center"
        >
          <a href="#" className="group relative block bg-black flex">
            <h2 className="text-white text-lg font-bold mb-2">{person.name}</h2>
            <img
              alt={person.name}
              src={person.imageSrc}
              className="w-full absolute inset-0 h-full object-contain opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                {person.role}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Somos un grupo de estudiantes de henry que nos encontramos
                    actualmente realizando una pagina ecommerce sobre la
                    industria farmaceutica
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;


import { Route, Routes } from "react-router-dom";
import {
<<<<<<< HEAD
  AboutUs,
  Details,
  FormRegister,
  Home,
  Payment,
  Profile,
  Products,
 
=======
	AboutUs,
	Details,
	FormRegister,
	Home,
	Payment,
	Profile,
	Products,
>>>>>>> developer
} from "./views/index";
// npx tailwindcss -i ./src/style.css -o ./dist/output.css --watch  ***PARA ACTUALIZAR ESTILOS*********
function App() {
<<<<<<< HEAD
  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/farmastack/registrarse"
          element={<FormRegister />}
        />
        <Route exact path="/farmastack/nosotros" element={<AboutUs />} />
        <Route exact path="/farmastack/detalle/:id" element={<Details />} />
        <Route exact path="/farmastack/payment" element={<Payment />} />
        <Route path="/farmastack/profile" element={<Profile />}>
          <Route path="informacion-personal" element={<Profile />} />
        </Route>
        <Route exact path="/farmastack/products" element={<Products />}  />
      
      </Routes>
    </>
  );
=======
	return (
		<>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					exact
					path="/farmastack/registrarse"
					element={<FormRegister />}
				/>
				<Route exact path="/farmastack/aboutus" element={<AboutUs />} />
				<Route exact path="/farmastack/details/:id" element={<Details />} />
				<Route exact path="/farmastack/payment" element={<Payment />} />
				<Route path="/farmastack/profile" element={<Profile />}>
					<Route path="informacion-personal" element={<Profile />} />
				</Route>
				<Route exact path="/farmastack/products" element={<Products />} />
			</Routes>
		</>
	);
>>>>>>> developer
}

export default App;

import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Example from "./components/Example";

const App = () => {
  return (
    <>
      <div className="pt-[4.47rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
      <Example />
    </>
  );
};

export default App;

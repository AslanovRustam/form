import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import { useState } from "react";
import Welldone from "./components/Welldone/Welldone";

function App() {
  const [step, setStep] = useState(1);

  return (
    <Container>
      {step < 5 ? <Main step={step} setStep={setStep} /> : <Welldone />}
    </Container>
  );
}

export default App;

import { useState } from "react";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Welldone from "./components/Welldone/Welldone";
import Girl from "./components/Girl/Girl";

function App() {
  const [step, setStep] = useState(1);

  return (
    <Container>
      {step < 5 ? <Main step={step} setStep={setStep} /> : <Welldone />}
      <Girl />
    </Container>
  );
}

export default App;

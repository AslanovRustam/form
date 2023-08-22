import { useState, Suspense } from "react";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Welldone from "./components/Welldone/Welldone";
import Girl from "./components/Girl/Girl";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  return (
    <Container>
      {step < 5 ? (
        <Main step={step} setStep={setStep} Trans={Trans} t={t} />
      ) : (
        <Welldone Trans={Trans} t={t} />
      )}
      {step !== 5 && <Girl />}
    </Container>
  );
}

export default App;

import { useState } from 'react';
import { QUESTIONS, getResultType } from './data/questions';
import { DESIGNER_TYPES } from './data/types';
import { IntroScreen } from './screens/IntroScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ResultScreen } from './screens/ResultScreen';

type Step = { screen: 'intro' } | { screen: 'question'; index: number } | { screen: 'result' };

export default function App() {
  const [step, setStep] = useState<Step>({ screen: 'intro' });
  const [answers, setAnswers] = useState<number[]>([]);

  const restart = () => {
    setAnswers([]);
    setStep({ screen: 'intro' });
  };

  if (step.screen === 'intro') {
    return <IntroScreen onStart={() => setStep({ screen: 'question', index: 0 })} />;
  }

  if (step.screen === 'question') {
    const { index } = step;
    const select = (choiceIndex: number) => {
      const next = [...answers];
      next[index] = choiceIndex;
      setAnswers(next);
      setStep(
        index + 1 < QUESTIONS.length ? { screen: 'question', index: index + 1 } : { screen: 'result' },
      );
    };
    const back = () =>
      setStep(index === 0 ? { screen: 'intro' } : { screen: 'question', index: index - 1 });

    return <QuestionScreen index={index} selected={answers[index]} onSelect={select} onBack={back} />;
  }

  return <ResultScreen type={DESIGNER_TYPES[getResultType(answers)]} onRestart={restart} />;
}

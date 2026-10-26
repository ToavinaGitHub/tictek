import { useLocale } from '../i18n';

export default function ProcessSteps() {
  const { t } = useLocale();

  return (
    <ol className="steps">
      {t.process.map((step) => (
        <li className="step" key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

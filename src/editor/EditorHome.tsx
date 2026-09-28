type Props = { onBack: () => void };

export function EditorHome({ onBack }: Props) {
  return (
    <section class="panel">
      <button type="button" class="ghost" onClick={onBack}>
        Zurueck
      </button>
      <h2>Karten-Editor</h2>
      <p>
        Platzhalter. M1 bringt Stift, Ebenen und Touch-Pan/Zoom. Touch-Ziele
        bleiben mindestens 48 dp.
      </p>
    </section>
  );
}

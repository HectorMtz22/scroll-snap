export function ButtonNav({ value, children }) {
  function handle() {
    window.scrollBy(0, value * window.innerHeight);
  }
  return <button onClick={handle}>{children}</button>;
}

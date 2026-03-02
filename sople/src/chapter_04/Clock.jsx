export default function Clock() {
  const now = new Date();

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {now.toLocaleTimeString()}</h2>
    </div>
  );
}
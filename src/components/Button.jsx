export function Button({ title }) {
  return (
    <button className="bg-secondary hover:bg-yellow-600 text-white p-[0.25rem] rounded-lg text-sm">
      {title}
    </button>
  );
}

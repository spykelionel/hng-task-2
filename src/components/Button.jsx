export function Button({ title, lg }) {
  return (
    <button
      className={`bg-secondary hover:bg-yellow-600 text-white ${
        lg ? "p-3" : "p-[0.25rem] "
      } rounded-lg text-sm`}
    >
      {title}
    </button>
  );
}

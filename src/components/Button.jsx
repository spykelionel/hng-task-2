export function Button({ title, lg, ...props }) {
  return (
    <button
      className={`bg-secondary hover:bg-yellow-600 text-white ${
        lg ? "p-3 rounded-lg" : "p-[0.25rem] "
      } text-sm`}
      {...props}
    >
      {title}
    </button>
  );
}

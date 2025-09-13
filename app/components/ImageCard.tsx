export default function ImageCard({
  children,
  buttonText = "Únete al Sindicato del Fin del Mundo",
  onButtonClick,
}: {
  children: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}) {
  return (
    <div
      className="flex flex-col md:flex-row items-center gap-4 p-5"
    >
      <div className="w-full flex justify-center transition-colors duration-300 group">
        {children}
      </div>
      <button type='button'
        onClick={onButtonClick}
        className="px-4 py-2 font-sfm bg-pink-500 text-black rounded hover:bg-fuchsia-600 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}

export const Button = ({ children, className, onClick, variant = 'primary' }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} ${className}`}
    >
      {children}
    </button>
  );
  
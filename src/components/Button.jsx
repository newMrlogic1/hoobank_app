const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
      text-[18px] rounded-[10px] text-primary outline-none ${styles} hover:bg-slate-300`}
    >
      Get Started
    </button>
  );
};

export default Button;

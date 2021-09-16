const Header = ({ text, className }) => {
  return (
    <div className={className}>
      <header>
        <h2>{text}</h2>
      </header>
    </div>
  );
};

export default Header;

export function Footer() {
  return (
    <footer className="text-center text-gray-500 p-6 text-sm md:text-base">
      <h4>
        Todos direitos reservados © {new Date().getFullYear()} -
        <span className="hover:text-black duration-300"> @rafaeltrindade</span>
      </h4>
    </footer>
  );
}

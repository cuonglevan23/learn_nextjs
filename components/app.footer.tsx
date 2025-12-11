"use client";

const AppFooter = () => {
  return (
    <footer className="text-gray-600 body-font bg-amber-50">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 MyApp —
            <a
                href="https://twitter.com/yourhandle"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                @yourhandle
            </a>
        </p>
      </div>
    </footer>
  );
}
export default AppFooter;
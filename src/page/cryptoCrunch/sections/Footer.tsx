export const Footer = () => {
  return (
    <footer className="mx-4">
      <div className="flex flex-col md:flex-row justify-between text-white">
        <ul className="space-y-5">
          <li className="font-semibold text-lg">Gravity Team</li>
          <li>About US</li>
          <li>Work with Us</li>
        </ul>
        <img src="/crypto/logo.svg" alt="crypto logo" className="mt-10 h-10 text-start" />
      </div>
      <div className="mt-10 text-white flex flex-col md:flex-row text-sm justify-start md:justify-between p-2">
        <p>Terms of use & Privacy Policy</p>
        <p className="text-white text-center">© 2021 Gravity Team. All rights reserved</p>
      </div>
    </footer>
  );
};

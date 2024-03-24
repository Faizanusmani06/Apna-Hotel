const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="flex flex-col">
        <div className="text-3xl text-white font-bold tracking-tight">
          Apna Hotel
        </div>
        <div className="text-sm text-white font-semibold opacity-50">
          Developed by <a href="https://github.com/Faizanusmani06">Moh Faizan</a>
        </div>
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;

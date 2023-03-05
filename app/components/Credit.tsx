const Credit = () => {
  return (
    <div className='py-16 font-helvetica font-light  flex flex-col justify-center items-center  px-4 md:px-16'>
      <div className=' project-line w-full h-1 bg-primary '></div>
      <div className='flex flex-col gap-2 items-center text-xs '>
        <h2 className=' mt-12 tracking-widest '>
          Made with ❤️
          <span className=' ml-1'>using Remix.run</span>
        </h2>
        <h4>All rights reserved | Bhat Shaqran</h4>
        <p>Copyright &copy; 2022</p>
      </div>
    </div>
  );
};

export default Credit;

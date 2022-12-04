const Credit = () => {
  return (
    <div className='py-16 font-wavenhaussemibold  flex flex-col justify-center items-center  px-4 md:px-16'>
      <div className=' project-line w-full h-1 bg-primary '></div>
      <div className='flex flex-col gap-1 items-center'>
        <h2 className=' mt-12 text-md tracking-widest '>
          Made with{' '}
          <span className='bg-secondary px-2 py-1 text-white'> Remix.run </span>
        </h2>
        <h4>All rights reserved | Bhat Shaqran</h4>
        <p>Copyright &copy; 2022</p>
      </div>
    </div>
  );
};

export default Credit;

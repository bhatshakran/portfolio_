const Message = () => {
  return (
    <div className=' message pb-24 bg-background font-qaligo text-secondary pt-12 flex items-start flex-col w-full relative px-4 md:px-16'>
      <div className='z-10'>
        <h2 className='text-4xl  leading-relaxed md:leading-normal md:text-6xl mt-12 no-color'>
          Leave a message
        </h2>
        <h2 className='text-4xl leading-relaxed md:text-6xl md:leading-normal mt-12'>
          Leave <span className='text-primary'>a</span> message
        </h2>
        <h2 className='text-4xl leading-relaxed md:text-6xl md:leading-normal mt-12 no-color'>
          Leave a message
        </h2>
      </div>
      <div className='mt-28 w-full z-10'>
        <form action='' className='w-full flex flex-col items-start gap-8'>
          <div className='w-full md:w-1/2'>
            <input
              className='w-full py-6 text-secondary h-20 focus:outline-none bg-transparent border-b border-secondary placeholder:text-secondary placeholder:opacity-70 focus:border-black focus:border-b-2'
              type='email'
              name='email'
              id=''
              placeholder=' email '
            />
          </div>
          <div className='w-full md:w-1/2 '>
            <textarea
              className='w-full py-6 text-secondary h-40 focus:outline-none resize-none leading-loose bg-transparent border-b  border-secondary placeholder:text-secondary placeholder:opacity-70 focus:border-black focus:border-b-2'
              id=''
              placeholder='your message '
            />
          </div>
          <div className='w-full md:w-1/2 text-center'>
            <input
              type='submit'
              value='Send'
              className='w-full text-center lowercase p-4 h-14 border border-secondary cursor-pointer tracking-widest'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;

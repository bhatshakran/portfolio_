const Message = () => {
  return (
    <div className='element message bg-purple-300 font-qaligo text-white pt-12 flex items-center flex-col w-full relative'>
      <div className='z-10'>
        <h2 className='text-4xl mt-12'>Leave a message</h2>
      </div>
      <div className='mt-12  w-full z-10'>
        <form action='' className='w-full flex flex-col items-center gap-8'>
          <div className='w-1/2'>
            <input
              className='w-full py-6 text-white h-20 focus:outline-none bg-transparent border-b border-white placeholder:text-gray-50 focus:border-black focus:border-b-2'
              type='email'
              name='email'
              id=''
              placeholder=' email '
            />
          </div>
          <div className='w-1/2 '>
            <textarea
              className='w-full py-6 text-white h-40 focus:outline-none resize-none leading-loose bg-transparent border-b  border-white placeholder:text-gray-50 focus:border-black focus:border-b-2'
              id=''
              placeholder='your message '
            />
          </div>
          <div className='w-1/2 text-center'>
            <input
              type='submit'
              value='Send'
              className='w-full text-center uppercase p-4 h-14 border cursor-pointer tracking-widest'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Message;

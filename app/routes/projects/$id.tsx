import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import Container from '~/components/Container';

const b = {
  imgs: [
    '/projects/b/b.png',
    '/projects/b/bchat.png',
    '/projects/b/blogin.png',
  ],
  title: 'Chatter',
  framework: 'Nextjs',
  techUsed: ['graphql', 'next', 'prisma'],
  about:
    'Chatter is a modern chat application where you can chat with your friends(gang).It provides live message subscriptions.It has a beautiful ui and offers an amazing chat experience.',
  url: 'https://chatterweb.netlify.app/',
};
const a = {
  imgs: [
    '/projects/a/a.png',
    '/projects/a/atrend.png',
    '/projects/a/acustomers.png',
    '/projects/a/asearch.png',
    '/projects/a/aroom.png',
  ],
  title: 'Ottelo',
  framework: 'Remix.run',
  techUsed: ['graphql', 'remix.run', 'prisma'],
  about:
    'Ottelo is a hotel booking application website. Here you can book amazing suites, cottages and apartments in the top cities of the world like Dubai, London, Los Angeles, Toronto.The UI is very eloquent and the app is very easy to use.',
  url: 'https://ottelo.herokuapp.com/',
};
const c = {
  imgs: [
    '/projects/c/c.png',
    '/projects/c/clight.png',
    '/projects/c/cgetto.png',
    '/projects/c/cwork.png',
    '/projects/c/cteam.png',
  ],
  title: 'JD',
  framework: 'Next.js',
  techUsed: ['graphql', 'remix', 'prisma'],
  about:
    'JD is a design agency website. This website provides the details and the various offers provided by the design agency.',
  url: 'https://designagency-lime.vercel.app/',
};
const d = {
  imgs: [
    '/projects/d/d.png',
    '/projects/d/dfeatures.png',
    '/projects/d/dproducts.png',
    '/projects/d/dproduct.png',
    '/projects/d/ddesc.png',
    '/projects/d/dreviews.png',
  ],
  title: 'Skii Store',
  framework: 'Next.js',
  techUsed: ['remix', 'sanity'],
  about:
    'Skii store  is a ecommerce shop. You can buy world class skii equipment from this store.',
  url: 'https://snowboard-store.vercel.app/',
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathNameArr = url.pathname.split('/');
  let id = null;
  pathNameArr.map((el) => {
    if (el.length === 1) {
      id = el;
    }
    return null;
  });
  if (id) {
    switch (id) {
      case 'a':
        return json({ data: a });

      case 'b':
        return json({ data: b });

      case 'c':
        return json({ data: c });

      case 'd':
        return json({ data: d });
      default:
        return null;
    }
  }
};

const ProjectPage = () => {
  const { data } = useLoaderData();

  return (
    <main className='bg-background  flex flex-col pt-8 sm:pt-16 pb-60 px-2 sm:px-4 md:px-12'>
      <Container>
        <div>
          <Link
            to='/'
            className='text-xl font-wavenhaussemibold text-secondary'
          >
            Go back
          </Link>
        </div>
        <div className='w-full flex flex-col gap-16 md:gap-32 justify-center items-center'>
          <div className='text-lg sm:text-3xl md:text-5xl font-qaligo leading-relaxed  sm:leading-loose  md:leading-loose md:mt-32 text-secondary flex gap-4  flex-col'>
            <h2>Detailed look into the app</h2>
            <h2 className='text-primary '>{data.title}</h2>
          </div>
          <img
            src={data.imgs[0]}
            alt='img'
            className=' w-full md:w-2/3 object-contain rounded-3xl'
          />
          <p className='text-2xl font-wavenhaussemibold text-primary'>
            <a href={data.url}>View live site {'-->'}</a>
          </p>
        </div>
        <div className=' mt-40 flex flex-col gap-32  text-secondary font-wavenhaussemibold'>
          <div className={`${sectionClasses} w-full md:items-end`}>
            <h2 className={headingClasses}>About the application</h2>
            <p className={`${textClasses} md:text-right`}>{data.about}</p>
          </div>

          <div className={sectionClasses}>
            <h2 className={headingClasses}>More images</h2>
            <div className='flex flex-wrap  gap-6'>
              {data.imgs.map((el: string, idx: number) => {
                if (idx !== 0) {
                  console.log(idx);
                  return (
                    <img
                      src={el}
                      alt='moreimages'
                      key={idx}
                      className='w-full md:w-1/2'
                    />
                  );
                } else return null;
              })}
            </div>
          </div>

          <div className={`${sectionClasses} md:items-end`}>
            <h2 className={headingClasses}>Additional Info</h2>
            <div className='flex flex-col items-end w-full'>
              <h3 className={`${textClasses} md:text-right`}>
                Framework used:
                {data.framework}
              </h3>
              <div
                className={`${textClasses} md:text-right flex justify-start md:justify-end gap-3`}
              >
                Tech used:
                {data.techUsed.map((item: any, idx: number) => {
                  return (
                    <h3 key={idx} className='text-primary'>
                      {item}
                    </h3>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

const headingClasses = `text-3xl font-qaligo leading-loose`;
const sectionClasses = `flex flex-col gap-8`;
const textClasses = `font-wavenhaussemibold text-2xl leading-relaxed  w-full md:w-2/3 `;

export default ProjectPage;

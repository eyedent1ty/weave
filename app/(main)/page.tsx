import NewThread from '@/components/home/NewThread';
import ListOfPost from '@/components/home/ListOfPost';

const Home = async () => {

  const user = false;

  return (
    <>
      <div className={`${user ? 'flex' : 'hidden'} px-6 py-4 justify-between border-b border-border-color`}>
        <NewThread />
      </div>
      <ListOfPost />
    </>
  );
};

export default Home;

import NewThread from '../components/home/NewThread';
import ListOfPost from '../components/home/ListOfPost';

const Home = async () => {
  return (
    <>
      <div className="px-6 py-4 flex justify-between border-b border-border-color">
        <NewThread />
      </div>
      <ListOfPost />
    </>
  );
};

export default Home;

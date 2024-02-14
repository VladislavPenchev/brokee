import { useQuery } from '@apollo/client';
import { testQuery } from '../../api-service/gql';
import FreeTrial from './FreeTrial';
import TestCard from './TestCard';

const PostsList = () => {
  const { data, loading, error } = useQuery(testQuery);

  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div className='my-4 mt-20 sm:mx-14 lg:mx-32'>
        <FreeTrial />
      </div>
      <div className="my-4 sm:mx-14 lg:mx-32">
        <div className="flex flex-wrap -mx-4">
          {(data?.tests ?? []).map((test: Test) => (
            <TestCard key={`${Math.random()}-${test.brokee_id}}`} test={test} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsList;

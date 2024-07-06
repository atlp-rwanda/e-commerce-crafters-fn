import React from 'react'
import { useSelectRequestsQuery} from '../Redux/Admin/sellersSlice';
import RequestsTable from '../Components/dashboard/RequestTable';

const Requests = () => {
  const { data: sellers, isLoading, isError } = useSelectRequestsQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading sellers.</div>;
  

  return <RequestsTable sellers={sellers} />;
}


export default Requests

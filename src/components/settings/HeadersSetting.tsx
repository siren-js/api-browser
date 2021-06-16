import HeadersTable from './HeadersTable';

export default function HeadersSetting() {
  return (
    <>
      <p className="title is-4">Headers</p>
      <p className="subtitle is-6">
        Customize HTTP headers sent in each request
      </p>
      <div className="table-container">
        <HeadersTable />
      </div>
    </>
  );
}

export default async function PistaHouse({ params }) {
  const resId = (await params).resId;

  // backend api call on mapi/restuant/resId
  return (
    <div>
      <h1>{resId} page</h1>
    </div>
  );
}

export default async function PistaHouse({ params }) {
  const resId = (await params).resId;
  return (
    <div>
      <h1>{resId} page</h1>
    </div>
  );
}

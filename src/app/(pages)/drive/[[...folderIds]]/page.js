export default async function Drive({ params }) {
  const { folderIds } = await params;

  console.log(folderIds);

  return (
    <div>
      <h1>Google Drive: {JSON.stringify(folderIds)}</h1>
    </div>
  );
}

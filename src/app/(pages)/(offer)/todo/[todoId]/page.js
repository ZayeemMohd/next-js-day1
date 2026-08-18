export default async function Todo({ params }) {
  const todoId = (await params).todoId;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + todoId,
  );

  const data = await response.json();

  return (
    <div>
      {data.id}: {data.title}, {data.completed ? "true" : "false"}
    </div>
  );
}

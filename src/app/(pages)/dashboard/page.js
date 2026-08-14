export default async function Dashboard() {
  const response = await fetch("http://localhost:3000/api/v1/users");
  const data = await response.json();
  console.log(data.data);

  return (
    <div>
      <h1>Dashboard</h1>
      <h4>Current Users of Your Application: </h4>
    </div>
  );
}

function UserComponent({ details }) {
  return (
    <div>
      <h1>{details.username}</h1>
      <h2>{details.email}</h2>
    </div>
  );
}

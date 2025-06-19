async function fetchUser(id: string) {
    const res = await fetch(`https://jsonplaceholder.org/users/${id}`);
    if(!res.ok) {
        return null;
    }

    const user = await res.json();
    return user;
}

export default async function UserPage({
    params,
}: {
    params: Promise<{userId: string}>
}) {
    const { userId } = await params;
    console.log(userId, '<<<<<<<<<<')
    const user = await fetchUser(userId);
    return (
        <div>
            <h1>{user.firstName}</h1>
            <p><strong>Email: </strong> {user.email}</p>
            <p><strong>Phone: </strong> {user.phone}</p>
            <p><strong>Website: </strong> <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
            <p><strong>Company: </strong> {user.company.name}</p>
            <p><strong>Address: </strong> {user.address.street}</p>
        </div>
    )
}
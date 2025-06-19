export default async function Users() {
    const res = await fetch('https://jsonplaceholder.org/posts');
    const users = await res.json();
    

    return (
        <div>
            <h1> Users list </h1>
            <ul>
                {users.map((user: {id: number; slug: string}) => (                    
                    <li key={user.id}>
                        <h3>{user.id < 10 && user.slug}</h3>
                    </li>
                ))}
            </ul>
            
        </div>        
    )
}
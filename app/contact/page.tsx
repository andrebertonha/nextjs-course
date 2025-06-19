export default async function Contact() {    
    console.log('hey is this in server or client?');

    const response = await fetch('https://jsonplaceholder.org/posts');
    const posts = await response.json();
    console.log(posts);
    return (
        <div>
            <button >Click me</button>
        </div>
    )
}
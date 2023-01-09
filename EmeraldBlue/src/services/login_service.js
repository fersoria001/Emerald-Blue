const ENDPOINT = 'http://localhost:8080'

export default function login({username, password})
{
    return fetch(`${ENDPOINT}/usuarios`), {
        method:'POST',
        headers:
        {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify({username, password}
            )
    }
}
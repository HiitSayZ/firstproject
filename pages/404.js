import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {

        console.log('use effect ran')
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Whoops!</h1>
            <h2>That page cannot be found.</h2>
            <p>Going back to the <Link href="/"><a>Homepage</a></Link> in 5 seconds.</p>
        </div>
     );
}
 
export default NotFound;
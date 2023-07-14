import { FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
function NotFound() {
    return (
        <>
            <div className="Home">

                <h1 className='ops404'>404</h1>
                <h2 className='ops'>Oooooops!</h2>
                <h4>The page you are looking for is currently unavailable, we will fix it</h4>
                <button className='btn btn-primary'><FaTelegramPlane className='telegram' /> <Link id='tg' href='https://t.me/kaan_coder'>Telegram</Link></button>
                <button className='btn btn-outline-primary text-primary'><Link id='link' href='/'>Go To Back</Link></button>
            </div>
        </>
    )
}
export default NotFound
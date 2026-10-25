import { Link } from 'react-router'

const Avatar = () => {
  return (
    <Link to="/" className="rounded-lg">
        <img src="/assets/images/image-avatar.jpg" alt="Malick, home" width="40" height="40" className="size-10 rounded-lg object-cover" />
    </Link>
  )
}

export default Avatar
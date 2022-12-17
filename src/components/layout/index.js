import Navbar from '../navbar'
import Sidebar from '../sidebar'

export default function Layout({ children }) {
  return (
    <div className='fixed flex h-full w-full'>
      <Sidebar active={children.key}/>
      <div className='p-5 my-10 w-full'>
        <div className='m-auto rounded-lg shadow-lg p-6 bg-white'>
          {children}
        </div>
      </div>
    </div>
  )
}
import Image from 'next/image'
import Todolist from '@/components/Todo/Todolist'
export default function Home() {
  return (
      <main>
        <div className='m-20'>
        <div className='text-center text-xl'>TODO LIST</div>
        </div>
        <Todolist/>
      </main>
  )
}

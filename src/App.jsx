import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import images from './images'
function App() {

  const data = [
    { name: 'C++', img: images.cppImage },
    { name: 'Python', img: images.pythonImage },
    { name: 'MySql', img: images.mysqlImage },
    { name: 'Java', img: images.javaImage },
    { name: 'Html', img: images.htmlImage },
    { name: 'Tailwind Css', img: images.tailwindCssImage },
    { name: 'Javascript', img: images.javascriptImage },
    { name: 'Php', img: images.phpImage },
    { name: 'Node Js', img: images.nodejsImage },
    { name: 'Express Js', img: images.expressImage },
    { name: 'Mongo Db', img: images.mongodbImage },
    { name: 'React Js', img: images.reactjsImage }

  ];

  return (
    <>
      <div className='w-full h-auto bg-slate-950 flex flex-col justify-evenly items-center p-10 '>
        <div className='w-3/6 h-20 bg-orange-500 flex justify-center items-center rounded-3xl'>
          <h1 className='text-3xl'>All The Cards are here</h1>
        </div>
        <div className='mt-10 p-10 w-5/6 h-auto bg-#14213d-500 flex justify-center items-center flex-wrap gap-20 overflow-auto'>
          {<Cards data={data}/>}
        </div>
      </div>
    </>
  )
}

export default App

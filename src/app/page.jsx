
import Header from './components/header'
import MovieList from './components/MovieList'


export default function Home() {
  return (
  <div className='bg-slate-900 text-center text-white text-3xl'>
    <h1 className='pb-16 '>welcome</h1>
      <Header/>
      <h1 className='text-white text-4xl mt-10 pt-10 flex justify-between'> Top Rated Movie Reviews</h1>
        <MovieList/>
      </div>
  
  )

}

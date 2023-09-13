import './App.css'
import CheckList from './components/CheckList/CheckList'
import Content from './components/Content/Content'
import Header from './components/Header/Header'

function App() {

  return (
    <>

      <Header></Header>
      <div className='container mx-auto md:flex justify-between mt-10 gap-5'>
        <Content></Content>
        <CheckList></CheckList>
      </div>
    </>
  )
}

export default App

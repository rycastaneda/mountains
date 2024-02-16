import './App.css'
import Nav from './components/nav'
import History from './components/History'
import Team from './components/Team'
import Footer from './components/footer'


const tabs: Mountain[] = [{
  id: 1,
  name: "MOUNTAIN 1",
  image: '/tab1.jpg',
  schedule: [
    {
      date: '26 Nov 2016',
      name: 'Vestibulum viverrra'
    },
    {
      date: '28 Nov 2016',
      name: 'Vestibulum viverrra'
    },
    {
      date: '18 Dec 2016',
      name: 'Vestibulum viverrra'
    },
    {
      date: '7 Jan 2017',
      name: 'Vestibulum viverrra'
    },
  ]
}, {
  id: 2,
  name: "MOUNTAIN 2",
  image: '/tab2.jpg',
  schedule: [
    {
      date: '26 Nov 2016',
      name: 'Vestibulum viverrra'
    },
    {
      date: '28 Nov 2016',
      name: 'Vestibulum viverrra'
    },
    {
      date: '18 Dec 2016',
      name: 'Vestibulum viverrra'
    },
    {
      date: '7 Jan 2017',
      name: 'Vestibulum viverrra'
    },
  ]
}]

function App() {
  return (
    <div>
      <div className="relative min-h-[825px] bg-[url('/page1.jpg')]">
        <Nav />
      </div>
      <History/>
      <Team tabs={tabs}/>
      <Footer />
    </div>
  )
}

export default App

import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import data from'./data.js'

function App() {
  const cardElements = data.map((destination) => {
    return (
      <Card
        img={destination.img}
        title={destination.title}
        country={destination.country}
        googleMapsLink={destination.googleMapsLink}
        dates={destination.dates}
        text={destination.text}
      />
    )
  })
  return (
    <>
      <Header />
      <div className = "CardContainer">
        {cardElements}
      </div>
    </>
  )
}

export default App

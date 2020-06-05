// import Head from 'next/head'
import Top from '../components/Top'
import Why from '../components/Why'
import PlansFloor from '../components/PlansFloor'
import Prices from '../components/Prices'
import Plans from '../components/Plans'
import Description from '../components/Description'
import ProgressBuilding from '../components/ProgressBuilding'
import Map from '../components/Map'
import Documents from '../components/Documents'
import Developer from '../components/Developer'
import About from '../components/About'

export default function Home() {
  return (
    <main>
        <Top />
        <Why />
        <PlansFloor />
        <Prices />
        <Plans />
        <Description />
        <ProgressBuilding />
        <Map />
        <Documents />
        <Developer />
        <About />
    </main>
  )
}

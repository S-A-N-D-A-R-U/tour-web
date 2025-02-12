import CallToAction from '../components/Transfer/CallToAction'
import FAQ from '../components/Transfer/FAQ'
import Features from '../components/Transfer/Features'
import Fleet from '../components/Transfer/Fleet'
import THero from '../components/Transfer/GHero'
import PopularRoutes from '../components/Transfer/PopularRoutes'
import Safety from '../components/Transfer/Safety'
import TransferForm from '../components/Transfer/TransferForm'

const Transfer = () => {
  return (
    <div className='min-h-screen  bg-gray-50'>
        <THero/>
        <div className='max-w-7xl mx-auto'>
        <TransferForm/>
        <Features/>
        <PopularRoutes/>
        <Fleet/>
        <FAQ/>
        <Safety/>
        </div>
        <CallToAction/>
    </div>
  )
}

export default Transfer

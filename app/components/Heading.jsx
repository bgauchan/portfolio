import { Caprasimo } from 'next/font/google'

const caprasimo = Caprasimo({ subsets: ['latin'], weight: '400' })

const Heading = ({ type, customClasses, children }) => {
  if(type === 'h1') {
    return <h1 className={`${caprasimo.className} text-black text-5xl lg:text-6xl ${customClasses}`}>{children}</h1>
  } else if(type === 'h2') {
    return <h2 className={`${caprasimo.className} text-black text-3xl lg:text-4xl ${customClasses}`}>{children}</h2>
  }

  return <h3 className={`${caprasimo.className} text-black text-2xl ${customClasses}`}>{children}</h3>
}

export default Heading;
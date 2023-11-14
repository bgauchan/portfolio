

const Button = ({ type, link, children }) => {
  const commonClass = 'font-medium text-center rounded-[50px] py-3 text-sm md:text-md';

  if(type === 'primary') {
    return <a href={link} target="_blank" className={`bg-black text-white ${commonClass}`}>{children}</a>
  }

  return (
    <a href={link} className={`text-black hover:bg-black hover:text-white border border-black ${commonClass}`}>{children}</a>
  )
}

export default Button;
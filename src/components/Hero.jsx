import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex items-center justify-between w-full pt-3 mb-10'>
        <img src={logo} alt='sumz_logo' className='object-contain w-28' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/Oliver-Leonor/ai_summarizer')}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer that transforms lenghty articles into clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero
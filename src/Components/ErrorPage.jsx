import error from '../images/errorImage.svg'


const ErrorPage = () => {

  return (

    <section className="w-screen h-screen flex flex-col items-center justify-center">

      <div className="text-center">
        <h1 className="text-[36px] font-bold tracking-tight">Howdy partner...</h1>
          <p className="text-[20px] font-thin">Looks like somethin' broke <span className='pl-1 tracking-tighter'>
              x _ X </span></p>
          <img src={error} alt='errorImage' className='pt-16 ' />
      </div>

    </section>

      )
}


export default ErrorPage
import errorImg from '../../assets/img/error_image.png';

function Error() {
  // component render
  return (
    <>
    <div className=" flex flex-col justify-center align-center h-96">
      <img src={errorImg} alt="error image" className="w-10 h-10 mx-auto my-2"/>
      <p className="text-center text-2xl text-rosewater">We are sorry, it seems no recipes were found ):</p>
    </div>
    </>
  )
}

export default Error;
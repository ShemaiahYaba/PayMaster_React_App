import pic2 from '../assets/plane.jpg'
function Set () {
    return(
        <header>
            <img src={pic2} alt="" width={"200px"} className='picSet'/> <br />
            <p className='Pset'>Let's Fly!</p>
            <button className='continue-buttonset'> Continue</button>
        </header>
    )
}
export default Set
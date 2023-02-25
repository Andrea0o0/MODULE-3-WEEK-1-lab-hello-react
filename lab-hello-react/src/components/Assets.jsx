import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Assets = () => {
    return (
        <div className='assets'>
            <div>
                <img src={icon1} alt='Declarative'/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src={icon2} alt='Components'/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src={icon3} alt='Single-Way'/>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src={icon4} alt='JSX'/>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    );
  }

  export default Assets
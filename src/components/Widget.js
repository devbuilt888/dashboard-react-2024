import react from 'react';

const Widget = ({color, textToDisplay, count})=>{

    //array destructuring
    // const array1 = [1, 2, 3];
    // const [one, two] = array1; (only 1 and 2 will be assigned to one and two respectively)


    // const object = { orange: 'orange', mango:'mango', apple:'apple'};
    // const {orange, , apple};
    //leave blank space between commas to skip one key from object to be destructured


    const widgetStyles = {
        background: color
    }
return <section className="widget" style={widgetStyles}><i className="fa-solid fa-bucket"/>
{textToDisplay}
<br />
{count}
</section>
}

export default Widget;
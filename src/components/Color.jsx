import '../App.css';

const Color = (props) => {
    let color1 = props["color1"];
    let color2 = props["color2"];
    console.log(props)

    return(
        <div className="pageContainer">
            <div className="helloBlueRed" style={{backgroundColor: color1, color: color2}}>
                <h1>The word is: hello</h1>
            </div>
        </div>
    )
}


export default Color;
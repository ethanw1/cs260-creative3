import { Outlet, Link } from "react-router-dom";

const Pass = () => {
  return html;
};
var html = <>
        <body class="pass">
        <div class="pass-spacing"></div>
        <div class="pass-stuff">
            <h1 class="pass-title">Moving Pics Pass</h1>
            <h3 class="pass-subtitle">
                Attend one free Moving Pic at the Big Screen each month. Additionally, take 10% off all other ticket purchases
                and 20% off all concessions.
            </h3>
            <div class="pass-flex">
                <div class="pass-flex-item">
                    <img src="/creative1/assets/popcorn.jpg"></img>
                </div>
                <div class="pass-flex-item">
                    <img src="/creative1/assets/seats.jpg"></img>
                </div>
                <div class="pass-flex-item">
                    <img src="/creative1/assets/theater.jpg"></img>
                </div>
            </div>
            <a class="pass-button"><Link to="/">Sold Out - Go Back Home</Link></a>
            
        </div>
        <div class="pass-spacing"></div>
        <div class="pass-spacing"></div>
        </body>
    </>;

export default Pass;
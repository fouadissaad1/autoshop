import geneve from '../../Images/HomePage/geneve.jpg'
export function Home(){
    return(
        <div className={"row"}>
            <div className={"bs-tooltip-bottom"}>
                <h3>Welcome to Autoshop</h3>
                <p>Order your car</p>
            </div>
            <img src={geneve} alt="auto Terre" height="888" width="1853"/>
        </div>

    )
}
export default Home;
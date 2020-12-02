const myimg1="https://images.pexels.com/photos/4117545/pexels-photo-4117545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const myimg2="https://images.pexels.com/photos/3681591/pexels-photo-3681591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const LeftDiv = ()=> {

     
    return(
        <div>
            
            <div style={styles.mystyle1}>
                <div >
                    <h1 style={styles.mystyle2}>Welcome to a healthy life </h1>
                    <p style={styles.mystyle3}>We offer a healthy nutrition program without sacrificing delicious food and drinks.</p>

                </div>
                
            </div>
            {/* <img src={myimg2} style={styles.mystyle}/> */}
        </div>
        
    );
}

export default LeftDiv;

const styles={
    mystyle1 : {
        backgroundImage:`url(${ myimg2})`,
        padding: "10px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        width: "400px",
        height: "630px",
        // backgroundColor: "red",
        margin:"auto",
        
        
    },
    mystyle2 : {
        backgroundColor: "rgba(0,0,0,0.5)",
        color:"#69f0ae",
        borderRadius:"10px 40px 5px 20px"

        
        
        
    },
    mystyle3 : {
          
        
        fontWeight: "bold",
        // wordSpacing: "10px",
        letterSpacing: "2px",
        padding:"15px",
        fontSize:"17px"
    }

};
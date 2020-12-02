import Book from "./Book"
const CenterDiv = ()=> {

    const videoSource = "https://player.vimeo.com/external/174002676.sd.mp4?s=5bcce89e05eb87e1a3b6b896cada6718d59cfe33&profile_id=164&oauth2_token_id=57447761"
    return(
        <div>
            <div style={styles.mystyle2}>
                
                <video 
                    style={styles.mystyle1}
                    autoPlay="autoplay"
                    loop="loop"
                    resizeMode={"cover"}
                    muted={true}
                    repeat={true}
                    resizeMode={"cover"}
                    rate={1.0}
                    ignoreSilentSwitch={"obey"}
                    >
                    <source src={videoSource} type="video/mp4" />
                    
                </video> 

                <div style={styles.mystyle3}>
                    <Book/>
                    
                </div> 
            </div>

            
        </div>
        
        
    );
}

export default CenterDiv;

const styles={
    mystyle1 : {
        
        width: "500px",
        height:"100%" ,
       
        
        
    },
    mystyle2 : {
        // backgroundColor: "rgba(0,0,0,0.5)",
        // display:"flex",
        // flex:1,
        // width: "500px",
        // height: "640px",
        // position: "relative",
        
    },
    mystyle3 : {
        backgroundColor: "rgba(255,255,255,0.7)",
        // display:"flex",
        // flex:1,
        width: "500px",
        height: "340px",
        // position: "relative",
       
        
        
    },

};
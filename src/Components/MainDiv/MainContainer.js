import './MainContainer.css';
import LeftDiv from './LeftDiv';
import CenterDiv from './CenterDiv';
import RightDiv from './RightDiv';
const MainContainer =()=>{
    return(
        <div>
            <div className="Maincontainer">
                <div className="LeftDiv">
                    <LeftDiv/>
                </div>
                <div>
                    <CenterDiv className="Centerdiv"/>
                </div>
                <div>
                    <RightDiv className="Rightdiv"/>
                </div>
            </div>
        </div>
    );
}

export default MainContainer;
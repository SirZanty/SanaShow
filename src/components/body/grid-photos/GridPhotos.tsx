import React, {Component} from "react";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import './GridPhotos.css'
import {Zoom} from 'react-slideshow-image';

interface IProps {

}

interface IState {
    images: Array<IImage>;
    activeIndex: number;
}

interface IImage {
    imageSrc: string;
}

const zoomOutProperties = {
    indicators: true,
    scale: 0.6,
    prevArrow: <div style={{width: "40px", marginRight: "-40px", cursor: "pointer", padding:"5px", opacity:"0.3" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4c4d4d"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "40px", marginLeft: "-40px",  cursor: "pointer", padding:"5px", opacity:"0.3" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#4c4d4d"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>,
}

export class GridPhotos extends Component<IProps, IState> {



    constructor(props: IProps) {
        super(props);
        this.state = {
            images: [],
            activeIndex: 0
        };
    }

    componentDidMount() {
        this.setState({
            images:
                [
                    {imageSrc: "https://i.pinimg.com/564x/cb/75/90/cb7590e2184d11110d91793084aa4fdd.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/1b/af/7b/1baf7bfbb1d195dac32214bbff79e8e6.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/65/9d/ee/659dee8a2ab9f553d3556fc28ce777f2.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/da/63/90/da6390d72a1e071ddca33e0a534b5cf5.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/a3/be/ae/a3beae1250369be1bed7c4c3630492b6.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/3d/3c/06/3d3c0650b684986e5bedea3345e0aaf7.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/1b/af/7b/1baf7bfbb1d195dac32214bbff79e8e6.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/6e/32/b4/6e32b457b4e45db95578f26796c4812a.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/a3/47/c9/a347c93caeddfe11e21c6642e67517e0.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/7f/39/cc/7f39cc21090ae984ca94c18edf65c4cf.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/90/b5/18/90b5181decfc1f70c2bf25dcda881efe.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/8c/00/37/8c003796a0bdfd756957e0eff824c1d0.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/c5/92/94/c592943010f22c2eea5b621db728d7fa.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/85/a9/e9/85a9e9d6e10d42181c5db16442754014.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/c7/4c/33/c74c33cdd9977e824ccb9e306bcbba01.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/df/4c/6c/df4c6c9391badc7d179b18cd59e359ec.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/70/b7/6d/70b76d5bdb85d97d26623cfec384593b.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/a6/5b/de/a65bde5c4551fc5d9c566b0335a9f29a.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/39/3e/84/393e84c291412cc571d1d3f15c3d2a2f.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/1b/af/7b/1baf7bfbb1d195dac32214bbff79e8e6.jpg"},
                    {imageSrc: "https://i.pinimg.com/564x/22/92/fc/2292fc952ce6d32fdd2dc410d5afbe7a.jpg"}
                ]
        })
    }

    render() {
        return (
            <div >
                <div className="p-m-2 p-grid"  >
                    {
                        this.state.images && this.state.images.map((image, index) => {
                            let imgEl = <img id="myImg" src={image.imageSrc} alt={image.imageSrc}
                                             style={{cursor: 'pointer', width: '200px', height:'350px'}} onClick={() => {
                                const modal = document.getElementById("myModal");
                                if(modal!=null){
                                    modal.style.display = "block";
                                }
                            }}/>

                            return (
                                <div className="p-col" key={index}>
                                    {imgEl}
                                </div>
                            )
                        })
                    }


                </div>
                <div id="myModal" className="modal"  onKeyDown={(event)=>{
                    if(event.key==='ArrowRight'){
                        alert("ArrowRight")
                    }
                    else if(event.key==='ArrowLeft'){
                        alert("ArrowLeft")
                    }
                    else if(event.key==='Escape'){
                        const modal = document.getElementById("myModal");
                        if(modal!=null){
                            modal.style.display = "none";
                        }
                    }
                }}
                     tabIndex={-1}  >
                    <span className="close" onClick={() => {
                        const modal = document.getElementById("myModal");
                        if(modal!=null){
                            modal.style.display = "none";
                        }
                    }}>*</span>
                    <Zoom   {...zoomOutProperties}    >
                        {this.state.images.map((each, index) => (
                            <div key={index}  style={{width: "100%",height:"96vh"}}>
                                <img className="modal-content" alt={each.imageSrc}
                                     src={each.imageSrc}/>
                            </div>
                        ))}
                    </Zoom>
                </div>
            </div>
        )
    }
}

import './logo.css'
function CubeScene({ cor }) {
    let style = {};
    if (cor === 1) {
        style = { border: "1px solid #ffffff" };
    }

    return (
        <div className="cube-scene">
            <div className="cube">
                <div className="face front" style={style}></div>
                <div className="face back" style={style}></div>
                <div className="face left" style={style}></div>
                <div className="face right" style={style}></div>
                <div className="face top" style={style}></div>
                <div className="face bottom" style={style}></div>
            </div>
        </div>
    );
}

export default CubeScene;

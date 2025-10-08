import {Link} from "react-router-dom";


function PortifolioCard({titulo, desc, imagem, link}) {
    return (
        <Link to={link} className='portifolio-card'>
            <p className={'titulo-card-portifolio'}>{titulo}</p>
            <div className={'overlay-imagem'}>
                <img src={imagem} alt={titulo} className={"imagem-card-portifolio"}/>
                <p className={'desc-card-portifolio'}>
                    {desc}
                    <button className={'portifolio-button'} >Conhecer</button>
                </p>
            </div>
        </Link>
    )
}



export default PortifolioCard
import React from 'react'
import './index.css'
import logoCorebiz from '../../image/logo-corebiz-black.svg'
import instagram from '../../image/instagram.svg'
import linkedin from '../../image/linkedin.svg'
import facebook from '../../image/facebook.svg'

const index = () => {
    return (
        <div>
            <div className="container-footer">
                <div className="left">
                    <div className="logo">
                        <div className="logo-corebiz">
                            <img src={logoCorebiz} alt="" />
                        </div>
                        <div className="text">
                            <p>direitos reservados. corebiz 2021</p>
                        </div>
                        <div className="icons">
                            <a href="https://www.facebook.com/corebiz.ag/"><img src={facebook} alt="" /></a>
                            <a href="https://www.instagram.com/corebizag/"><img src={instagram} alt="" /></a>
                            <a href="https://www.linkedin.com/company/corebiz-brasil/"><img src={linkedin} alt="" /></a>
                        </div>
                    </div>
                    <div className="links">
                        <ul>
                            <a href="https://www.corebiz.ag/pt/about/"><li>a corebiz</li></a>
                            <a href="https://www.corebiz.ag/pt/#framework-title"><li>serviços</li></a>
                            <a href="https://www.corebiz.ag/pt/cases/"><li>cases</li></a>
                            <a href="https://www.corebiz.ag/pt/contato/"><li>contato</li></a>
                            
                        </ul>
                    </div>
                </div>
                <div className="rigth">
                    <div className="country">
                        <h3>.Brasil</h3>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                    </div>
                    <div className="country">
                        <h3>.Argentina</h3>
                        <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                    </div>
                    <div className="country">
                        <h3>.México</h3>
                        <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                    </div>
                    <div className="country">
                        <h3>.Chile</h3>
                        <p>Roberto del Río 1137, Providencia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index

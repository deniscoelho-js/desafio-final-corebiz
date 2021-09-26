import React from 'react'
import './index.css'
import logoCorebiz from '../../image/logo-corebiz-global.svg'
const index = () => {
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <img src={logoCorebiz} alt="" />
                </div>
                <div className="links">
                    <ul>
                        <li><a href="https://www.corebiz.ag/pt/about/">a corebiz</a></li>
                        <li><a href="https://www.corebiz.ag/pt/about/">serviços</a></li>
                        <li><a href="https://www.corebiz.ag/pt/cases/">cases</a></li>
                        <li><a href="https://www.corebiz.ag/pt/contato/">contato</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default index

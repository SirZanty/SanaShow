import React from 'react'
import 'primeflex/primeflex.css';
import './Footer.css'

const Footer = () => {
    return(
        <div>
            <footer role="contentinfo" className="p-d-flex p-flex-column">
                <div className="p-d-flex p-jc-center p-mb-3">
                    <div className="p-mr-3">
                        <a href="https://about.sanjitzy.com">
                            <div className="footer-fond">Sanjitzy</div>
                        </a>
                    </div>
                    <div className="p-mr-3">
                        <a href="https://about.sanjitzy.com">
                            <div className="footer-fond">Information</div>
                        </a>
                    </div>
                    <div className="p-mr-3">
                        <a href="https://about.sanjitzy.com">
                            <div className="footer-fond">API</div>
                        </a>
                    </div>
                </div>
                <div className="p-d-flex p-jc-center p-mb-3">
                    <div className="p-mr-3">
                        <a href="https://about.sanjitzy.com">
                            <div className="footer-fond">
                                English
                            </div>
                        </a>
                    </div>
                    <div className="p-mr-3">
                        <div className="footer-fond">
                            © 2022 SanaShow from Sanjitzy
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
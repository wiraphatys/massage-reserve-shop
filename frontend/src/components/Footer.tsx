import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer p-10 text-neutral-content bg-emerald-950">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Availability</a>
                    <a className="link link-hover">Reservation</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
        </>
    )
}

export default Footer
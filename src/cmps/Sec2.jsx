import React from 'react'

export function Sec2() {
    return (
        <section className="sec2 flex column" >

            <div className="desc">
                <div className="icon desktop-mobile-icon"></div>
                <div className="header">Access your files, anywhere</div>
                <div className="txt">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</div>
            </div>

            <div className="desc">
                <div className="icon security-icon"></div>
                <div className="header">Security you can trust</div>
                <div className="txt">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</div>
            </div>

            <div className="desc">
                <div className="icon real-time-icon"></div>
                <div className="header">Real-time collaboration</div>
                <div className="txt files">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</div>
            </div>

            <div className="desc">
                <div className="icon files-icon"></div>
                <div className="header">Store any type of file</div>
                <div className="txt">
                    Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                </div>
            </div>
        </section>
    )
}

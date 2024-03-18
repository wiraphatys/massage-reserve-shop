import React from 'react'

function Banner() {
  return (
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/img/banner1.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                  <h1 className="mb-5 text-5xl font-bold">Massage Reservation</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <a className="btn btn-success mx-3" href='/signup'>Sign Up</a>
                  <a className="btn btn-outline btn-accent mx-3" href='/signin'>Sign In</a>
              </div>
          </div>
      </div>
  )
}

export default Banner

import React from "react";
const Reset = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tennis Court Reservation System</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a className="hover:underline" href="#">Home</a></li>
              <li><a className="hover:underline" href="#">About Us</a></li>
              <li><a className="hover:underline" href="#">Contact Us</a></li>
              <li><a className="hover:underline" href="#">Services</a></li>
              <li><a className="hover:underline" href="/login"> Login</a></li>
              <li><a className="hover:underline" href="/register"> Register</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <section className="text-center my-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Tennis Court Reservation System</h2>
          <p className="text-lg mb-6">Reserve your spot on the court with ease and convenience.</p>
          <img alt="A tennis court" className="mx-auto mb-6" height="400" src="https://storage.googleapis.com/a1aa/image/PthEF5OxvFqzChs4zMg2vlRdPblmo8EPxudIxu4UKQQHoK7E.jpg" width="600" />
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Get Started</button>
        </section>
        <section className="my-8">
          <h3 className="text-2xl font-bold mb-4">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="bg-white p-4 rounded shadow">
              <img alt="A tennis player" className="w-full mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/icrGuKdidIZxABWetrA8MPGI1eaeByoHi774j8FkU0SBBVZnA.jpg" width="300" />
              <h4 className="text-xl font-bold mb-2">New Court Opening</h4>
              <p>We are excited to announce the opening of our new tennis court. Book your slot now!</p>
            </article>
            <article className="bg-white p-4 rounded shadow">
              <img alt="A group of people playing tennis doubles" className="w-full mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/zAgNiUeQnoSzUiBHdW9qQQiFvuMFXTYZZk38alZpCmgPQV2JA.jpg" width="300" />
              <h4 className="text-xl font-bold mb-2">Doubles Tournament</h4>
              <p>Join our upcoming doubles tournament and showcase your skills. Register today!</p>
            </article>
            <article className="bg-white p-4 rounded shadow">
              <img alt="A tennis coach giving instructions" className="w-full mb-4" height="200" src="https://storage.googleapis.com/a1aa/image/SAHplnW4e7STFyv10DZzfukbc84XKXP5hi4z3TFj35gigqsTA.jpg" width="300" />
              <h4 className="text-xl font-bold mb-2">Coaching Sessions</h4>
              <p>Improve your game with our professional coaching sessions. Sign up now!</p>
            </article>
          </div>
        </section>
      </main>
 <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2023 Tennis Court Reservation System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export {Reset};
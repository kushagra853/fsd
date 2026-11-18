import React from 'react'
import Login from './Components/Login'
import Dashboard from './Components/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

    const user = {
        name: "Kushagra",
        email: "dkushagra52@gmail.com",
        password: "654321"
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login user={user} />} />

                    <Route path="/dashboard" element={<Dashboard user={user} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

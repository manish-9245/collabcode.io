import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import './App.css';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

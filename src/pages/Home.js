import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Room ID and username are required');
            return;
        }
        navigate(`/editor/${roomId}`, {
            state: { username },
        });
    };

    const handleInputEnter = (e) => {
        if (e.key === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen p-5 text-white bg-[#071c39] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[750px] h-[750px] bg-gradient-radial filter-custom-blur rounded-custom animate-rotate"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-6xl font-bold mb-4">CollabCode</h1>
                    <p className="text-xl mb-8">Real-time collaborative code editor</p>
                    <p className="text-lg mb-8">Collaborate with your team in real-time, share code, and enhance productivity with our powerful code editor.</p>
                </div>
                <div className="md:w-1/2 w-full max-w-md mx-auto p-5 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center">Join or Create a Room</h2>
                    <input
                        type="text"
                        className="w-full p-3 rounded-md outline-none border-none mb-4 bg-gray-700 text-white font-bold"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyDown={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="w-full p-3 rounded-md outline-none border-none mb-4 bg-gray-700 text-white font-bold"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyDown={handleInputEnter}
                    />
                    <div className="flex space-x-4">
                        <button className="w-1/2 p-3 rounded-md font-bold cursor-pointer transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500" onClick={joinRoom}>
                            Join
                        </button>
                        <button onClick={createNewRoom} className="w-1/2 p-3 rounded-md font-bold cursor-pointer transition-all bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500">
                            Create New Room
                        </button>
                    </div>
                </div>
            </div>
            <footer className="absolute bottom-0 w-full text-center p-4 bg-[#071c39] text-white">
                <p>Made with love <span className="text-red-500">❤️</span> by Manish Tiwari</p>
            </footer>
        </div>
    );
};

export default Home;
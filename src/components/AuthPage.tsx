import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Lock, Mail, UserPlus, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const fromPath = location.state?.from?.pathname || '/clientarea';

    const validateForm = () => {
        setError('');

        if (isLogin) {
            if (!email || !password) {
                setError('Please fill in all fields');
                return false;
            }
        } else {
            if (!email || !username || !password) {
                setError('Please fill in all fields');
                return false;
            }
            if (password.length < 6) {
                setError('Password must be at least 6 characters');
                return false;
            }
        }

        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            // In a real app, you would make API calls to authenticate the user
            // For now, we'll just simulate successful login/signup
            if (isLogin) {
                // Extract username from email if not provided
                const usernameToUse = email.split('@')[0];
                login(usernameToUse);
            } else {
                // For signup, use the provided username
                login(username);
            }

            // Redirect to the page they tried to access or clientarea
            navigate(fromPath, { replace: true });
        } catch (err) {
            setError('Authentication failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">
                        {isLogin ? 'Sign in to your account' : 'Create a new account'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        {isLogin
                            ? 'Access your Client Area and manage your services'
                            : 'Join us and experience top-tier hosting services'}
                    </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
                    {/* Auth type toggle */}
                    <div className="flex border-b border-gray-700 mb-6">
                        <button
                            className={`pb-2 px-4 text-sm font-medium ${isLogin ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}`}
                            onClick={() => setIsLogin(true)}
                        >
                            <LogIn className="h-4 w-4 inline mr-1" />
                            Login
                        </button>
                        <button
                            className={`pb-2 px-4 text-sm font-medium ${!isLogin ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-400 hover:text-gray-300'}`}
                            onClick={() => setIsLogin(false)}
                        >
                            <UserPlus className="h-4 w-4 inline mr-1" />
                            Sign Up
                        </button>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="mb-4 p-2 bg-red-900/30 text-red-400 text-sm rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Username - only for signup */}
                        {!isLogin && (
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1">
                                    Username
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="johndoe"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                {isLogin ? 'Sign in' : 'Sign up'}
                            </button>
                        </div>
                    </form>

                    {/* Alternative action */}
                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-4"
                            onClick={() => {
                                setEmail("test@example.com");
                                setPassword("password123");
                            }}
                        >
                            Use Test Account
                        </button>
                        <p className="text-sm text-gray-400">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                className="font-medium text-purple-500 hover:text-purple-400"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage; 
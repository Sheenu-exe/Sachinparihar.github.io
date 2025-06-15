import { useState } from "react";
import { SignInForm } from "../SignInForm";

interface AuthPageProps {
  onBack: () => void;
}

export function AuthPage({ onBack }: AuthPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 flex-col justify-center px-12">
        <div className="max-w-md">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
              <span className="text-gray-900 font-bold">P</span>
            </div>
            <span className="text-2xl font-semibold text-white">ProductivityHub</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-6">
            Transform your productivity into a game
          </h1>
          
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Earn points for completing tasks</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Level up as you build habits</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Track your progress over time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12">
        <div className="max-w-md mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <span>←</span>
            <span>Back to home</span>
          </button>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-gray-600">
              {isSignUp 
                ? "Start your productivity journey today" 
                : "Sign in to continue your progress"
              }
            </p>
          </div>

          <SignInForm />

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isSignUp 
                ? "Already have an account? Sign in" 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

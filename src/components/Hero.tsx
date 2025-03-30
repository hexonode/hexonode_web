import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Server, Shield } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

const Hero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      alt: "Server Infrastructure"
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      alt: "Gaming Server"
    },
    {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      alt: "Data Center"
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      alt: "Web Hosting"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Use useMemo to prevent particles options from being recreated on every render
  const particlesOptions = useMemo((): ISourceOptions => {
    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false
          }
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
          random: true,
        },
      },
      detectRetina: true,
    };
  }, []);

  // Additional floating shapes configuration
  const floatingShapesOptions = useMemo((): ISourceOptions => {
    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: -1
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#9333ea", "#a855f7", "#c084fc", "#6b21a8"],
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          value: 8,
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        shape: {
          type: ["triangle", "polygon", "circle"],
          options: {
            polygon: {
              sides: 6
            }
          }
        },
        size: {
          value: { min: 15, max: 30 },
          random: true,
        },
        roll: {
          enable: true,
          speed: 3
        },
        wobble: {
          enable: true,
          distance: 30,
          speed: 5
        }
      },
      detectRetina: true,
    };
  }, []);

  return (
    <div className="pt-20 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Star Particles Background */}
      <Particles
        id="tsparticles-stars"
        init={particlesInit}
        className="absolute inset-0"
        options={particlesOptions}
      />

      {/* Floating Glowing Shapes */}
      <Particles
        id="tsparticles-shapes"
        init={particlesInit}
        className="absolute inset-0"
        options={floatingShapesOptions}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200 pb-3 inline-block w-auto">
              Premium Hosting Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Experience lightning-fast Minecraft servers, game hosting, VPS solutions, web hosting,
              Discord bot services, and domain registration. Powered by enterprise hardware and protected
              by advanced DDoS protection.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all transform hover:scale-105">
                View Plans
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center overflow-hidden relative h-[400px] w-full">
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${index === currentImageIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentImageIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg shadow-2xl ring-2 ring-purple-400/20 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Image navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-purple-400' : 'bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
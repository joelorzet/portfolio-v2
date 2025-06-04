import { useEffect, useState } from 'react';
import { data } from '@/config/data';

import { ScrollIndicator } from '@/components/hero/scroll-indicator/ScrollIndicator';
import { CallToAction } from '@/components/hero/call-to-action/CallToAction';
import { Stack } from '@/components/hero/stack/Stack';
import { BackgroundDecoration } from '@/components/hero/decoration/BackgroundDecoration';

import { Badge } from '@/components/shared/badges/Badge';

export function Hero() {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullText = 'Software Developer | Blockchain Enthusiast';

    useEffect(() => {
        if (isTyping) {
            if (text.length < fullText.length) {
                const timeout = setTimeout(() => {
                    setText(fullText.slice(0, text.length + 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setIsTyping(false);
                const timeout = setTimeout(() => {
                    setIsTyping(true);
                    setText('');
                }, 3000);
                return () => clearTimeout(timeout);
            }
        }
    }, [text, isTyping]);

    return (
        <section id="home" className="relative flex flex-col justify-center min-h-screen pt-16 overflow-hidden">
            <BackgroundDecoration />

            <div className="container z-10 px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <Badge text="Available for new projects" color="indigo" />

                    <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                        <span className="block">Hi, I'm {data.name}</span>
                        <div className="h-12 mt-2">
                            <span className="text-indigo-400">{text}</span>
                            <span
                                className={`ml-1 inline-block w-2 h-8 bg-indigo-400 ${
                                    isTyping ? 'animate-blink' : 'opacity-0'
                                }`}
                            ></span>
                        </div>
                    </h1>

                    <p className="max-w-3xl mb-8 text-xl text-slate-300">
                        I build exceptional digital experiences, from responsive frontends to robust backends, with a
                        passion for blockchain solutions and decentralized applications.
                    </p>

                    <CallToAction />

                    <Stack />
                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}

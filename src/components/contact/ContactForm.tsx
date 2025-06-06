import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Loader, Send } from '@/assets/icons';
import { useService } from '@/hooks/useService';
import { Input } from '../shared/inputs/Input';
import { useInView } from 'react-intersection-observer';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: '',
    });

    const { currentService, setCurrentService, handleSendMessage } = useService();

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (currentService) {
            setFormData((prev) => ({
                ...prev,
                subject: currentService.label ? `${currentService.label} Inquiry` : prev.subject,
                message: currentService.callToAction ? currentService.callToAction : prev.message,
            }));
        }
    }, [currentService]);

    useEffect(() => {
        if (!inView) {
            setCurrentService(null);
            setFormData({
                name: '',
                email: '',
                subject: 'Project Inquiry',
                message: '',
            });
        }
    }, [inView, setCurrentService]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{
        type: 'success' | 'error';
        text: string;
    } | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        await handleSendMessage(formData);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage({
                type: 'success',
                text: 'Your message has been sent! I will get back to you soon.',
            });
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitMessage(null);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="p-6 border bg-slate-800/80 backdrop-blur-sm rounded-xl border-slate-700">
            <h3 className="mb-6 text-xl font-semibold" ref={ref}>
                Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        placeholder="Paul Smith"
                        onChange={handleChange}
                    />

                    <Input
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        placeholder="paul@mycompany.com"
                        onChange={handleChange}
                    />
                </div>

                <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    placeholder="Project Inquiry"
                    onChange={handleChange}
                />

                <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium text-slate-300">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 text-white transition-colors border rounded-lg border-slate-600 bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                </div>

                {submitMessage && (
                    <div
                        className={`p-3 rounded-lg ${
                            submitMessage.type === 'success'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                        }`}
                    >
                        {submitMessage.text}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isSubmitting
                            ? 'bg-slate-600 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader className="text-white animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

import { useState, ChangeEvent, FormEvent } from 'react';
import { data } from '@/config/data';
import { Loader, Send } from '@/assets/icons';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{
        type: 'success' | 'error';
        text: string;
    } | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

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
            <h3 className="mb-6 text-xl font-semibold">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-1 text-sm font-medium text-slate-300">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 text-white transition-colors border rounded-lg border-slate-600 bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder={data.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-slate-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 text-white transition-colors border rounded-lg border-slate-600 bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder={data.email}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-1 text-sm font-medium text-slate-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-white transition-colors border rounded-lg border-slate-600 bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Project Inquiry"
                    />
                </div>

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
};

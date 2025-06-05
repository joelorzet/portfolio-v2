import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-2 text-3xl font-bold">Get In Touch</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-indigo-500"></div>
                    <p className="max-w-3xl mx-auto text-slate-300">
                        Have a project in mind or want to explore collaboration opportunities? Feel free to reach out,
                        and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <ContactInfo />
                    </div>
                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Mail, MapPin } from 'lucide-react';
import { data } from '@/config/data';
import { SocialLinks } from '@/components/SocialLinks';
import { useService } from '@/hooks/useService';

export function ContactInfo() {
    const { setCurrentService } = useService();

    const handleCallToAction = () => {
        setCurrentService({
            label: 'Availability for Hire',
            description: 'I am looking for a developer to assist me with my project.',
            callToAction: `Hey Joel, Im Paul and your profile caught my attention. I am looking for a developer to assist me with my project.
                
Do you have some time to talk?`,
        });
    };

    return (
        <div className="space-y-6">
            <div className="p-6 border bg-slate-800/80 backdrop-blur-sm rounded-xl border-slate-700">
                <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>

                <div className="space-y-4">
                    <div className="flex items-start">
                        <div className="p-2 mr-4 rounded-md bg-indigo-500/10">
                            <Mail className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Email</p>
                            <a
                                href={`mailto:${data.email}`}
                                className="transition-colors text-slate-200 hover:text-indigo-400"
                            >
                                {data.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="p-2 mr-4 rounded-md bg-indigo-500/10">
                            <MapPin className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Location</p>
                            <p className="text-slate-200">{data.address}</p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-700">
                    <h4 className="mb-4 text-lg font-medium">Connect with me</h4>
                    <SocialLinks />
                </div>
            </div>

            <div className="p-6 border bg-slate-800/80 backdrop-blur-sm rounded-xl border-slate-700">
                <h3 className="mb-4 text-xl font-semibold">Current Availability</h3>
                <p className="mb-3 text-slate-300">
                    If you're interested in my profile or have a project idea in mind, feel free to reach out. I'm
                    always open to connecting and exploring new opportunities together.
                </p>
                <div className="inline-flex items-center justify-center p-2 transition-all duration-300 rounded-full bg-green-500/10 hover:scale-105">
                    <button onClick={handleCallToAction} className="px-4 text-sm font-medium text-green-400">
                        Let’s talk →
                    </button>
                </div>
            </div>
        </div>
    );
}

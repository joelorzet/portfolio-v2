import { Award, Briefcase } from '@/assets/icons';
import { data } from '@/config/data';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-12 md:flex-row">
                    {/* Photo/Image area */}
                    <div className="flex justify-center w-full md:w-2/5">
                        <div className="relative">
                            <div className="w-64 h-64 p-1 overflow-hidden border-4 border-indigo-500 rounded-full sm:w-80 sm:h-80">
                                <div className="w-full h-full overflow-hidden rounded-full">
                                    <img
                                        src={data.profilePicture}
                                        alt="Profile"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute w-24 h-24 rounded-full -top-4 -right-4 bg-blue-500/20 blur-xl"></div>
                            <div className="absolute w-24 h-24 rounded-full -bottom-4 -left-4 bg-indigo-500/20 blur-xl"></div>
                        </div>
                    </div>

                    {/* Content area */}
                    <div className="w-full md:w-3/5">
                        <h2 className="mb-2 text-3xl font-bold">About Me</h2>
                        <div className="w-20 h-1 mb-6 bg-indigo-500"></div>

                        <p className="mb-6 text-slate-300">
                            I'm a versatile software developer with extensive experience in both frontend and backend
                            technologies. My journey started with traditional web applications using React and Angular
                            on the frontend, paired with NestJS for robust backend solutions.
                        </p>

                        <p className="mb-6 text-slate-300">
                            In recent years, I've shifted my focus to blockchain technologies, building decentralized
                            applications with Stellar and Ethereum. Currently, I'm expanding my expertise by studying
                            Aptos blockchain development.
                        </p>

                        <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-3">
                            <div className="flex flex-col items-center p-4 transition-colors rounded-lg bg-slate-700/50 hover:bg-slate-700">
                                <Briefcase className="w-10 h-10 mb-2 text-indigo-400" />
                                <h3 className="text-lg font-semibold">Experience</h3>
                                <p className="text-sm text-center text-slate-300">3+ Years</p>
                            </div>

                            <div className="flex flex-col items-center p-4 transition-colors rounded-lg bg-slate-700/50 hover:bg-slate-700">
                                <Award className="w-10 h-10 mb-2 text-indigo-400" />
                                <h3 className="text-lg font-semibold">Projects</h3>
                                <p className="text-sm text-center text-slate-300">10+ Completed</p>
                                <p className="text-sm text-center text-slate-300">4+ Successfully Mentored</p>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                        >
                            Let's Work Together
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

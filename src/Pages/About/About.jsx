

const About = () => {
    return (
        <div className="  flex items-center justify-center">

            <div className="max-w-3xl p-8  rounded-md ">
                <h1 className=" text-2xl md:text-4xl text-emerald-500 font-bold mb-6">About Our ToDo App</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Mission</h2>
                    <p className="text-gray-700">
                        Our mission is to provide you with a user-friendly, intuitive, and feature-rich platform to manage your tasks efficiently. We understand the importance of staying organized in todays fast-paced world, and our ToDo App is designed to make that process seamless and enjoyable.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Features</h2>
                    <ul className="list-disc pl-6">
                        <li>Task Management: Easily create, edit, and delete tasks with a few clicks. Stay in control of your to-do list and prioritize tasks based on your needs.</li>
                        <li>Task Status Toggle: Mark tasks as completed or incomplete with a simple toggle. Keep track of your progress effortlessly.</li>
                        <li>Task Editing: Need to make changes to a task? No problem! Edit task titles and descriptions on the go.</li>
                        <li>Priority Filtering: Filter tasks based on priority levels. Focus on what matters most at any given time.</li>
                        <li>Local Storage Persistence: Your tasks are important, and we understand that. Our app uses local storage to ensure your tasks persist even if you refresh the page.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">How to Use</h2>
                    <p className="text-gray-700">
                        Getting started is easy! Create an account, add your tasks, and start organizing your day. Use the intuitive features to tailor your task management experience to suit your unique needs.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        Have questions, feedback, or suggestions? We would love to hear from you! Reach out to our support team at <a href="mailto:support@example.com" className="text-blue-500 underline">mdraselkhan199811@gmail.com</a>.
                    </p>
                </section>

                <p className="text-gray-700">
                    Thank you for choosing our ToDo App. We hope it becomes your go-to tool for managing tasks and staying productive.
                </p>


            </div>

        </div>
    );
};

export default About;
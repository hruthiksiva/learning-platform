const StudentProfileCard = ({ profile }) => {
return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <img
        src={profile.user.profilePicture || 'https://via.placeholder.com/150'}
        alt={profile.user.firstName}
        className="w-32 h-32 rounded-full"
        />
        <div>
        <h2 className="text-2xl font-bold text-gray-800">
            {profile.user.firstName} {profile.user.lastName}
        </h2>
        <p className="text-blue-600">{profile.user.email}</p>
        </div>
    </div>
    <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Jobs Posted</h3>
        {profile.jobsPosted.length > 0 ? (
        <ul className="space-y-2">
            {profile.jobsPosted.map((job) => (
            <li key={job._id} className="border p-4 rounded-md">
                <h4 className="font-semibold">{job.title}</h4>
                <p className="text-gray-600">{job.description}</p>
            </li>
            ))}
        </ul>
        ) : (
        <p className="text-gray-600">No jobs posted yet.</p>
        )}
    </div>
    <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Reviews</h3>
        <p className="text-gray-600">Coming soon...</p> {/* Placeholder */}
    </div>
    </div>
);
};

export default StudentProfileCard;
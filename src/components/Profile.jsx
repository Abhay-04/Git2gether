import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";

const Profile = () => {
  const user = useSelector((store) => store.user);
  const [message, setMessage] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState(user?.skills || []);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const age = useRef(null);
  const gender = useRef(null);
  const email = useRef(null);
  const photoURL = useRef(null);
  const about = useRef(null);

  console.log(selectedSkills);

  // const [manualSkill, setManualSkill] = useState("");
  const skillsOptions = [
    // Frontend Development
    "React.js",
    "Next.js",
    "Vue.js",
    "Angular",
    "Svelte",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Sass/SCSS",
    "Webpack",

    // Backend Development
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "Spring Boot",
    "Ruby on Rails",
    "Laravel",
    "FastAPI",
    "Koa.js",

    // Database Management
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Redis",
    "SQLite",
    "Cassandra",
    "DynamoDB",
    "Supabase",
    "Neo4j",

    // DevOps & Cloud
    "Docker",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "Azure",
    "Terraform",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Ansible",

    // Programming Languages
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
    "PHP",
  ];

  const handleUpdateProfile = async () => {
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          age: age.current.value,
          gender: gender.current.value.toLowerCase(),
          photoURL: photoURL.current.value,
          about: about.current.value,
          skills: selectedSkills,
        },
        { withCredentials: true }
      );
      console.log(res);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (error) {
      console.log(setMessage(error));
    }
  };

  const addSkill = (skill) => {
    if (!selectedSkills?.includes(skill) && selectedSkills?.length < 10) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills?.filter((s) => s !== skill));
  };

  useEffect(() => {
    if (user?.skills) {
      setSelectedSkills(user?.skills);
    }
  }, [user?.skills]);

  return (
    user && (
      <div className="flex justify-center items-center pt-20 pb-40">
        <div className="card bg-base-100 w-[50vw] shadow-xl ">
          <div className="card-body flex gap-y-8">
            <div className="grid grid-cols-12">
              <div className="col-span-10 flex flex-col gap-1">
                <h1 className="text-xl font-bold">Your Profile</h1>
                <p className="text-xs ">
                  Last Update on{" "}
                  <span className="font-semibold">
                    {new Date(user.updatedAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>
              </div>
              <div className="col-span-2 flex gap-x-3">
                <button className="btn btn-sm btn-outline">Discard</button>
                <button
                  onClick={() => handleUpdateProfile()}
                  className="btn btn-sm btn-active btn-primary"
                >
                  <i className="ri-save-2-fill "></i> Save
                </button>
              </div>
            </div>
            <div>
              <h1 className=" font-semibold">Profile picture</h1>
              <div className="flex gap-x-6 mt-6">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img ref={photoURL} src={user.photoURL} />
                  </div>
                </div>
                <div className="col-span-2 flex gap-y-2 flex-col justify-center items-center gap-x-3">
                  <div className="flex gap-2">
                    <button className="btn btn-sm btn-active btn-primary">
                      Change picture
                    </button>
                    <button className="btn btn-sm btn-outline btn-error">
                      Delete picture
                    </button>
                  </div>

                  <input
                    ref={photoURL}
                    defaultValue={user.photoURL}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className=" font-semibold">
                <i className="ri-user-3-fill mr-2"></i>Personal Information
              </h1>
              <div className="grid grid-cols-12 gap-6 mt-6">
                <label className="form-control w-full max-w-xs col-span-4">
                  <div className="label">
                    <span className="label-text  font-semibold">
                      First Name
                    </span>
                  </div>
                  <input
                    ref={firstName}
                    defaultValue={user.firstName}
                    type="text"
                    placeholder="Joe"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs col-span-4">
                  <div className="label">
                    <span className="label-text font-semibold">Last Name</span>
                  </div>
                  <input
                    ref={lastName}
                    defaultValue={user?.lastName}
                    type="text"
                    placeholder="Smith"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs col-span-4">
                  <div className="label">
                    <span className="label-text font-semibold">Email</span>
                  </div>
                  <input
                    ref={email}
                    defaultValue={user.email}
                    disabled
                    type="email"
                    placeholder="m@example.com"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs col-span-4">
                  <div className="label">
                    <span className="label-text font-semibold">Age</span>
                  </div>
                  <input
                    ref={age}
                    defaultValue={user?.age}
                    type="number"
                    min={18}
                    max={100}
                    placeholder="24"
                    className="input input-bordered w-full max-w-xs"
                    onInput={(e) => {
                      if (e.target.value < 18) e.target.value = 18;
                      if (e.target.value > 100) e.target.value = 100;
                    }}
                  />
                </label>

                <label className="form-control w-full max-w-xs col-span-4">
                  <div className="label">
                    <span className="label-text font-semibold">Gender</span>
                  </div>
                  <select
                    ref={gender}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled selected>
                      {user?.gender?.toUpperCase()}
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>

                <label className="form-control col-span-12">
                  <div className="label">
                    <span className="label-text font-semibold">Your bio</span>
                  </div>
                  <textarea
                    ref={about}
                    defaultValue={user?.about}
                    className="textarea textarea-bordered h-24 max-h-24"
                    placeholder="Bio"
                  ></textarea>
                </label>
                <div className="w-full max-full col-span-12">
                  <label className="form-control w-full">
                    <div className="label ">
                      <span className="label-text">Add Skills</span>
                    </div>

                    {/* Select Dropdown */}
                    <select
                      className="select select-bordered mt-2"
                      onChange={(e) => addSkill(e?.target?.value)}
                      disabled={selectedSkills?.length >= 10}
                    >
                      <option disabled selected>
                        Select any 10 skills
                      </option>

                      {skillsOptions?.map((skill) => (
                        <option
                          key={skill}
                          value={skill}
                          disabled={selectedSkills?.includes(skill)}
                        >
                          {skill}
                        </option>
                      ))}
                    </select>
                    {/* Selected Skills */}
                    {selectedSkills.length > 0 && (
                      <div className="flex flex-wrap gap-2  p-2 rounded-md mt-5 min-h-[40px]">
                        {selectedSkills?.map((skill) => (
                          <button
                            key={skill}
                            className="badge badge-primary p-4  flex items-center gap-1"
                            onClick={() => removeSkill(skill)}
                          >
                            {skill} ✕
                          </button>
                        ))}
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
            {message && (
              <div className="toast toast-end">
                <div className="alert alert-success">
                  <span className="text-white">{message.toUpperCase()}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;

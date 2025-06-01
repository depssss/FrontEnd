import React, { useState } from "react";

function ProfilSetting() {
  const [profile, setProfile] = useState({
    fullName: "Ni Wayan Rini Kurniati",
    gender: "Female",
    birthDay: "2",
    birthMonth: "Feb",
    birthYear: "2005",
    city: "Balikpapan Regency",
    emailList: ["niwayanrinik@gmail.com"],
    mobileNumbers: []
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleAddEmail = () => {
    if (newEmail && profile.emailList.length < 3) {
      setProfile({ ...profile, emailList: [...profile.emailList, newEmail] });
      setNewEmail("");
    }
  };

  const handleAddMobileNumber = () => {
    if (newMobile && profile.mobileNumbers.length < 3) {
      setProfile({ ...profile, mobileNumbers: [...profile.mobileNumbers, newMobile] });
      setNewMobile("");
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // di sini bisa ditambahkan logic untuk menyimpan ke database
    alert("Data berhasil disimpan!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="text-gray-600 mb-6">Account Information</p>

      <div className="bg-white p-6 shadow rounded">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Personal Data</h3>
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            className="border rounded w-full p-2 mt-1"
            readOnly={!isEditing}
          />
          <p className="text-sm text-gray-500 mt-1">
            Your full name will also appear as your profile name
          </p>
        </div>

        {/* Gender & Birthdate */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block font-medium">Gender</label>
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="border rounded w-full p-2 mt-1"
              readOnly={!isEditing}
            />
          </div>

          <div className="w-1/2">
            <label className="block font-medium">Birthdate</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="birthDay"
                value={profile.birthDay}
                onChange={handleChange}
                className="border rounded p-2 w-1/4"
                readOnly={!isEditing}
              />
              <input
                type="text"
                name="birthMonth"
                value={profile.birthMonth}
                onChange={handleChange}
                className="border rounded p-2 w-1/4"
                readOnly={!isEditing}
              />
              <input
                type="text"
                name="birthYear"
                value={profile.birthYear}
                onChange={handleChange}
                className="border rounded p-2 w-1/2"
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block font-medium">City of Residence</label>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            className="border rounded w-full p-2 mt-1"
            readOnly={!isEditing}
          />
        </div>

        {/* Emails */}
        <div className="mb-4">
          <label className="block font-medium">Email</label>
          <p className="text-sm text-gray-500">You may use up to 3 email(s)</p>
          <ul className="list-decimal ml-5 mt-2">
            {profile.emailList.map((email, index) => (
              <li key={index}>
                <span className="font-medium">{email}</span>{" "}
                {index === 0 && <span className="text-green-600">Recipient for notifications</span>}
              </li>
            ))}
          </ul>
          {isEditing && (
            <div className="flex mt-2 gap-2">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Email baru"
                className="border rounded p-2 flex-1"
              />
              <button
                onClick={handleAddEmail}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm"
              >
                + Add Email
              </button>
            </div>
          )}
        </div>

        {/* Mobile Numbers */}
        <div className="mb-2">
          <label className="block font-medium">Mobile Number</label>
          <p className="text-sm text-gray-500">You may use up to 3 mobile number(s)</p>
          <ul className="list-decimal ml-5 mt-2">
            {profile.mobileNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
          {isEditing && (
            <div className="flex mt-2 gap-2">
              <input
                type="text"
                value={newMobile}
                onChange={(e) => setNewMobile(e.target.value)}
                placeholder="Nomor baru"
                className="border rounded p-2 flex-1"
              />
              <button
                onClick={handleAddMobileNumber}
                className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm"
              >
                + Add Number
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilSetting;

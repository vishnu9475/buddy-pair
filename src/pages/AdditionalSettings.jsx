import { Search } from "lucide-react";
import { useState } from "react";
import RangeSlider from "../comp_sravan/RangeSlider";
import SelectField from "../comp_sravan/SelectField";
import TagInput from "../comp_sravan/TagInput";

const AdditionalSettings = () => {
   const [ageRange, setAgeRange] = useState([18, 35]);
   const [heightRange, setHeightRange] = useState([100, 220]);
   const [weightRange, setWeightRange] = useState([40, 150]);

   const [gender, setGender] = useState("");
   const [relationshipGoal, setRelationshipGoal] = useState("");
   const [educationLevel, setEducationLevel] = useState("");
   const [lifestyleChoices, setLifestyleChoices] = useState("");
   const [religion, setReligion] = useState("");
   const [occupation, setOccupation] = useState("");

   const [locations, setLocations] = useState(["Kochi", "Kollam", "Aluva"]);
   const [hobbies, setHobbies] = useState(["yoga", "travel", "reading"]);

   const removeLocation = (loc) =>
      setLocations(locations.filter((location) => location !== loc));

   const addLocation = (loc) => setLocations([...locations, loc]);

   const removeHobby = (hobby) =>
      setHobbies(hobbies.filter((item) => item !== hobby));

   const addHobby = (hobby) => setHobbies([...hobbies, hobby]);

   return (
      <>
         <style>{`
        .range-slider-thumb::-webkit-slider-runnable-track {
          height: 24px;
          background: transparent;
        }

        .range-slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: #2f2f2f;
          border: 0;
          cursor: pointer;
          margin-top: 4px;
        }

        .range-slider-thumb::-moz-range-track {
          height: 24px;
          background: transparent;
        }

        .range-slider-thumb::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: #2f2f2f;
          border: 0;
          cursor: pointer;
        }

        select option {
          color: #374151;
        }
      `}</style>

         <div className="min-h-screen bg-[#4b0f4d]">
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-5 sm:px-6 md:px-8">
               <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm">
                  <Search size={18} className="text-white" />
               </div>

               <h1 className="text-lg font-semibold tracking-wide text-white sm:text-xl">
                  Privacy & Settings
               </h1>
            </div>

            {/* Page Container */}
            <div className="mx-auto w-full max-w-6xl px-0 py-2 sm:px-6 md:px-8 lg:px-10">
               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="px-10 py-6 sm:px-6 md:px-8 lg:px-10 bg-[#efefef]">
                     <h2 className="text-center text-lg md:text-xl font-bold text-gray-800 mb-6 tracking-tight">
                        Partner Preference
                     </h2>

                     {/* Responsive 2-column layout */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-10 font-sans">
                        {/* LEFT COLUMN */}
                        <div>
                           <RangeSlider
                              label="Age"
                              min={18}
                              max={80}
                              value={ageRange}
                              onChange={setAgeRange}
                              unit=""
                           />

                           <SelectField
                              label="Gender"
                              options={[
                                 "Male",
                                 "Female",
                                 "Non-binary",
                                 "Other",
                              ]}
                              value={gender}
                              onChange={setGender}
                           />

                           <TagInput
                              label="Locations"
                              tags={locations}
                              onRemove={removeLocation}
                              onAdd={addLocation}
                              type="location"
                              suggestions={[
                                 "Mumbai",
                                 "Delhi",
                                 "Bangalore",
                                 "Chennai",
                                 "Hyderabad",
                                 "Pune",
                                 "Kochi",
                                 "Kollam",
                                 "Aluva",
                                 "Thrissur",
                                 "Calicut",
                              ]}
                           />

                           <TagInput
                              label="Interest & Hobbies"
                              tags={hobbies}
                              onRemove={removeHobby}
                              onAdd={addHobby}
                              type="hobby"
                              suggestions={[
                                 "yoga",
                                 "travel",
                                 "reading",
                                 "cooking",
                                 "jazz",
                                 "gaming",
                                 "music",
                                 "art",
                                 "hiking",
                                 "photography",
                                 "dancing",
                                 "fitness",
                              ]}
                           />

                           <SelectField
                              label="Relationship Goals"
                              options={[
                                 "Casual dating",
                                 "Long-term relationship",
                                 "Marriage",
                                 "Friendship",
                                 "Open relationship",
                              ]}
                              value={relationshipGoal}
                              onChange={setRelationshipGoal}
                           />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div>
                           <SelectField
                              label="Education Level"
                              options={[
                                 "High School",
                                 "Diploma",
                                 "Bachelor's",
                                 "Master's",
                                 "PhD",
                                 "Other",
                              ]}
                              value={educationLevel}
                              onChange={setEducationLevel}
                           />

                           <RangeSlider
                              label="Height"
                              min={100}
                              max={220}
                              value={heightRange}
                              onChange={setHeightRange}
                              unit="cm "
                           />

                           <RangeSlider
                              label="Weight"
                              min={40}
                              max={150}
                              value={weightRange}
                              onChange={setWeightRange}
                              unit="kg "
                           />

                           <SelectField
                              label="Lifestyle Choices"
                              options={[
                                 "Active",
                                 "Homebody",
                                 "Social butterfly",
                                 "Adventurous",
                                 "Spiritual",
                              ]}
                              value={lifestyleChoices}
                              onChange={setLifestyleChoices}
                           />

                           <SelectField
                              label="Religion"
                              options={[
                                 "Hindu",
                                 "Muslim",
                                 "Christian",
                                 "Sikh",
                                 "Buddhist",
                                 "Jain",
                                 "Atheist",
                                 "Other",
                              ]}
                              value={religion}
                              onChange={setReligion}
                           />

                           <SelectField
                              label="Occupation"
                              options={[
                                 "Student",
                                 "Engineer",
                                 "Doctor",
                                 "Teacher",
                                 "Artist",
                                 "Entrepreneur",
                                 "Other",
                              ]}
                              value={occupation}
                              onChange={setOccupation}
                           />
                        </div>
                     </div>

                     {/* Save Button */}
                     <div className="flex justify-center mt-4">
                        <button
                           type="button"
                           className="w-full sm:w-[70%] md:w-[45%] lg:w-[32%] bg-[#4b0f4d] text-white font-semibold text-sm rounded-2xl py-3 shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                        >
                           Save Preferences
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AdditionalSettings;

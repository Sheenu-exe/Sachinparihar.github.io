import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";
import { useDarkMode } from "../hooks/useDarkMode";

export function Profile() {
  const { isDark } = useDarkMode();
  const profile = useQuery(api.profiles.getUserProfile);
  const updateProfile = useMutation(api.profiles.updateProfile);
  const generateUploadUrl = useMutation(api.profiles.generateUploadUrl);
  const updateAvatar = useMutation(api.profiles.updateAvatar);
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    bio: "",
  });
  const [uploading, setUploading] = useState(false);

  const handleEdit = () => {
    if (profile) {
      setFormData({
        displayName: profile.displayName || "",
        bio: profile.bio || "",
      });
    }
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      setIsEditing(false);
      toast.success("Profile updated!");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!result.ok) {
        throw new Error("Upload failed");
      }

      const { storageId } = await result.json();
      await updateAvatar({ storageId });
      toast.success("Avatar updated!");
    } catch (error) {
      toast.error("Failed to upload avatar");
    } finally {
      setUploading(false);
    }
  };

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className={`animate-spin rounded-full h-8 w-8 border-b-2 ${
          isDark ? 'border-gray-100' : 'border-gray-900'
        }`}></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          Profile
        </h1>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Card */}
      <div className={`rounded-lg border p-6 transition-colors duration-200 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <div className="relative">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold transition-colors duration-200 ${
              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}>
              {profile.avatarUrl ? (
                <img 
                  src={profile.avatarUrl} 
                  alt="Avatar" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                profile.displayName?.charAt(0)?.toUpperCase() || "U"
              )}
            </div>
            <label className={`absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 ${
              isDark ? 'bg-gray-600 hover:bg-gray-500 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            }`}>
              <span className="text-sm">📷</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            {!isEditing ? (
              <div className="space-y-3">
                <div>
                  <h2 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    {profile.displayName || "Anonymous User"}
                  </h2>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    @{profile.warriorName}
                  </p>
                </div>
                {profile.bio && (
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {profile.bio}
                  </p>
                )}
                <div className="flex items-center space-x-4 text-sm">
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Joined {profile.joinedAt ? new Date(profile.joinedAt).toLocaleDateString() : 'Unknown'}
                  </span>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Level {profile.level}
                  </span>
                </div>
                <button
                  onClick={handleEdit}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isDark 
                      ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-md transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDark ? 'focus:ring-gray-400' : 'focus:ring-gray-900'
                    }`}
                    placeholder="Enter your display name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className={`w-full px-3 py-2 border rounded-md h-20 resize-none transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDark ? 'focus:ring-gray-400' : 'focus:ring-gray-900'
                    }`}
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isDark 
                        ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isDark 
                        ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className={`rounded-lg border p-6 transition-colors duration-200 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          Your Stats
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {profile.totalPoints}
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Points
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {profile.level}
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Current Level
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {profile.todosCompleted}
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Tasks Done
            </div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              {profile.streak}
            </div>
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Day Streak
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

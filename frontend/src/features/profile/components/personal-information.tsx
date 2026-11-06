"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PencilIcon } from "@/icons";
import { cn } from "@/utils";
import { useState , useEffect } from "react";
import EditPersonalInfoDialog from "./edit-dialog";
import InfoField from "./info-field";
import SocialLinks from "./social-links";   
import { ProfileResponse} from "../types";

export default function GetDataProfile(){
  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [profileData, setProfileData] = useState<any>(null)
  const userId = 4 ;
  useEffect(()=>{
    const GetProfile = async () =>{
      try{
        const response = await fetch (
          `${process.env.NEXT_PUBLIC_API_URL}/users/profile/${userId}`
        );
        if (!response.ok){
          throw new Error("Gagal Mengambil Data Profile")
        }
        const data = await response.json();
        setProfile(data);
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    GetProfile();
  }, [userId]); // ini namanya dependency array, digunakan untuk render ulang ketika userId berubah 



  if (loading) return <p>Loading profile...</p>;

  if (!profile) return <p>Profile tidak ditemukan</p>;
  const initialLetter = profile.first_name?.trim()
    ? profile.first_name.trim()[0].toUpperCase()
    : profile.first_name.trim()[0].toUpperCase();
  return( 
    <>
      <Card  
          className={cn(
            "relative overflow-hidden border border-gray-200 p-5 sm:p-6 lg:p-7 dark:border-gray-700"
          )}
        >
          {/* Top Header Row: Title & Edit Button */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-white/90">
              Personal Information User
            </h2>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsDialogOpen(true)}
              className="h-9 gap-2 px-3.5"
            >
              <PencilIcon className="size-4.5" />
              <span>Edit</span>
            </Button>
          </div>

          {/* Profile Pic & Basic Meta */}
          <div className="mt-2 flex items-center gap-4 sm:gap-6">
            <Avatar className="size-16 shrink-0 sm:size-20">
              <AvatarImage
                src={"/images/user/user-01.jpg"}
                alt={"User profile"}
              />
              <AvatarFallback className="bg-brand-400 text-xl font-medium text-white sm:text-2xl dark:bg-brand-400 dark:text-white">
                {initialLetter}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-gray-800 sm:text-lg dark:text-white/90">
                {profile.first_name}
              </h3>

              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                <span>{profile.bio}</span>
                <span className="inline-block h-3.5 w-px bg-gray-300 dark:bg-gray-700" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>

          {/* Details & Social Links Grid */}
          <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-6">
              <InfoField label="First Name" value={profile.first_name} />
              <InfoField label="Email address" value="" />
            </div>

            <div className="flex flex-col gap-6">
              <InfoField label="Last Name" value={profile.last_name} />
              <InfoField label="Phone" value={profile.phone} />
            </div>

            <div className="flex flex-col gap-6">
              <InfoField label="Bio" value={profile.bio} />
            </div>

            <div className="flex flex-col gap-6">
              { <SocialLinks socialLinks={profile} /> }
            </div>
          </div>
      </Card>
      {/* Edit Personal Information Dialog */}
       { <EditPersonalInfoDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        initialData={profile}
        onSave={setProfile}
        /> }  
    </>
  );
}

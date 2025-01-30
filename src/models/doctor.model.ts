export type DoctorModel = {
  id?: string;
  city?: string;
  name?: string;
  image?: string;
  gender?: "آقا" | "خانم";
  averageRating: string | number;
  isVerified: boolean;
  degree?: string;
  address?: string;
  badges?: string[];
  totalVotes: number;
  firstAvailableAppointment: string;
  brief: string;
  expertise: string;
};

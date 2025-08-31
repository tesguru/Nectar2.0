import { LoginFormData, SignUpFormData} from "../types/index";
import { supabase } from "@/supabase/supabase";

// Login User Data
export const loginData = async (userdata: LoginFormData) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", userdata.email)
    .eq("password", userdata.password);

  console.log("Response from Supabase:", { data, error });

  if (error) {
    throw new Error(error.message); 
  }

  if (!data || data.length === 0) {
    throw new Error("Incorrect email or password."); 
  }

  return { data: data[0], error: null };
};

export const createUser = async (userdata: SignUpFormData) => {

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        email: userdata.email,
        password: userdata.password, 
        username: userdata.username, 
      },
    ])
    .select(); 

  console.log("Response from Supabase (Insert):", { data, error });

  if (error) {
    throw new Error(error.message); 
  }

  if (!data || data.length === 0) {
    throw new Error("User could not be created.");
  }
  return { data: data[0], error: null };
};




import { LoginFormData, SignUpFormData, SignUpFormSchema } from "../types/index";
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
    throw new Error(error.message); // Ensure it's a string
  }

  if (!data || data.length === 0) {
    throw new Error("Incorrect email or password."); // Throw an Error object
  }

  return { data: data[0], error: null };
};

export const createUser = async (userdata: SignUpFormData) => {
  // Insert a new user record into the "users" table.
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        email: userdata.email,
        password: userdata.password, // In production, ensure you hash passwords.
        username: userdata.username, // Insert username as well.
      },
    ])
    .select(); // Use .select() to return the inserted record.

  console.log("Response from Supabase (Insert):", { data, error });

  if (error) {
    throw new Error(error.message); // Convert the error to a string message.
  }

  if (!data || data.length === 0) {
    throw new Error("User could not be created.");
  }

  // Return the first inserted record (assuming single user insertion).
  return { data: data[0], error: null };
};




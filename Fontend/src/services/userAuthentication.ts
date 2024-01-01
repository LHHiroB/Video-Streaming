import { useNavigate } from "react-router-dom";
import supabase from "../config/supabase/supabase";
export const signUpUserWithSupabase = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    if (data) {
      window.localStorage.setItem("chatapp_currentUser", JSON.stringify(data));
      //  TODO: Add user to database with name "Person"
    }
    console.log("user signed up successfully:", data);
  } catch (error) {
    console.log("error signing up:", error);
  }
};

export const loginUserWithSupabase = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data) {
      window.localStorage.setItem("chatapp_currentUser", JSON.stringify(data));
    }
  } catch (error) {
    console.log("error logging in:", error);
  }
};

export const logoutUserWithSupabase = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.log("error logging out:", error);
  }
};


import { useMutation } from "@tanstack/react-query";
import { handleApiSuccess, handleApiError } from "../api/apiResponse";

export const useApiMutation = <TData, TVariables>(
  mutationFn: (data: TVariables) => Promise<{ data: TData | null; error: any }>,
  successMessage?: string
) => {

  return useMutation({
    mutationFn,
    onSuccess: ({ data, error }) => {
      console.log("Supabase API response:", { data, error });
      console.log(error);
      if (error) {
        handleApiError(error);
      } else {
        handleApiSuccess("Successful");
      }
    },
    onError: (error: any) => {
      console.log("API error:", error); // Log full error response
      handleApiError(error);
    },
  });
};

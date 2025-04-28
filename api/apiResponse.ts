import useToast from "@/hooks/usetoast";

const {showError, showSuccess, showWarning} = useToast();

export const handleApiSuccess = (data: any) => {
    const message = typeof data === "string" ? data : JSON.stringify(data) || "Request Successful";
    showSuccess(message);
};

export const handleApiError = (data: any) => {
    const message = data instanceof Error ? data.message : String(data) || "Request Unsuccessful";
    showError(message);
};

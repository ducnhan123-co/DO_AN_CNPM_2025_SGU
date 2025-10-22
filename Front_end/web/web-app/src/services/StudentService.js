import { API_URL } from "./api";
import { getToken } from "./LocalStorageService";

export async function getStudents() {
  try {
    const token = getToken();
    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }

    const response = await fetch(`${API_URL}/student`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },
    });

    if (!response.ok) {
      // Nếu token hết hạn hoặc lỗi
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to get all student");
    }

    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Error fetching current user:", error);
    return null; // trả về null nếu có lỗi
  }
}

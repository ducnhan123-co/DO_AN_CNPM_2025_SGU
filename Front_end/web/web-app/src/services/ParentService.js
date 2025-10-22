import { API_URL } from "./api";
import { getToken } from "./LocalStorageService";

export async function fetchCurrentParent() {
  try {
    const token = getToken();
    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }

    const response = await fetch(`${API_URL}/parent/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // gửi token trong header
      },
    });

    if (!response.ok) {
      // Nếu token hết hạn hoặc lỗi
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to fetch user info");
    }

    const data = await response.json();
    return data; // trả về thông tin người dùng

  } catch (error) {
    console.error("Error fetching current user:", error);
    return null; // trả về null nếu có lỗi
  }
}

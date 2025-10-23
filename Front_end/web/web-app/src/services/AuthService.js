import { setToken } from "./LocalStorageService";
import { API_BASE_URL } from "./api";

export async function login(username, password) {
    const response = await fetch(
      `${API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            userName: username.trim(),
            password: password.trim()
          }
        ),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Login failed");
    }

    const { data } = await response.json();
    if (data?.result) {
      setToken(data.result);
      return true;
    }

    return false;
}

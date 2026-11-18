async function guestLogin() {
    setError(false, "error_login");

    const response = await postData(
        LOGIN_URL,
        GUEST_LOGIN,
        DEMO_API_BASE_URL,
    );

    if (!response.ok) {
        setError(true, "error_login");
        return;
    }

    setAuthCredentials(
        response.data.token,
        response.data.user_id,
        response.data.email,
        response.data.fullname,
        true,
    );

    window.location.href = "../dashboard/index.html";
}
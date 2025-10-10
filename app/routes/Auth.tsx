import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { usePuterStore } from "~/lib/puter";
function Auth() {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const next = location.search.split("next=")[1];

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  },[auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('images/bg-auth.svg')] bg-cover bg-no-repeat flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log in to continue your job journey.</h2>

            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in ....</p>
              </button>
            ) : !auth.isAuthenticated ? (
              <button className="auth-button " onClick={auth.signIn}>
                <p>Sign In</p>
              </button>
            ) : (
              <button className="auth-button" onClick={auth.signOut}>
                <p>Sign Out</p>
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
export default Auth;

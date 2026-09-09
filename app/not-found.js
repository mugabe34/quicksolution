import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <EmptyState
          title="We can't find that page"
          message="The link may be broken, or the page may have moved. Let's get you back to something useful."
          actionHref="/"
          actionLabel="Back to homepage"
        />
      </main>
      <Footer />
    </>
  );
}

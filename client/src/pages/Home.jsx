import Navbar from '../components/Navigationbar'; // Ensure the import path is correct
import styles from './pageStyle/home.module.css'; // Ensure CSS module path
import pandaImage from '../assets/Panda1.png'; // Import the image


const Home = () => {
  return (
    <>
      <div>
        <Navbar />

        {/* Main Content Section */}
        <main className={styles.content}>
          <h2>Welcome to</h2>
          <h1>Do Your F'n Work!</h1>

          {/* Overlay Container */}
          <div className={styles.overlayContainer}>
            <img
              src={pandaImage}
              alt="Sleeping panda"
              className={styles.overlayImage}
            />
          </div>

          <p>A productivity tool to keep you focused and on track.</p>
          <p>Log in or register to start crushing your tasks!</p>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>calhacks '24 yippee</footer>
      </div>
    </>
  );
};

export default Home;
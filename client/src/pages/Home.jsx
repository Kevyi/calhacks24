import Navbar from '../components/Navigationbar'; 
import styles from './pageStyle/home.module.css'; 
import pandaImage from '../assets/Panda1.png'; 
import pandaImage2 from '../assets/Panda2.png';  // Import new image

const Home = () => {
  return (
    <>
      <div>

        <main className={styles.content}>
          <div className={styles.overlayContainer}>
            <img
              src={pandaImage}
              alt="Sleeping panda"
              className={styles.overlayImage}
            />
          </div>

          {/* New Image Overlay */}
          <div className={styles.overlayContainer}>
            <img
              src={pandaImage2}
              alt="New Overlay Image"
              className={styles.overlayImage}
            />
          </div>

          <h2>Welcome to</h2>
          <h1>Do Your F'n Work!</h1>
          <p>A productivity tool to keep you focused and on track.</p>
          <p>Log in or register to start crushing your tasks!</p>
        </main>

        <footer className={styles.footer}>calhacks '24 yippee</footer>
      </div>
    </>
  );
};

export default Home;
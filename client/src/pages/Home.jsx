import Navbar from '../components/Navigationbar'; 
import styles from './pageStyle/home.module.css'; 
import pandaImage from '../assets/Panda1.png'; 
import pandaImage2 from '../assets/Panda2.png';  // Import new image
import Navbar1 from '../components/Navigationbar'; 

const Home = () => {
  return (
    <>
    <Navbar1></Navbar1>
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
          <p style={{marginBottom : "30px"}}>Log in or register to start crushing your tasks!</p>
        </main>

        <footer className={styles.footer}><strong>@calhacks '24 yippee:   </strong> Andrew Chen, Kevin Hu, Prateek Panda (and Daniel Wang I guess).</footer>
      </div>
    </>
  );
};

export default Home;
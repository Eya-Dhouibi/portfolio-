import { motion } from "framer-motion";

interface MobileMenuProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ showModal, setShowModal }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: showModal ? "0%" : "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4"
    >
      <button className="icon-close" onClick={() => setShowModal(false)}>
        ✖
      </button>
      <ul className="modal mt-4">
        <li className="navbar_item"><a className="navbar_link" href="/#about-me">Home</a></li>
        <li className="navbar_item"><a className="navbar_link" href="/#about">Profile</a></li>
        <li className="navbar_item"><a className="navbar_link" href="/#skills">Skills</a></li>
        <li className="navbar_item"><a className="navbar_link" href="/#services">Services</a></li>
        <li className="navbar_item"><a className="navbar_link" href="/#project">Projects</a></li>
        <li className="navbar_item"><a className="navbar_link" href="/#contact">Contact</a></li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;

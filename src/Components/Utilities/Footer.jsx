export function Footer({ children }) {
    return (
      <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{children}</div>
      </div>
)};

const footerStyle = {
    fontSize: "20px",
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    pointerEvents: "none",
};
  
const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
    pointerEvents: "none",
};


export default Footer;

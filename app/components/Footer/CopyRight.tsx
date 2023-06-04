import Container from "../Container";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const CopyRight = () => {
  const socialIcons = [
    { icon: <FaInstagram size={18} />, key: "instagram" },
    { icon: <FaFacebookF size={18} />, key: "facebook" },
    { icon: <FaTwitter size={18} />, key: "twitter" },
  ];

  return (
    <div className="border-t-[1px]">
      <Container>
        <div className="flex justify-between pt-8 pb-16">
          <span className="text-sm font-normal ">2023, All right reserved.</span>
          <div className="flex flex-row">
            {socialIcons.map((social ,i) => (
              <div key={i} className="mr-4">
                {social.icon}
              </div>  
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CopyRight;

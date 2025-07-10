import {
    FaLinkedin,
    FaGoogleScholar,
    FaRegIdBadge,
    FaGithub,
    FaSquareFacebook,
} from "react-icons/fa6";

import profileImg from "./images/profile.png";
import resumePdf from "./images/chia-ling-resume.pdf";

export const UserInfo = {
    name: "Chia-Ling Hsu",
    profile_url: profileImg,
    headline: "Student @ National Chengchi University",
    email: "sum3439@gmail.com",
    links: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/chialinghsu-tw",
            icon: FaLinkedin,
        },
        {
            name: "Résumé",
            url: resumePdf,
            icon: FaRegIdBadge,
        }
    ],
    // you can use HTML syntax here (e.g. <br/>, <a>, <strong>, ...)
    biography: `
        Hi! I'm Chia-Ling, an MBA student at National Chengchi University (NCCU). I view challenges as opportunities to grow and enjoy combining creativity with analytical thinking to solve problems. With experience in data analysis, marketing support, and team leadership, I bring a balanced approach that blends strategy and imagination. I'm passionate about collaboration and always eager to learn.
        <div class="my-2"></div>
        <div class="my-2"></div>
        Outside of work, I love dancing - it keeps me grounded and often sparks new ideas. Thanks for stopping by!
    `
}
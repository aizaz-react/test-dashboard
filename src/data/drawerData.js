import PersonalLinksIcon from "../assets/PersonalLinksIcon";
import SharedLinksIcon from "../assets/SharedLinksIcon";
import DashboardIcon from "../assets/DashboardIcon";
import AdminGroupsIcon from "../assets/AdminGroupsIcon";
import SmartAlertIcon from "../assets/SmartAlertIcon";
import CoDevelopment from "../assets/CoDevelopment";
import SupportIcon from "../assets/SupportIcon";
import FeedbackIcon from "../assets/FeedbackIcon";
import FacebookIcon from "../assets/FacebookIcon";
import Telegram from "../assets/Telegram";
import YoutubeIcon from "../assets/YoutubeIcon";

const drawerList = [
  {
    icon: <DashboardIcon width="1.6rem" color="#fff" />,
    title: "Dashboard",
    dropdownIcon: true,
  },
  {
    icon: <SharedLinksIcon width="1.6rem" color="#fff" />,
    title: "Shared links",
    dropdownIcon: false,
  },
  {
    icon: <PersonalLinksIcon width="1.6rem" color="#fff" />,
    title: "Personal links",
    dropdownIcon: false,
  },
  {
    icon: <AdminGroupsIcon width="1.6rem" color="#fff" />,
    title: "Admin groups",
    dropdownIcon: true,
  },
  {
    icon: <SmartAlertIcon width="1.6rem" color="#fff" />,
    title: "Smart Alerts",
    dropdownIcon: false,
  },
  {
    icon: <AdminGroupsIcon width="1.6rem" color="#fff" />,
    title: "Trading Diary",
    dropdownIcon: false,
  },
  {
    icon: <CoDevelopment width="1.6rem" color="#fff" />,
    title: "Co-Development",
    dropdownIcon: false,
  },
  {
    icon: <SupportIcon width="1.6rem" color="#fff" />,
    title: "Support",
    dropdownIcon: false,
  },
  {
    icon: <FeedbackIcon width="1.6rem" color="#fff" />,
    title: "Feedback",
    dropdownIcon: false,
  },
];

const socialIcons = [
  { icon: <FacebookIcon width="1.6rem" color="#1CB393" /> },
  { icon: <Telegram width="1.6rem" color="#1CB393" /> },
  { icon: <YoutubeIcon width="1.6rem" color="#1CB393" /> },
];

export { socialIcons, drawerList };

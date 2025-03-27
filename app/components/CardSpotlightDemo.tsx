import { CardSpotlight } from "../components/ui/card-spotlight";
import { FaGithub } from "react-icons/fa";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-80 w-full flex">
      <div className="flex justify-between w-full px-30 mx-40">
        <div>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Socials
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <ul className="list-none  mt-2">
              <Step title="Instagram : @saichandravagicharla" />
              <Step title="Facebook : @saichandravagicharla" />
              <Step title="LinkedIN : @sai Chandra" />
              <Step title="X : @DoremonSai76759" />
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
              Contact
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <ul className="list-none  mt-2">
              <Step title="Email : chandrasai908@gmail.com" />
              <Step title="Mobile : +91 9493357512" />
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xl font-bold relative z-20 mt-2 text-white flex flex-col justify-end">
      <a href="https://github.com/saichandra-1" target="_blank">
      <FaGithub size={40} className="hover:cursor-pointer" />
      </a>
      </div>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      {/* <CheckIcon /> */}
      <p className="text-white">{title}</p>
    </li>
  );
};

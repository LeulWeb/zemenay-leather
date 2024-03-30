import {
  Typography,
  Card,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

// import icons
import { IoCallOutline } from "react-icons/io5";
import { ContactForm } from "../components/section/ContactSection";
import { Hover } from "../components/UI/Hover";

const Contact = () => {
  return (
    <main>
      <section className="w-screen ">
        <Hover />
      </section>

      {/* TODO: remove animejs and replace orginal address  */}
      <section className="text-primary bg-gray-100  w-screen  ">
        <ContactForm />
      </section>

      {/* map */}
      <section>
        <MapLocation />
      </section>
    </main>
  );
};

export default Contact;

export const ContactUsForm = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography className="text-primary" variant="h4">
        Let&apos;s talk
      </Typography>
      <Typography className="mt-1 font-normal">
        Tell us what is in your mind.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-white-200 focus:!border-t-white-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-white-200 focus:!border-t-white-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <div className="w-96">
            <Textarea label="Message" />
          </div>
        </div>

        <Button className="mt-6" fullWidth>
          sign up
        </Button>
      </form>
    </Card>
  );
};

export const MapLocation = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509603!2d144.95373531531592!3d-37.81720997975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e9!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633076766489!5m2!1sen!2sus";

  return (
    <div>
      <iframe
        height="450"
        width="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      ></iframe>
    </div>
  );
};

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

const Contact = () => {
  return (
    <main>
      <section className="bg-hero-background w-screen min-h-72 flex items-center justify-center ">
        <div className="text-white text-center  py-5">
          <Typography variant="h1" className="my-5">
            Contact Us
          </Typography>
          <Typography className="py-5" variant="lead">
            We&apos;d love to hear from you!
          </Typography>

          {/* address and info */}

          <section className="w-screen my-5 ">
            <div className="flex flex-col md:flex-row space justify-between w-8/12 mx-auto  ">
              {/* phone */}
              <div className="flex flex-col items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <IoCallOutline size={20} />{" "}
                  <Typography className="text-white" variant="h6">
                    Phone
                  </Typography>
                </div>
                <div>
                  <Typography className="text-white" variant="h4">
                    +234 803 123 4567
                  </Typography>
                </div>
              </div>

              {/*  */}

              <div className="flex flex-col items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <IoCallOutline size={20} />{" "}
                  <Typography className="text-white" variant="h6">
                    Phone
                  </Typography>
                </div>
                <div>
                  <Typography className="text-white" variant="h4">
                    +234 803 123 4567
                  </Typography>
                </div>
              </div>

              {/*  */}
              <div className="flex flex-col items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <IoCallOutline size={20} />{" "}
                  <Typography className="text-white" variant="h6">
                    Phone
                  </Typography>
                </div>
                <div>
                  <Typography className="text-white" variant="h4">
                    +234 803 123 4567
                  </Typography>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* TODO: remove animejs and replace orginal address  */}
      <section className="text-primary bg-gray-100  w-screen  ">
        <ContactForm />
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
